import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "../../contexts/course-context";

const Leftbar = () => {
  const navigate = useNavigate();
  const [, setCourseDetail] = useContext(CourseContext);

  return (
    <>
      <div className="md:flex flex-col w-[100px] items-center px-3 py-5 left-0 sticky hidden  ">
        <div className="add w-11 h-11 text-white bg-[#1473e6] flex justify-center items-center rounded-full hover:text-[20px] transition-all cursor-pointer ">
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="home mt-3">
          <button
            onClick={() => {
              navigate("/");
            }}
            
            className="active:bg-[#e8ebed] hover:bg-slate-100 rounded-2xl focus:bg-[#e8ebed] border-[2px] border-[#fff] "
          >
            <div className="home w-[72px] h-[72px] flex flex-col text-center justify-center   transition-all rounded-2xl">
              <i className="fa-solid fa-house text-[20px] "></i>
              <p className="text-[10px] mt-1 font-bold text-gray-500 ">Home</p>
            </div>
          </button>
          <button
            onClick={() => {
              navigate("/roadmap");
            }}
            className="active:bg-[#e8ebed] hover:bg-slate-100 rounded-2xl focus:bg-[#e8ebed] border-[2px] border-[#fff] "
          >
            <div className="home w-[72px] h-[72px] flex flex-col text-center justify-center   transition-all rounded-2xl">
              <i className="fa-solid fa-road text-[20px]"></i>
              <p className="text-[10px] mt-1 font-bold text-gray-500 ">
                Lộ trình
              </p>
            </div>
          </button>
          <button
             onClick={() => {
              setCourseDetail({
                id : ""
              });
              navigate("/courses")
            }}
            className="active:bg-[#e8ebed] hover:bg-slate-100 rounded-2xl focus:bg-[#e8ebed] border-[2px] border-[#fff] "
          >
            <div className="home w-[72px] h-[72px] flex flex-col text-center justify-center   transition-all rounded-2xl">
              <i className="fa-solid fa-lightbulb text-[23px]"></i>
              <p className="text-[10px] mt-1 font-bold text-gray-500 ">Học</p>
            </div>
          </button>
          <button
            onClick={() => {
              navigate("/blog");
            }}
            className="active:bg-[#e8ebed] hover:bg-slate-100 rounded-2xl focus:bg-[#e8ebed] border-[2px] border-[#fff] "
          >
            <div className="home w-[72px] h-[72px] flex flex-col text-center justify-center   transition-all rounded-2xl">
              <i className="fa-solid fa-newspaper text-[20px] "></i>
              <p className="text-[10px] mt-1 font-bold text-gray-500 ">Blog</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Leftbar;
