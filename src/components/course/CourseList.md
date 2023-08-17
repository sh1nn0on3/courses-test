        <div className="list-course w-full md:grid md:grid-cols-3 xl:grid-cols-4 flex overflow-x-scroll scroll-smooth scroll  gap-5 mt-5">
          {data.map((item, index) => (
            <div key={index} className="course max-w-[350px] min-w-[200px] ">
              <div className="course-img ">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-2xl cursor-pointer"
                  onClick={() => {
                    setCourseDetail({
                      id: item.id,
                    });
                    navigate("/courses/path");
                  }}
                />
              </div>
              <div className="product-info mt-4 ml-2">
                <a
                  href="#"
                  className="font-[500] text-[16px] text-[#aca9a9] outline-none decoration-slate-50 "
                  onClick={() => {
                    setCourseDetail({
                      id: item.id,
                    });
                    navigate("/courses/path")
                  }}
                >
                  {item.name}
                </a>
                <div className="users mt-2 text-gray-500 text-[13px] ">
                  <i className="fa-solid fa-users mr-2"></i>
                  <span className="">{item.members}</span>
                </div>
              </div>
            </div>
          ))}
        </div>