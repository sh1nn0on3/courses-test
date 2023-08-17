import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailed,
} from "../redux/authSlice";


export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://103.28.174.29:4180/api/sign-in", user);
    console.log(typeof res);
    // console.log("🚀 ~ file: auth.jsx:15 ~ loginUser ~ res:", res.data);
    if (res.data.errorCode !== 0) {
      console.log("Có lỗi");
      dispatch(loginFailed(res.data));
      return;
    }
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (users, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("http://103.28.174.29:4180/api/sign-up", users);
    console.log("🚀 ~ file: auth.jsx:28 ~ registerUser ~ res:", res);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(registerFailed());
  }
};
