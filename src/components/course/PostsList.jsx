const PostList = () => {
  const data = [
    {
      image: "https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png",
      name: "Kiến Thức Nhập Môn IT",
      members: "123.456",
    },
    {
      image: "https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg",
      name: "Kiến Thức Nhập Môn IT",
      members: "123.456",
    },
    {
      image: "https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png",
      name: "Kiến Thức Nhập Môn IT",
      members: "123.456",
    },
  ];

  return (
    <>
      <div className="w-full max-w-[1600px]  ">
        <div className="header">
          <h3 className="font-[800] text-[1.2rem] ">Bài Viết Nổi Bật</h3>
        </div>
        <div className="list-course w-full md:grid md:grid-cols-3 xl:grid-cols-4 flex overflow-x-scroll scroll-smooth scroll  gap-5 mt-5">
          {data.map((item, index) => (
            <div key={index} className="course max-w-[350px] min-w-[200px] ">
              <div className="course-img ">
                <img src={item.image} alt="" className="rounded-2xl  " />
              </div>
              <div className="product-info mt-4 ml-2">
                <a
                  href="#"
                  className="font-[500] text-[16px] text-[#323030] outline-none decoration-slate-50 "
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
      </div>
    </>
  );
};

export default PostList;
