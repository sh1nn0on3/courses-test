import { useContext } from "react";
// import Leftbar from "../components/taskbar/Leftbar";
import { CourseContext } from "../contexts/course-context";
import CourseList from "../components/course/CourseList";
// import CouresDetail from "./CouresDetail";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import ModulesList from "../components/course/ModulesList";

const Courses = () => {
  // const user = useSelector((state) => state.auth?.login.currentUser?.infor);
  window.scrollTo(0, 0);
  const [courseDetail] = useContext(CourseContext);
  console.log("🚀 ~ file: Courses.jsx:12 ~ Courses ~ courseDetail:", courseDetail)
  // let navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col min-h-[calc(100vh)] w-[100vw] bg-[#0F112F]  ">
        {/* <Leftbar />
        <div className="w-full px-10 flex flex-col py-5 items-center">
          <div className="w-[95%] flex flex-col items-center">
            <div className="">
              {courseDetail.id ? <CouresDetail /> : <CourseList />}
              <CourseList />
            </div>
          </div>
        </div> */}
        <div className="lifecycle-learn flex w-full justify-center items-center ">
          <div className="max-w-[1400px]  w-full px-20 py-5 flex justify-between gap-16 items-center ">
            <div className="max-w-[720px]">
              <h2 className="text-white text-[20px] font-bold font-mono" data-aos="fade-up-left">
                Learn
              </h2>
              <p className="text-white animate-bounce my-3 font-bold font-mono bg-slate-500 shadow-xl rounded-md px-2  ">
                Hacking thực hành
              </p>
              <p className="text-gray-300 text-[12px] font-mono md:max-w-[450px] xl:max-w-[680px]" data-aos="fade-down-right">
                Nội dung của chúng tôi được hướng dẫn với các bài tập tương tác
                dựa trên các kịch bản trong thế giới thực, từ máy hack đến điều
                tra các cuộc tấn công, chúng tôi đã bảo vệ bạn.
              </p>
            </div>
            <div className="" data-aos="fade-up-left">
              <img
                src="https://tryhackme.com/img/lifecycle/learn.svg"
                className="max-w-[400px] min-w-[150px]"
                alt="#"
              />
            </div>
          </div>
        </div>
        <div className="w-full sticky z-30  bg-[#191d55] flex flex-col justify-center items-center">
          <div className="max-w-[1400px]  w-full px-20 py-3 flex gap-20 items-center text-[#35C3F0] font-bold ">
            <h2 className="font-mono cursor-pointer hover:text-sky-300">
              Learn
            </h2>
            {/* <h2 className="font-mono cursor-pointer hover:text-sky-300">
              Practice
            </h2>
            <h2 className="font-mono cursor-pointer hover:text-sky-300">
              Search
            </h2> */}
          </div>
        </div>
        <div className="h-2 radius-learn w-full"></div>
        <div className="w-full bg-[#0F112F] flex justify-center items-center">
          <div className="max-w-[1400px]  w-full md:px-10 xl:px-20 py-3 flex gap-5 justify-center text-gray-300 font-bold ">
            <div className="w-32 flex flex-col gap-4  ">
              <h2 className="text-[#acacac] text-[16px] ">SECTIONS</h2>
              <button className="font-mono text-left text-[14px] text-[#aca9a9] hover:text-[#356af0] focus:text-[#35C3F0] active:text-[#35C3F0] cursor-pointer transition-all ">
                OS
              </button>
              <button className="font-mono text-left text-[14px] text-[#aca9a9] hover:text-[#356af0] focus:text-[#35C3F0] active:text-[#35C3F0] cursor-pointer transition-all ">
              Web/Application
              </button>
              <button className="font-mono text-left text-[14px] text-[#aca9a9] hover:text-[#356af0] focus:text-[#35C3F0] active:text-[#35C3F0] cursor-pointer transition-all ">
                NetWork
              </button>
            </div>
            <div className="w-full">
              <div className="">
                <CourseList/>
              </div>
              {/* <div className="my-10">
                <ModulesList/>
              </div>
              <div className="my-10">
                <ModulesList/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
