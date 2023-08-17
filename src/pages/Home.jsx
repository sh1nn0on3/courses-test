import Slider from "../components/animation/Slider";
import CourseList from "../components/course/CourseList";
import PostList from "../components/course/PostsList";
import ImageHome from "../components/snippetTags/ImageHome";
// import Leftbar from "../components/taskbar/Leftbar";

const Home = () => {
  // window.scrollTo(0, 0);
  return (
    <div className="min-h-[calc(100vh)] top-0  snap-y snap-mandatory overflow-scroll ">
      <div className="w-full bg-[#0F102E] h-[calc(100vh-7rem)] snap-center flex justify-center items-center ">
        <div className="max-w-[1450px] flex px-20 gap-20 justify-between  items-center ">
          <div className="flex flex-col gap-5 ">
            <h1
              className=" font-bold xl:text-[45px] text-[30px] text-slate-200"
              data-aos="fade-right"
            >
              Đào tạo an ninh mạng <br />
              <span className="text-sky-400">Thực hành trong thế giới kịch bản</span>
            </h1>
            <span
              className=" text-gray-400 xl:text-[25px] text-[20px] font-mono"
              data-aos="fade-left"
            >
              Tìm hiểu bằng cách học và thực hành theo một con đường có cấu trúc
              theo các cấp bậc kỹ năng
            </span>
          </div>
          <div
            className=" xl:min-w-[500px] min-w-[300px]  "
            data-aos="fade-down-right"
          >
            <img
              src="https://blueteamlabs.online/landpage/images/banner/BTLOLandingimage.png"
              // data-aos="fade-up-left"
              className="float-bob-y z-0  "
              alt="#"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#111231] h-[calc(100vh-5rem)] snap-center   flex justify-center items-center">
        <div className="max-w-[1400px] flex p-20 gap-24 justify-center items-center  ">
          <div
            className="xl:min-w-[400px] md:min-w-[300px]  "
            data-aos="fade-down-left"
          >
            <img
              src="https://blueteamlabs.online/images/mainpic.png"
              className="float-bob-y z-0"
              alt="#"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1
              className="text-slate-200 xl:text-[50px] text-[30px] font-bold font-mono "
              data-aos="fade-up-right"
            >
              Các bài học
            </h1>
            <span
              className="text-gray-400 font-mono xl:text-[25px] text-[20px] "
              data-aos="fade-up-left"
            >
              Nghiên cứu về các chức năng bảo mật thông tin có thể làm chúng ta
              cảm thấy thú vị và gây nghiện. Đối mặt với thử thách và duy trì sự
              an toàn của thông tin qua các bài học ngắn.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0F102E] h-[calc(100vh-10rem)] snap-center  flex justify-center items-center">
        <div className="max-w-[1400px] flex flex-col p-20 gap-16 pt-20 justify-center items-center  ">
          <h2
            className="font-mono font-bold xl:text-[45px] text-[30px] text-gray-400"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Học và thực hành
          </h2>
          <div className="grid grid-cols-4 gap-5">
            <ImageHome
              src="https://assets.tryhackme.com/img/paths/cyberdefense.svg"
              time="0"
            />
            <ImageHome
              src="https://assets.tryhackme.com/img/paths/redteaming.svg"
              time="200"
            />
            <ImageHome
              src="https://assets.tryhackme.com/img/illustrations/extension/oscp.png"
              time="400"
            />
            <ImageHome
              src="https://assets.tryhackme.com/img/paths/aws-cloud-security-pathway-image.png"
              time="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
