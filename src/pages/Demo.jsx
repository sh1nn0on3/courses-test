import { useParams } from "react-router-dom";

const Demo = () => {
  const { name } = useParams();
  if (name === "demo") return ;
  console.log("🚀 ~ file: Demo.jsx:5 ~ Demo ~ name:", name);
  return (
    <div>
      <h2 className="text-4xl text-center mt-5">Course Detail for {name}</h2>
      {/* Hiển thị thông tin chi tiết của khóa học có tên tương ứng */}
    </div>
  );
};

export default Demo;
