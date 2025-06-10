import initializeAxios from "./baseInstance";

const  apiInstance = initializeAxios.initializeAxios(); 

const UserAxios = {
    
  getUser: async (data: any) => {
    try {
      const response = await apiInstance.post('/api/user/info', data);
        console.log('getUser response', response);
      return response;
    } catch (error) {
      throw new Error('Failed to fetch user');
    }
  },

};

export default UserAxios;
