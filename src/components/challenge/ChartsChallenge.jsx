import { useNavigate } from "react-router-dom";
import RankChallenge from "./RankChallenge";
import { Form, Input, Button } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CountDownTimer from "./CountDownTimer";

const ChartsChallenge = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.login.currentUser?.infor);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);
  const onFinish = (values) => {
    console.log("Form values:", values);
  };
  return (
    <div className="w-full  min-h-[calc(100vh-6rem)] snap-center flex justify-center ">
      <video autoPlay loop muted className="video-background">
        <source
          src="https://ddr-consent-taxi-celtic.trycloudflare.com/src/assets/videoBg.mp4"
          type="video/mp4"
        />
      </video>
      <div className="max-w-[1200px] w-full flex gap-5 mt-[60px] ">
        <div className=" max-w-[700px] w-full ">
          <div className="border bg-gray">
            <h1 className="text-gray-200 text-center py-3 text-2xl bg-gray-700">
              Bảng Xếp Hạng
            </h1>
            <div className="flex justify-end items-end">
              <RankChallenge />
            </div>
          </div>
        </div>

        <div className="ml-4 flex flex-col gap-5">
          <div className="w-[400px] bg-white px-5 py-2">
            <CountDownTimer />
          </div>
          <div className="w-[400px] bg-white px-5 py-2 pb-5 ">
            <table className="w-full ">
              <thead className="">
                <tr>
                  <th colSpan="3" className="text-2xl py-2">
                    Thông tin cá nhân
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[36px]">
                  <td className="w-[170px] text-[18px] px-2 ">
                    Tên người dùng{" "}
                  </td>
                  <td className="w-[10px]">:</td>
                  <td className="text-[18px] text-center">Nguyễn Văn A</td>
                </tr>
                <tr className="h-[36px] bg-gray-200">
                  <td className="w-[170px] text-[18px] px-2 ">
                    Mã người dùng{" "}
                  </td>
                  <td className="w-[10px]">:</td>
                  <td className="text-[18px] text-center">0001</td>
                </tr>
                <tr className="h-[36px]">
                  <td className="w-[170px] text-[18px] px-2 ">Điểm </td>
                  <td className="w-[10px]">:</td>
                  <td className="text-[18px] text-center">100</td>
                </tr>
                <tr className="h-[36px] bg-gray-200">
                  <td className="w-[170px] text-[18px] px-2 ">Hạng</td>
                  <td className="w-[10px]">:</td>
                  <td className="text-[18px] text-center">1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-[400px] bg-white px-5 py-2 pb-5">
            <h1 className="text-center w-full py-2 text-[20px] font-bold">
              Submit Flag
            </h1>
            <Form onFinish={onFinish}>
              <Form.Item label="Flag" name="flag">
                <Input />
              </Form.Item>
              <Form.Item className="flex justify-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="border border-gray-100 text-black"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsChallenge;
