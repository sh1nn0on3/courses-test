import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoVncert.png";
import IconHeader from "../taskbar/IconHeader";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  console.log("🚀 ~ file: Header.jsx:10 ~ Header ~ open:", open);

  // const menuRef = useRef();
  // const imgRef = useRef();

  // useEffect(() => {
  //   let handler = (e) => {
  //     if(e.target !== menuRef.current ){
  //       setOpen(false)
  //     }
  //     console.log(e.target === menuRef.current);
  //   };
  //   document.addEventListener("mousedown", handler);
  // });

  const user = useSelector((state) => state.auth?.login.currentUser?.infor);

  return (
    <>
      <header className="sticky z-40 top-0 left-0 w-full flex justify-center  bg-[#1D2539] text-[#8F929D] px-10 py-5">
        <div className="flex justify-between items-center max-w-[1200px] w-full ">
          <div className="left flex items-center justify-center ml-5 gap-3 ">
            <div className="">
              <img
                // src="https://assets.tryhackme.com/img/THMlogo.png"
                src={logo}
                alt=""
                className=" w-40  text-white rounded-lg mr-5 cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <IconHeader />
          </div>
          {user ? (
            <div className=" font-semibold  flex justify-end items-center text-[#8F929D] ">
              Hi,{" "}
              {user?.userName
                ?.split()
                ?.map((word) => word?.charAt(0).toUpperCase() + word.slice(1))
                ?.join("")}
              <div
                onClick={() => setOpen(!open)}
                // ref={imgRef}
                className="ml-3 w-8 h-8  rounded-full bg-slate-300 flex justify-center items-center cursor-pointer text-gray-700  "
              >
                <p>{user?.userName?.charAt(0).toUpperCase()}</p>
              </div>
              {open && (
                <div className="bg-[#101826] text-[#f7f3e2] top-20 z-20  shadow-xl w-[150px] absolute rounded-xl transition-all opacity-80 ">
                  <div
                    //  ref={menuRef}
                    className="px-5 py-3 flex flex-col font-[400]"
                  >
                    <p
                      className="my-3 cursor-pointer hover:text-gray-500"
                      onClick={() => navigate("/profile")}
                    >
                      Trang cá nhân
                    </p>
                    <p
                      className="my-3 cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        localStorage.clear();
                        navigate("/");
                        location.reload();
                      }}
                    >
                      Đăng xuất
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <i className="fa-solid fa-magnifying-glass w-8 h-8 flex items-center justify-center md:hidden cursor-pointer " />
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                  location.reload();
                }}
                // className="px-5 py-1 rounded-full  text-white bg-[#f05a2d] cursor-pointer font-[500] text-[14px] hover:bg-[#ff3c00] transition-all "
                className="button "
              >
                Đăng nhập 
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
