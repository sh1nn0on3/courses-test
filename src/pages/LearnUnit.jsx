import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { CourseContext } from "../contexts/course-context";
import axios from "axios";

const LearnUnit = () => {
  window.scrollTo(0, 0);
  let navigate = useNavigate();
  const { id } = useParams();
  const [dataId, setDataId] = useState([]);
  // const [courseDetail] = useContext(CourseContext);

  const user = useSelector((state) => state.auth?.login.currentUser?.infor);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const demo = dataId;

  useEffect(() => {
    const res = axios
      .get(`http://103.28.174.29:4180/api/get-lesson?id=${id}`)
      .then((res) => setDataId(res.data.lesson));
  }, [id]);

  const data = {
    errorCode: 0,
    message: "Success",
    lesson: {
      id: 1,
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
  // const word = data.lesson.description.features.split("+");

  return (
    <>
      {demo ? (
        <div className="min-h-[calc(100vh-10vh)] w-full bg-[#161e2d]">
          <div className="w-full px-20 py-5 flex justify-center ">
            <div className="max-w-[1200px] w-full flex flex-col gap-3 ">
              {/* <p className="text-gray-400 font-bold font-mono text-[14px]">
              LEARNING PATH
            </p> */}
              <div className="flex gap-5 items-center">
                <img
                  src="https://assets.tryhackme.com/img/paths/redteaming-square.png"
                  className="w-12 bg-cover rounded-sm "
                  alt="#"
                />
                <h2 className="text-gray-200 font-bold font-mono text-[45px]">
                  {demo.lessonName}
                </h2>
              </div>
              <div className="text-[12px] text-slate-400 font-bold px-2">
                <p className="my-2">
                  {demo.description}
                </p>

              </div>
              {/* <div className="flex items-center text-white gap-5">
                <i className="fa-solid fa-x font-bold text-[25px] text-lime-500 "></i>
                <h2 className="text-[20px] font-mono ">Rủi ro </h2>
              </div> */}
              {/* <p className="">
                {demo ? (
                  <div
                    className="text-[12px] text-slate-400 font-bold px-2 font-mono"
                    dangerouslySetInnerHTML={{ __html: demo.risk }}
                  />
                ) : (
                  "b"
                )}
              </p> */}
            </div>
          </div>
          <div className="w-full flex justify-center  ">
            <div className="max-w-[1200px] w-full flex gap-3 mt-5 ">
              <div className="w-full border px-4 py-3 bg-[#083448]">
                <div className="">
                  <div className="">
                    <span className="text-red-400">I. Rủi ro</span>
                    <div className="text-white">
                      {demo ? (
                        <div
                          className="text-white"
                          dangerouslySetInnerHTML={{ __html: demo.risk }}
                        />
                      ) : (
                        "b"
                      )}
                    </div>
                  </div>
                  <div className="">
                    <span className="text-red-400">II. Kỹ thuật tấn công</span>
                    <div className="text-white">
                      {demo ? (
                        <div
                          className="text-white"
                          dangerouslySetInnerHTML={{ __html: demo.attack }}
                        />
                      ) : (
                        "b"
                      )}
                    </div>
                  </div>
                  <div className="">
                    <span className="text-red-400">
                      III. kỹ thuật phòng thủ
                    </span>
                    <div className="text-white">
                      {demo ? (
                        <div
                          className="text-white"
                          dangerouslySetInnerHTML={{ __html: demo.detect }}
                        />
                      ) : (
                        "b"
                      )}
                    </div>
                  </div>
                  <div className="">
                    <span className="text-red-400">IV. Phòng chống</span>
                    <div className="text-white">
                      {demo ? (
                        <div
                          className="text-white"
                          dangerouslySetInnerHTML={{
                            __html: demo.recommendation,
                          }}
                        />
                      ) : (
                        "b"
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[400px] flex flex-col gap-5  ">
                <div className="w-full border px-5 py-3 bg-[#083448]">
                  <h2 className="text-[20px] font-[600] text-pink-400 ">
                    Mức độ hoàn thành
                  </h2>
                  <p className="text-gray-400 font-mono my-2 ">
                    Mức độ hoàn thành sẽ phụ thuộc vào việc hoàn thành bài tập
                    của bạn , sau khi làm xog bài bạn sẽ nhận được 1 số điểm
                    tương ứng.
                  </p>
                </div>
                <div className="w-full border px-5 py-3 bg-[#083448]">
                  <h2 className="text-[20px] font-[600] text-pink-400  ">Thành tựu</h2>
                  <p className="text-gray-400 font-mono my-2 ">Chưa có ...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-4xl text-center mt-5">Trang 404</div>
      )}
    </>
  );
};

export default LearnUnit;
