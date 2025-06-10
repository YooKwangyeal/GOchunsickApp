import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import UserAxios from '../axiosInstance/UserAxios'; 
import TourAxios from '../axiosInstance/TourApiAxios'; 
import Config from 'react-native-config'
import { TourParams } from "../../src/axiosInstance/models/tourModel"; // 모델 임포트

const AxiosScreen = () => {
  const [user, setUser] = useState<any>(null);
  const [tour, setTour] = useState<any>(null);

  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = {m_id : 2}
        
        var userData = await UserAxios.getUser(data); // userId 1로 요청
        if (userData === undefined || userData === null) {
          console.error('User data is undefined or null');
          return;
        }

        console.log(userData);
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTour = async () => {
      try {
        var tourData : TourParams =  {
          serviceKey: Config.TOUR_API_KEY??'',
          pageNo: 1,
          numOfRows: 10,
          MobileOS: 'AND',
          MobileApp: 'gochunsick',
          baseYm: 202310,
          areaCd: '50',
          signguCd: '50110',
          _type: 'json'
        }
        console.log('tourData', tourData);
        var tour = await TourAxios.getAreaBasedTourList(tourData); // userId 1로 요청
        if (tour === undefined || tour === null) {
          console.error('tour data is undefined or null');
          return;
        }

        console.log(tour);
        setTour(tour);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
    fetchTour();
  },[]);

    if (user === null || user === undefined) {
      return (
      <View>
        <Text>loading</Text>
      </View>
      );
    } else {
      return (
      <View>
        <Text>m_id : {user.m_id}</Text>
        <Text>m_sns_key : {user.m_sns_key}</Text>
        <Text>{tour??''}</Text>
      </View>  
      );
    }
    
};

export default AxiosScreen;