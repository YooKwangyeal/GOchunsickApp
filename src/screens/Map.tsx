import React, {useEffect, useState} from 'react';
import {View, StyleSheet, PermissionsAndroid, Platform} from 'react-native';
import {WebView} from 'react-native-webview';
import Config from 'react-native-config';
import Geolocation from 'react-native-geolocation-service';

const KAKAO_MAP_API_KEY = Config.KAKAO_MAP_API_KEY; // 환경 변수에서 API 키 가져오기
const DEFAULT_LAT = 37.147754;
const DEFAULT_LNG = 127.080874;

interface ILocation {
  latitude: number;
  longitude: number;
}

export default function KakaoMap() {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  let _watchId: number;

  useEffect(() => {
    _watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );

    return () => {
      if (_watchId !== null) {
        Geolocation.clearWatch(_watchId);
      }
    };
  }, []);

  const lat = location?.latitude || DEFAULT_LAT;
  const lng = location?.longitude || DEFAULT_LNG;

  console.log(`Current Location: ${lat}, ${lng}`);
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&libraries=services"></script>
        <style>
          html, body, #map { width: 100%; height: 100%; margin: 0; padding: 0; }
          .wrap {position: absolute;left: 0;bottom: 40px;width: 288px;height: 132px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;}
          .wrap * {padding: 0;margin: 0;}
          .wrap .info {width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
          .wrap .info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
          .info .title {padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
          .info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
          .info .close:hover {cursor: pointer;}
          .info .body {position: relative;overflow: hidden;}
          .info .desc {position: relative;margin: 13px 0 0 90px;height: 75px;}
          .desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
          .desc .jibun {font-size: 11px;color: #888;margin-top: -2px;}
          .info .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
          .info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
          .info .link {color: #5085BB;}
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
            var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 테스트용
                imageSize = new kakao.maps.Size(50, 69), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = new kakao.maps.LatLng(${lat}+0.001, ${lng}); // 동적으로 받은 위도 경도;

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
              position: markerPosition,
              image: markerImage // 마커이미지 설정
            });

            // 커스텀 오버레이에 표시할 컨텐츠 입니다
            // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
            // 별도의 이벤트 메소드를 제공하지 않습니다
            var content = '<div class="wrap">' +
                        '    <div class="info">' +
                        '        <div class="title">' +
                        '            파리 바게뜨' +
                        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
                        '        </div>' +
                        '        <div class="body">' +
                        '            <div class="img">' +
                        '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
                        '           </div>' +
                        '            <div class="desc">' +
                        '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
                        '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
                        '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
                        '            </div>' +
                        '        </div>' +
                        '    </div>' +
                        '</div>';

            // 마커 위에 커스텀오버레이를 표시합니다
            // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
            var overlay = new kakao.maps.CustomOverlay({
                content: content,
                map: map,
                position: marker.getPosition()
            });

            // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                overlay.setMap(map);
            });

            // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
            function closeOverlay() {
                overlay.setMap(null);
            }
            window.closeOverlay = closeOverlay;
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
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
