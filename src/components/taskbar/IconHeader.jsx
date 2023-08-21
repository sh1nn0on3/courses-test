import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "../../contexts/course-context";
import CourseApi from "../../api/profile";
import { useSelector } from "react-redux";
import home from "../../assets/img/homee.png";


const IconHeader = () => {
  const navigate = useNavigate();
  const [, setCourseDetail] = useContext(CourseContext);
  const userToken = useSelector(
    (state) => state.auth?.login?.currentUser?.token
  );

  const handleLearn = () => {
    setCourseDetail({
      id: "",
    });
    CourseApi(userToken);
    navigate("/courses");
  };

  return (
    <div className="flex gap-8 text-[24px]  ">
      <div
        className="cursor-pointer hover:text-gray-300 transition-all"
        onClick={() => {
          navigate("/");
        }}
      >
        {/* <i className="fa-solid fa-house text-pink-400"></i> */}
        <img src={home} className="w-[28px] mb-2" alt="#" />
        <p className="text-[10px] mt-1 font-bold text-gray-300 text-center ">Home</p>
      </div>
      <div
        className="cursor-pointer hover:text-gray-300 transition-all"
        onClick={handleLearn}
      >
        <i className="fa-solid fa-book-open text-sky-400"></i>
        <p className="text-[10px] mt-1 font-bold text-gray-300 ">Learn</p>
      </div>
      <div
        className="cursor-pointer hover:text-gray-300 transition-all"
        onClick={() => {
          navigate("/");
          navigate("/homechallenge");
        }}
      >
        <i className="fa-solid fa-khanda w-full text-center text-[28px] text-gradient "></i>
        <p className="text-[10px] mt-1 font-bold text-gray-300 ">Cyber Range</p>
      </div>
      <div
        className="cursor-pointer hover:text-gray-300 transition-all"
        onClick={() => {
          navigate("/");
          // navigate("/roadmap");
        }}
      >
        <i className="fa-solid fa-trophy text-yellow-400"></i>
        <p className="text-[10px] mt-1 font-bold text-gray-300 ">Rank</p>
      </div>
      <div
        className="cursor-pointer hover:text-gray-300 transition-all"
        onClick={() => {
          navigate("/");
          // navigate("/blog");
        }}
      >
        <i className="fa-solid fa-newspaper text-gray-200"></i>
        <p className="text-[10px] mt-1 font-bold text-gray-300 ">Blog</p>
      </div>
    </div>
  );
};

export default IconHeader;
