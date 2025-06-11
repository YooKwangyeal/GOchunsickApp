import initializeAxios from "./baseInstance";
import { TourParams ,TourResponse } from "./models/tourModel";

const  tourApiInstance = initializeAxios.initializeTourAxios('korser'); 

const TourAxios = {

    // 지역기반 관광지별 연관 관광지 정보 목록 조회
    getAreaBasedTourList : async (data : TourParams) => {
        try {
            //const response = await tourApiInstance.get("/areaBasedList2",{params:data});
            const tourResponse : TourResponse = await tourApiInstance.get("/areaBasedList2",{params:data});

            console.log('getTour response', tourResponse);
            return tourResponse;
        } catch (error) {
            throw new Error('Failed to fetch tour data');
        }
    }
  
};

export default TourAxios;