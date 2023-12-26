import axios from "axios";

const baseConfig = {
    baseURL: import.meta.env.VITE_API_URL,
};
const request = (config) => {
    return axios({...baseConfig, ...config});
};

const requestWithToken = (config) => {
    const token = localStorage.getItem("access_token");
    console.log(baseConfig);

    return axios({
        ...baseConfig,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        ...config,
    });
};

export {request, requestWithToken};