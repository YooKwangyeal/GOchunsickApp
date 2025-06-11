import Config from 'react-native-config'

const TOUR_API_KEY = Config.TOUR_API_KEY ?? '';

export class TourParams {
  serviceKey: string = TOUR_API_KEY; // 서비스 인증키
  pageNo: number = 0;
  numOfRows: number = 10;
  contentTypeId? : string; //관광타입(12:관광지, 14:문화시설, 15:축제공연행사, 25:여행코스, 28:레포츠, 32:숙박, 38:쇼핑, 39:음식점) ID
  contentId? : string; //콘텐츠ID(옵션,미기입시 전체목록조회)
  arrange : string = 'A'; //정렬구분 (A=제목순, C=수정일순, D=생성일순) 대표이미지가반드시있는정렬(O=제목순, Q=수정일순, R=생성일순)
  MobileOS: string = 'AND'; // OS 구분 : IOS (아이폰), AND (안드로이드), WEB(웹), ETC(기타)
  MobileApp: string = 'gochunsick'; //서비스명(어플명)
  baseYm?: number; //기준 날짜 조회(형식:YYYYMM)
  areaCd?: string; // 관광지 지역 코드 ( 매뉴얼 문서 시군구 코드정보 참고 )
  signguCd?: string; //관광지 시군구 코드 ( 매뉴얼 문서 시군구 코드정보 참고 )
  _type: string = 'json'; //답메세지 형식 : REST방식의 URL호출 시 json값 추가(디폴트 응답메세지 형식은XML)
  cat1?: string; //대분류(서비스분류코드조회 참고)
  cat2?: string; //중분류(서비스분류코드조회 참고, cat1 필수입력)
  cat3?: string; //소분류(서비스분류코드조회 참고, cat1/cat2필수입력)
  modifiedtime? : string; //수정일(형식 :YYYYMMDD)
  lDongRegnCd? : string; //법정동 시도 코드(법정동코드조회 참고)
  lDongSignguCd? : string; //법정동 시군구 코드(법정동코드조회 참고, lDongRegnCd 필수입력)
  lclsSystm1? : string; //분류체계 1Deth(분류체계코드조회 참고)
  lclsSystm2? : string; //분류체계 2Deth(분류체계코드조회 참고, lclsSystm1 필수입력)
  lclsSystm3? : string; //분류체계 3Deth(분류체계코드조회 참고, lclsSystm1/lclsSystm2 필수입력)

}


export class TourResponse {
  response: Object = {
    header: Object,
    body: Object
  };
}
