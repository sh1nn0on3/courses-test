import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { Helmet } from "react-helmet-async";
import InputField from "../snippetTags/InputField";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { registerUser } from "../../api/auth";
import { useDispatch } from "react-redux";
import Logo from "../../assets/pc.svg";
// import Logo from "../../assets/img/cvvv.jpg";

const Register = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [validateMsg, setValidateMsg] = useState({});

  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log("🚀 ~ file: Register.jsx:22 ~ Register ~ users:", users);

  const validateAll = () => {
    const msg = {};
    if (isEmpty(users.username)) {
      msg.username = "Vui lòng nhập Tên";
    }
    if (isEmpty(users.email)) {
      msg.email = "Vui lòng nhập Email";
    } else if (!isEmail(users.email)) {
      msg.email = "Có phải email đâu ??";
    }

    if (isEmpty(users.password)) {
      msg.password = "Vui lòng nhập Password";
    }
    setValidateMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    registerUser(users, dispatch, navigate);
  };

  return (
    <>
      <Helmet>
        <title>Đăng ký</title>
        <meta
          name="description"
          content="Shop ... với giao diện được thiết kế theo phong cách tối giản"
        />
      </Helmet>
      <Form>
        <div className="bg-[#0F162B] h-[90vh] w-full flex justify-center items-center">
          <div className="w-full max-w-[1200px]  h-60 flex justify-between items-center">
            <div className="w-[600px] flex flex-col justify-center items-center">
              <h1 className=" font-bold text-3xl mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Welcome Back!!
              </h1>
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <div className="w-full flex flex-col gap-4 max-w-4xl">
                  <form action="post" className="flex flex-col gap-4 max-w-4xl">
                    <InputField
                      nameLabel="Username"
                      placeholder="Họ và tên của bạn ..."
                      name="username"
                      type="text"
                      value={users.username}
                      setValue={setUsers}
                    />
                    <InputField
                      nameLabel="Email"
                      placeholder="Email của bạn ..."
                      name="email"
                      type="text"
                      value={users.email}
                      setValue={setUsers}
                    />
                    <InputField
                      nameLabel="Password"
                      placeholder="Mật khẩu của bạn ..."
                      name="password"
                      type="password"
                      value={users.password}
                      setValue={setUsers}
                    />
                    <InputField
                      nameLabel="Confirm Password"
                      placeholder="Nhập lại mật khẩu ..."
                      name="password"
                      type="password"
                      // value={users.password}
                      // setValue={setUsers}
                    />
                  </form>

                  <p className="pl-5 text-red-500 text-center">{`${
                    validateMsg.name ||
                    validateMsg.email ||
                    validateMsg.password ||
                    ""
                  }`}</p>
                </div>
                <div className="w-full flex gap-2 justify-center items-center max-w-2xl ">
                  <button
                    className="px-32 mt-5 w-full  rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 py-4 text-center font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 sm:inline-block "
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Đăng ký
                  </button>
                </div>
                <p className="mt-2 text-slate-400 cursor-pointer">
                  Bạn đã có tài khoản ?{" "}
                  <span
                    className="text-pink-400 "
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    {" "}
                    Đăng nhập
                  </span>
                </p>
                <p className="text-center font-mono text-sm text-gray-300 mt-2 ">
                  Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý
                  với <br />{" "}
                  <span className=" text-lime-400">Điều khoản sử dụng</span> của
                  chúng tôi.
                </p>
              </div>
            </div>
            <div className="">
              <img src={Logo} className="w-[400px]  " alt="#" />
              {/* <p className="text-gray-400 text-center text-3xl mt-5">
                Nhà sáng lập{" "}
              </p> */}
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Register;
