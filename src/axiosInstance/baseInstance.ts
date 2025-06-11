import axios , { AxiosResponse, AxiosError, AxiosInstance } from "axios";
import Config from 'react-native-config'

const API_URL_TYPE = Config.API_URL_TYPE??'local';
console.log('API_URL_TYPE', API_URL_TYPE);
const initializeAxios = (): AxiosInstance => {
    var uRL = 'http://api.jejutour.kro.kr/';

    if (API_URL_TYPE === 'local') {
        uRL = 'http://localhost:8000/';
    } else if (API_URL_TYPE === 'dev') {
        uRL = 'http://dev.api.jejutour.kro.kr/';
    } else if (API_URL_TYPE === 'prod') {
        uRL = 'http://api.jejutour.kro.kr/';
    }  

    const instance = axios.create({
    baseURL: uRL,
    withCredentials: true,
    timeout: 2000,
    });

    instance.interceptors.request.use(
        async config => {
        config.headers['Content-Type'] = 'application/json';
        return config;
        },
        (err: AxiosError) => {
          Promise.reject(err);
        },
    );

    instance.interceptors.response.use(
    
    async (response : AxiosResponse) => {
        const { config } = response;
        const originalRequest = config;
        console.log('Axios Api originalRequest ==>  ', originalRequest);
        console.log('Axios Api response ==>  ', response);
        if (response.status === 401) { // 401: Unauthorized
        // 토큰 만료 혹은 로그인 정보 없음
        /*removeAccessToken();
        return await BaseInstance
            .post('/users/reissue-token', { // 토큰 재발급
            loginId: loginId,
            refreshToken: refreshToken,
            })
            .then(async res => { // accessToken과 refreshToken 저장
            setAccessToken(res.data.result.accessToken);
            setRefreshToken(res.data.result.refreshToken);
            // 헤더에 새로운 accessToken 입력
            originalRequest.headers.Authorization = `${res.data.result.accessToken}`;
            return axios(originalRequest);
            });*/
        } else if (response.status === 500) { // 403: Forbidden
            console.log('response status 500');
        }
        // 로그인 정보가 있는 경우 (일반 요청)
        return response.data;
    },
    (err: AxiosError) => {
        Promise.reject(err);
    },
    );

    return instance;
}

const initializeTourAxios = (apiType : String): AxiosInstance => {
    var uRL = '';

    if (apiType === 'basic') {
        uRL = 'https://apis.data.go.kr/B551011/TarRlteTarService1';
    } else if (apiType === 'korser') {
        uRL = 'https://apis.data.go.kr/B551011/KorService2';
    } else if (apiType === 'prod') {
        uRL = 'https://apis.data.go.kr/B551011/TarRlteTarService1';
    }  

    const instance = axios.create({
    baseURL: uRL,
    withCredentials: true,
    timeout: 2000,
    });

    instance.interceptors.request.use(
        async config => {
        config.headers['Content-Type'] = 'application/json';
        return config;
        },
        (err: AxiosError) => {
          Promise.reject(err);
        },
    );

    instance.interceptors.response.use(
    
    async (response : AxiosResponse) => {
        const { config } = response;
        const originalRequest = config;
        console.log('Axios Tour originalRequest ==>  ', originalRequest);
        console.log('Axios Tour response ==>  ', response);
        if (response.status === 401) { // 401: Unauthorized
        
        } else if (response.status === 500) { // 403: Forbidden
            console.log('response status 500');
        } else {
            const resultCode = response.data.response.header.resultCode??'';
            if (resultCode !== '0000') {
                console.log('response status resultCode', resultCode);
                throw new Error(`API Error: ${resultCode}`);
            } else {
                return response.data;
            }
        }
    },
    (err: AxiosError) => {
        Promise.reject(err);
    },
    );

    return instance;
}

export default {initializeAxios , initializeTourAxios};

