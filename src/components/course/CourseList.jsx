import { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../contexts/course-context";
import { Link, useNavigate } from "react-router-dom";
import { GetCourse } from "../../api/profile";

const CourseList = () => {
  const navigate = useNavigate();
  const [, setCourseDetail] = useContext(CourseContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    GetCourse().then((res) => setData(res.allLesson));
  }, []);
  // const data = [
  //   {
  //     id: "1",
  //     image:
  //       "https://i0.wp.com/chiswickcalendar.co.uk/wp-content/uploads/2019/08/Man-in-the-middle-1-e1566060588315.jpg?w=1496&h=998&ssl=1",
  //     name: "Man in the middle",
  //     color_1: "bg-sky-500",
  //     color_2: "bg-sky-300",
  //     color_text: "text-sky-700",
  //     members: "123.456",
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://s.cystack.net/resource/home/content/05142928/e-mail-scam.jpg",
  //     name: "Phishing",
  //     color_1: "bg-slate-500",
  //     color_2: "bg-slate-300",
  //     color_text: "text-slate-700",
  //     members: "123.456",
  //   },
  //   {
  //     id: "1",
  //     image: "https://www.breachlock.com/wp-content/uploads/2019/09/V_C_3.jpg",
  //     name: "Network scanning",
  //     color_1: "bg-pink-500",
  //     color_2: "bg-pink-300",
  //     color_text: "text-pink-700",
  //     members: "123.456",
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUZTh9UFcxJlE-HT1gOmnUhG02AziGsO0tg",
  //     name: "Spoofing attack",
  //     color_1: "bg-red-500",
  //     color_2: "bg-red-300",
  //     color_text: "text-red-700",
  //     members: "123.456",
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUZTh9UFcxJlE-HT1gOmnUhG02AziGsO0tg",
  //     name: "File upload",
  //     color_1: "bg-green-500",
  //     color_2: "bg-green-300",
  //     color_text: "text-green-700",
  //     members: "123.456",
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUZTh9UFcxJlE-HT1gOmnUhG02AziGsO0tg",
  //     name: "SQL union-based",
  //     color_1: "bg-yellow-500",
  //     color_2: "bg-yellow-300",
  //     color_text: "text-yellow-700",
  //     members: "123.456",
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUZTh9UFcxJlE-HT1gOmnUhG02AziGsO0tg",
  //     name: "Broken accesscontroll",
  //     color_1: "bg-violet-500",
  //     color_2: "bg-violet-300",
  //     color_text: "text-violet-700",
  //     members: "123.456",
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUZTh9UFcxJlE-HT1gOmnUhG02AziGsO0tg",
  //     name: "Password cracking",
  //     color_1: "bg-cyan-500",
  //     color_2: "bg-cyan-300",
  //     color_text: "text-cyan-700",
  //     members: "123.456",
  //   },
  //   // {
  //   //   id: "1",
  //   //   image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
  //   //   name: "DDos",
  //   //   members: "123.456",
  //   // },
  // ];

  return (
    <>
      <div className="w-full max-w-[1600px]  ">
        <div className="header">
          <h3 className="font-[800] text-[1.2rem] ">Khóa học miễn phí</h3>
        </div>
        <div className="list-course w-full md:grid md:grid-cols-3 xl:grid-cols-4 flex overflow-x-scroll scroll-smooth scroll  gap-8 mt-5">
          {data.map((item, index) => (
            <div key={index} className="course max-w-[350px] min-w-[200px]  ">
              <div className="h-44 w-full  ">
                <div
                  className={`relative w-full bg-sky-500 h-40 top-3 cursor-pointer `}
                  onClick={() => {
                    setCourseDetail({
                      id: item.id,
                    });
                    navigate(`/courses/${item.id}`);
                    // <Link to={`/courses/${item.id}`} />;
                  }}
                >
                  <div
                    className={`absolute bg-sky-300 w-full h-40 -top-2 -right-2 px-2 py-2 hover:top-0 hover:right-0 transition-all `}
                  >
                    <div className="flex justify-between px-2 items-center">
                      <p className={`text-sky-600`}>{item.lessonName}</p>
                      <img
                        src={item?.image}
                        alt="#"
                        className="w-16 rounded-sm "
                      />
                    </div>
                    <div className="flex justify-end mt-[70px] ">
                      <p
                        className={`px-5 py-1 text-gray-50 text-[14px] bg-sky-500`}
                      >
                        0/100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseList;
