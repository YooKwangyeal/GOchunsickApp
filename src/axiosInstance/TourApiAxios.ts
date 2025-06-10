import initializeAxios from "./baseInstance";
import { TourParams , TourParams2} from "./models/tourModel";

const  tourApiInstance = initializeAxios.initializeTourAxios(''); 

const TourAxios = {

    // 지역기반 관광지별 연관 관광지 정보 목록 조회
    getAreaBasedTourList : async (data : TourParams) => {
        try {
            const response = await tourApiInstance.post("/areaBasedList1", data);
            console.log('getTour response', response);
            return response;
        } catch (error) {
            throw new Error('Failed to fetch tour data');
        }
    }
  
};

export default TourAxios;