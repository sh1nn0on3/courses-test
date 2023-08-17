import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.login.currentUser?.infor);
  useEffect(() => {
    if (!user) {
      alert("Bạn phải đăng nhập để được vào");
      navigate("/login");
    }
  }, [user , navigate]);
  return (
    <>
      {user && (
        <div className="w-full flex flex-col bg-[#0F102E] min-h-screen justify-center items-center">
          <header className="w-full fixed flex justify-between items-center top-0 px-5 py-3">
            <div className="left flex items-center">
              {/* <img
                src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                alt=""
                className="w-10 h-10 rounded-lg mr-5 cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              /> */}
              <p
                onClick={() => {
                  navigate("/");
                }}
                className=" font-[600] text-[0.8rem] text text-[#A6ACBA] hover:text-gray-800 cursor-pointer "
              >
                <i className="fa-solid fa-arrow-left mr-2" />
                <span>QUAY LẠI</span>
              </p>
            </div>
            {/* <div className="ml-3 w-8 h-8 rounded-full bg-slate-300 flex justify-center items-center ">
              <span>{user?.userName.charAt(0).toUpperCase()}</span>
            </div> */}
          </header>
          <div className="w-full max-w-[1100px]">
            <div className=" flex flex-col justify-center items-center">
              <div className="flex flex-col">
                <img
                  src="https://st3.depositphotos.com/1000820/13345/i/450/depositphotos_133450512-stock-photo-fantasy-night-winter-landscape.jpg"
                  alt="#"
                  className="rounded-b-3xl w-[1200px] h-[400px]"
                />
                <div className="ml-12 flex">
                  <div className="  w-40 h-40 -translate-y-20 rounded-full bg-white flex justify-center items-center  ">
                    <span className="text-[50px] bg-slate-300 w-36 h-36 rounded-full flex justify-center items-center  ">
                      {user?.userName
                        ? user?.userName.charAt(0).toUpperCase()
                        : "A"}
                    </span>
                  </div>
                  <div className="mt-4 ml-5 text-[40px] font-semibold text-gray-300 ">
                    {user?.userName ? user?.userName : "Demo"}
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between gap-5   ">
              <div className=" xl:w-[420px] w-[90%] mx-auto  flex flex-col gap-5 top-0 ">
                <div className="px-5 py-3 border shadow-lg rounded-xl bg-[#1E293B] ">
                  <p className=" text-[18px] bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-extrabold text-transparent ">
                    Giới thiệu
                  </p>
                  <nav className="mt-3">
                    <i className="fa-solid fa-user-group text-slate-500 w-5"></i>
                    <span className="ml-3 font-[400] text-slate-300 ">
                      Thành viên của VNCERT/CC kể từ tháng 5/2023
                    </span>
                  </nav>

                  <nav className="mt-3">
                    <i className="fa-solid fa-envelope text-gray-500 w-5"></i>
                    <span className="ml-3 font-[400] text-slate-300">abc@abc.abc</span>
                  </nav>

                  <nav className="mt-3">
                    <i className="fa-solid fa-key text-gray-500 w-5"></i>
                    <span className="ml-3 font-[400] text-slate-300  ">*******</span>
                  </nav>
                </div>
                <div className="px-5 py-3 border shadow-lg rounded-xl bg-[#1E293B]">
                  <p className=" text-[18px] bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-extrabold text-transparent ">
                    Hoạt động gần đây
                  </p>
                  <nav className="mt-3">
                    {/* <span className="ml-3 text-[14px] font-[400]">
                      Chưa cập nhật
                    </span> */}
                    <i className="fa-solid fa-trophy text-gray-500 w-5"></i>
                    <span className="ml-3 font-[400] text-slate-300 ">Master</span>
                  </nav>
                  <nav className="mt-3">
                    <i className="fa-solid fa-star text-gray-500 w-5" />
                    <span className="ml-3 font-[400] text-slate-300 ">1500 point</span>
                  </nav>
                </div>
              </div>
              <div className="px-5 py-3 border shadow-lg rounded-xl xl:w-[620px] mx-auto  w-[90%] bg-[#1E293B] ">
                <p className="text-[20px] bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-extrabold text-transparent ">
                  Các khóa học đã tham gia
                </p>
                <div className="flex my-10">
                  <img
                    src="https://www.thesslstore.com/blog/wp-content/uploads/2018/11/bigstock-Hacking-And-Phishing-Concept-263466271.jpg"
                    alt="#"
                    className="rounded-xl w-[220px] mr-5 "
                  />
                  <div className="">
                    <p className="text-gray-300">Man in the middle</p>
                    <span className="text-[12px] font-[400] text-gray-400 ">
                      Kẻ tấn công can thiệp vào giao tiếp giữa hai bên (ví dụ:
                      máy tính và máy chủ) và thực hiện việc theo dõi, thay đổi
                      hoặc chặn thông tin trao đổi giữa họ
                    </span>
                  </div>
                </div>
                <div className="flex my-10">
                  <img
                    src="https://i.ytimg.com/vi/Gf9X3jm_k44/maxresdefault.jpg"
                    alt="#"
                    className="rounded-xl w-[220px] mr-5 "
                  />
                  <div className="">
                    <p className="text-gray-300">Network scanning</p>
                    <span className="text-[12px] font-[400] text-gray-400">
                      Kiểm tra, khám phá và thu thập thông tin về các thiết bị
                      và máy tính đang hoạt động trong một mạng máy tính.
                    </span>
                  </div>
                </div>
                <div className="flex my-10">
                  <img
                    src="https://th.bing.com/th/id/OIP.lo-G-QLTNyTRTeZk3HmC-gHaE8?pid=ImgDet&rs=1"
                    alt="#"
                    className="rounded-xl w-[220px] mr-5 "
                  />
                  <div className="">
                    <p className="text-gray-300">Password cracking</p>
                    <span className="text-[12px] font-[400] text-gray-400">
                      Tìm kiếm, giải mã hoặc đoán mật khẩu của người dùng mà
                      không có sự đồng ý của họ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Profile;
