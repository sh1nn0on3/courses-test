import React from "react";

const Dropdown = () => {
  return (
    <select className="bg-[#101826] text-[#f7f3e2] top-20 z-20  shadow-xl w-[150px] absolute rounded-xl transition-all opacity-80 ">
      <div className="px-5 py-3 flex flex-col font-[400]">
        <p
          className="my-3 cursor-pointer hover:text-gray-500"
          onClick={() => navigate("/profile")}
        >
          Trang cá nhân
        </p>
        <p
          className="my-3 cursor-pointer hover:text-gray-500"
          onClick={() => {
            localStorage.clear();
            navigate("/");
            location.reload();
          }}
        >
          Đăng xuất
        </p>
      </div>
    </select>
  );
};

export default Dropdown;
