import axios from "axios";
import createCustomAxios from "./customAxios";

const CourseApi = (token) => {
  const customAxios = createCustomAxios(token);
  // console.log("🚀 ~ file: profile.jsx:5 ~ CourseApi ~ customAxios:", customAxios)
  customAxios
    .get("/api/get-lesson?id=1")
    .then((response) => {
      console.log(response.data);
      // console.log("login");
    })
    .catch((error) => {
      console.error(error);
      // console.log("failed");
    });
};

export const GetCourse = async () => {
  const res = await axios.get("http://103.28.174.29:4180/api/get-lesson");
  if (res.data.errorCode === 0) {
    return res.data;
  }
};

export default CourseApi;
