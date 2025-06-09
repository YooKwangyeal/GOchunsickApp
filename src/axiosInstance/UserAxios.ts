import instance from "./BaseInstance";

const UserAxios = {

  getUser : async (data: any) => {
    try {
        const response = await instance.post("/api/user/info", data);
        return response;
    } catch (error) {
        throw new Error('Failed to fetch user');
    }
    },
  
};

export default UserAxios;