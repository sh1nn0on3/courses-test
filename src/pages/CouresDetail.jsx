import { useContext, useEffect, useState } from "react";
import { CourseContext } from "../contexts/course-context";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { GetCourse } from "../api/profile";


const CouresDetail = () => {
  window.scrollTo(0, 0);
  let navigate = useNavigate();
  const { nameId } = useParams();
  const [dataId, setDataId] = useState([]);


  console.log("🚀 ~ file: CouresDetail.jsx:16 ~ CouresDetail ~ apiKey:", apiKey)
  // const [courseDetail] = useContext(CourseContext);

  GetCourse();

  useEffect(() => {
    const res = axios
      .get(`http://103.28.174.29:4180/api/get-lesson?id=${nameId}`)
      .then((res) => setDataId(res.data.lesson));
      console.log("🚀 ~ file: CouresDetail.jsx:25 ~ useEffect ~ apiKey:", apiKey)
  }, [nameId]);

  const demo = dataId;
  console.log("🚀 ~ file: CouresDetail.jsx:24 ~ CouresDetail ~ demo:", demo);

  const data = {
    errorCode: 0,
    message: "Success",
    lesson: {
      // id: 1,
      lessonName: "NFS",
      course_id: 1,
      description: {
        definition:
          "NFS: Network File Sharing - Một giao thức mạng cho phép lưu trữ và quản lý các tệp trên các hệ thống từ xa như thể chúng được lưu trữ trên hệ thống cục bộ.",
        purposes: "Cần nơi lưu trữ quản lý tệp một cách tập trung & hiệu quả",
        features:
          "Cho phép cấu hình để chỉ định thư mục nào được chia sẻ và quyền truy cập của người dùng với thư mục đó,Quyền truy cập bao gồm:+ rw: chỉ được phép đọc và ghi+ ro: chỉ được phép đọc+ no_root_squash: cho phép client có thể thực thi file như là trên máy chủ+ root_squash: quyền dùng root sẽ bị giới hạn trên client+ sync: đồng bộ hoá dữ liệu+ async: bất đồng bộ hoá dữ liệu, nhanh hơn sync nhưng dễ mất mát",
      },
      detail: {
        risk: "Theo mặc định, NFS sẽ thay đổi người dùng root thành nfsnobody và loại bỏ bất kỳ tệp nào hoạt động với quyền root. Nếu tùy chọn “no_root_squash” xuất hiện trên một chia sẻ có thể ghi, dẫn đến việc có thể tạo một tệp thực thi với bộ bit SUID và chạy nó trên hệ thống đích,Nếu file đó là một file thực thi gọi root shell <được tạp bởi root>. Khi thực thi trên server cũng sẽ sinh ra 1 root shell",
        blue: "test blue",
        red: "test red",
        recommendations:
          "Không nên cho phép tạo file thực thi trong thư mục chia sẻ,Phân quyền rõ ràng trước khi share thư mục",
      },
      createdAt: "2023-06-19T15:34:49.000Z",
      updatedAt: "2023-06-19T15:34:49.000Z",
    },
  };

  const word = data?.lesson.description.features.split("+");

  return demo ? (
    <>
      <div className="min-h-[calc(100vh)] flex-col justify-center w-full bg-[#191d55] ">
        <div className="h-3 radius-learn-path-top "></div>
        <div className="w-full px-20 py-5 flex justify-center bg-[#046969]">
          <div className="max-w-[1200px] w-full flex flex-col gap-3 ">
            <p className="text-gray-400 font-bold font-mono text-[14px]">
              LEARNING PATH
            </p>
            <h2 className="text-gray-200 font-bold font-mono text-[25px]">
              {demo ? demo?.lessonName : "test"}
            </h2>
            <span className="text-[#ffffff] text-[12px] font-mono my-2">
              title ....
            </span>
            <button
              onClick={() => {
                navigate(`/courses/${nameId}/unit/${demo.id}`);
              }}
              className=" bg-[#498181]  w-[200px] py-2  text-pink-500 font-mono shadow-xl hover:bg-slate-800 transition-all "
            >
              Bắt đầu bài học
            </button>
          </div>
        </div>
        <div className="h-3 radius-learn-path-buttom "></div>
        <div className="w-full px-20 py-10 flex justify-center bg-[#191d55]">
          <div className="max-w-[1200px] w-full flex justify-center gap-5 ">
            <div className="max-w-[400px] min-w-[200px]">
              <div className="border-2 border-green-700 ">
                <img
                  src="https://assets.tryhackme.com/img/paths/redteaming.svg"
                  className="w-full"
                  alt="#"
                />
                <div className="px-5 py-3 text-sky-400 ">
                  <h2 className="text-center text-pink-500 font-mono mt-2">
                    {/* {data?.lesson.description.definition.split("-")[0]} */}
                    {/* {demo.lessonName} */}
                    {demo ? demo?.lessonName : "test"}
                  </h2>
                  <div className="mt-3">
                    {word.map((word, index) => (
                      <div key={index} className="mt-2 flex ml-2 ">
                        <i className="fa-solid fa-minus text-yellow-600 mt-[2px]"></i>
                        <p className="ml-3 text-sky-500 font-mono text-[12px]">
                          {word}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-sky-500 ">
              <div className="w-full h-auto border-2 border-gray-500 px-5 py-3">
                <h2 className="text-violet-300 font-bold font-mono text-[20px]">
                  Giới thiệu
                </h2>
                <div className="h-1 w-16 bg-green-400 my-2 rounded-3xl"></div>
                <p className="text-[14px] font-mono my-3">{data?.intro1}</p>
                <p className="text-[14px] font-mono">{data?.intro2}</p>
                <div className="my-5 ">
                  <p className="text-gray-500 text-[10px] ">SECTION 1</p>
                  <span className="text-lime-500 font-bold font-mono">
                    Red Team Fundamentals
                  </span>
                  <p className="text-gray-400 my-3 font-mono text-[12px]">
                    {data?.lesson.detail.risk}
                  </p>
                  <p className="flex py-1 mt-4 text-[12px] border-t border-gray-600 items-center gap-4 font-mono">
                    <img
                      src="https://tryhackme-images.s3.amazonaws.com/room-icons/14e8664f9484e23a142aa36baf4297be.png"
                      className="w-10"
                      alt=""
                    />
                    {data?.lesson.detail.blue}
                  </p>
                  <p className="flex py-1 text-[12px] border-t border-gray-600 items-center gap-4 font-mono">
                    <img
                      src="https://tryhackme-images.s3.amazonaws.com/room-icons/14e8664f9484e23a142aa36baf4297be.png"
                      className="w-10"
                      alt=""
                    />
                    {data?.lesson.detail.red}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="font-3xl text-center mt-5">Trang 404</div>
  );
};

export default CouresDetail;
