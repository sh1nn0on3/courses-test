import axios from "axios";

const createCustomAxios = (token) => {
  const instance = axios.create({
    baseURL: "http://103.28.174.29:4180",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  instance.interceptors.request.use(
    (config) => {
      // Sửa đổi cấu hình yêu cầu nếu cần
    //   if (config.headers && config.headers.Authorization) {
    //     console.log(
    //       "Token found in request headers:",
    //       config.headers.Authorization
    //     );
    //   }
      return config;
    },
    (error) => {
      // Xử lý lỗi yêu cầu
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      // Xử lý phản hồi thành công
      return response;
    },
    (error) => {
      // Xử lý lỗi phản hồi
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createCustomAxios;
