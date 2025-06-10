import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Config from 'react-native-config';

type KakaoMapProps = {
  latitude: number;
  longitude: number;
};

const KAKAO_MAP_API_KEY = Config.KAKAO_MAP_API_KEY; // 환경 변수에서 API 키 가져오기
const DEFAULT_LAT = 33.450701;
const DEFAULT_LNG = 126.570667;

export default function KakaoMap({latitude, longitude}: KakaoMapProps) {
  const lat = latitude || DEFAULT_LAT;
  const lng = longitude || DEFAULT_LNG;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false"></script>
        <style>
          html, body, #map { width: 100%; height: 100%; margin: 0; padding: 0; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          kakao.maps.load(function() {
            var mapContainer = document.getElementById('map');
            var mapOption = {
              center: new kakao.maps.LatLng(${lat}, ${lng}), // 동적으로 받은 위도 경도
              level: 3
            };
            var map = new kakao.maps.Map(mapContainer, mapOption);
            var markerPosition = new kakao.maps.LatLng(${lat}, ${lng}); // 동적으로 받은 위도 경도;
            var marker = new kakao.maps.Marker({
              position: markerPosition
            });
            marker.setMap(map);
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{html: htmlContent}}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
