

interface TourParams {
  serviceKey: string;
  pageNo: number;
  numOfRows: number;
  MobileOS: string; // OS 구분 : IOS (아이폰), AND (안드로이드), WEB(웹), ETC(기타)
  MobileApp: string; //서비스명(어플명)
  baseYm: number; //기준 날짜 조회(형식:YYYYMM)
  areaCd: string; // 관광지 지역 코드 ( 매뉴얼 문서 시군구 코드정보 참고 )
  signguCd: string; //관광지 시군구 코드 ( 매뉴얼 문서 시군구 코드정보 참고 )
  _type: string; //답메세지 형식 : REST방식의 URL호출 시 json값 추가(디폴트 응답메세지 형식은XML)
}

interface TourParams2 {
  username: string;
  id: number;
}




export type { TourParams,TourParams2 };