import axios from "axios";


const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
  
  const request = (config) => {
    console.log(config);
    return instance({ ...config });
  };
  
  const requestWithToken = (config) => {
    const token = localStorage.getItem("access_token");
  
    return instance({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ...config,
    });
  };

export {request, requestWithToken};