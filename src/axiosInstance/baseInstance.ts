import axios , { AxiosResponse, AxiosError } from "axios";

const instance = axios.create({
baseURL: 'http://api.jejutour.kro.kr/',
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
    console.log('response status', response.status);
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
    }
    // 로그인 정보가 있는 경우 (일반 요청)
    return response.data;
  },
  (err: AxiosError) => {
    Promise.reject(err);
  },
);

export default instance;

