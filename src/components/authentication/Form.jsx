import Logo from "../../assets/img/logo.png";
import Facebook from "../../assets/img/fb.png";
import Google from "../../assets/img/gg.png";
import { useNavigate } from "react-router-dom";

export default function Form({ children }) {
  const navigate = useNavigate();
  return (
    <form>
      <div className="min-h-screen bg-[#0F162B] flex flex-col items-center">
        <div className="w-full h-[10vh] text-white px-16 py-10 ">
          <div
            className="text-[20px] text-gray-400 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fa-solid fa-arrow-left-long pr-2"></i>Trở về trang chủ
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 justify-center items-center bg-[#171E2C] w-full p-8 text-gray-300 ">
          <img alt="avt" src={Logo} className="w-32" />
          <div>
            <h1 className="font-bold text-2xl text-center">
              Đăng nhập 
            </h1>
          </div>
        </div> */}
        {/* <div className="flex gap-4">
          <ul className="border-2 border-red-500 p-3 rounded-full cursor-pointer hover:bg-slate-200 transition-all ">
            <li>
              <img alt="" src={Google} className="w-8" />
            </li>
          </ul>
          <ul className="border-2 border-red-500 p-3  rounded-full cursor-pointer hover:bg-slate-200 transition-all ">
            <li>
              <img alt="" src={Facebook} className="w-8" />
            </li>
          </ul>
        </div> */}
        {children}
      </div>
    </form>
  );
}
