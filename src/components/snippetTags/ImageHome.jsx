const ImageHome = ({ src, time }) => {
  return (
    <div className="">
      <img
        className="h-[150px] w-[300px]  object-cover opacity-70 hover:opacity-90 transition cursor-pointer "
        data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-delay={time}
        src={src}
        alt=""
      />
    </div>
  );
};

export default ImageHome;
