import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import UserAxios from '../axiosInstance/UserAxios'; 

const AxiosScreen = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    console.log('useEffect');
    const fetchUser = async () => {
      try {
        const data = {m_id : 2}
        
        const userData = await UserAxios.getUser(data); // userId 1로 요청
        console.log(userData);
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  },[]);

  return (
    <View>
      <Text>m_id : {user.m_id}</Text>
      <Text>m_sns_key : {user.m_sns_key}</Text>
    </View>
  );
};

export default AxiosScreen;