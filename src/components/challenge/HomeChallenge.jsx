import { useState } from "react";
import { Modal, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

export const HomeChallenge = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [roomCode, setRoomCode] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // Do something with the room code, e.g., create a room with the given code
    console.log("Room code:", roomCode);

    if (roomCode) {
      navigate("/pageChallenge");
      setVisible(false);
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="w-full bg-[#0F102E] min-h-[calc(100vh-6rem)] snap-center flex justify-center ">
      <div className="max-w-[1200px] w-full flex flex-col gap-3 mt-[100px] items-center">
        <div className="border w-full max-w-[1000px] px-5 py-3 ">
          <h1 className="text-[20px] text-white textEdit">
            Hướng dẫn sử dụng cho ứng dụng XYZ
          </h1>
          <div className="mt-3">
            <h1 className="text-gray-300">I. Giới thiệu</h1>
            <p className="text-gray-400 text-[14px] pl-2">
              Ứng dụng XYZ là một ứng dụng tiện ích được thiết kế để giúp bạn
              thực hiện công việc một cách hiệu quả và tiết kiệm thời gian. Ứng
              dụng cung cấp nhiều tính năng hữu ích, như ABC, DEF và GHI, giúp
              bạn đáp ứng các yêu cầu công việc hàng ngày một cách dễ dàng.
            </p>
          </div>
          <div className="mt-3">
            <h1 className="text-gray-300">II. Cài đặt ứng dụng XYZ</h1>
            <ul className="text-gray-400 text-[14px] px-2">
              <li>
                - Truy cập cửa hàng ứng dụng trên điện thoại di động của bạn.
              </li>
              <li>
                - Tìm kiếm XYZ và nhấn vào nút Tải về hoặc Cài đặt để tải và cài
                đặt ứng dụng.
              </li>
              <li>
                - Sau khi hoàn tất quá trình cài đặt, nhấn vào biểu tượng XYZ để
                mở ứng dụng
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <h1 className="text-gray-300">III. Lời kết</h1>
            <ul className="text-gray-400 text-[14px] px-2">
              <li>- Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi !!!</li>
              <li>- Chúc bạn may mắn</li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-[1000px] mt-5 flex justify-center items-center gap-10">
          {/* <button className="w-[250px] border h-[80px] textEdit text-gray-400 text-[24px] flex justify-center items-center transition-all hover:text-white hover:bg-red-400 ">
              Tạo Phòng
            </button>
            <button className="w-[250px] border h-[80px] textEdit text-gray-400 text-[24px] flex justify-center items-center transition-all hover:text-white hover:bg-red-400 ">
              Vào Phòng
            </button> */}

          <Button
            // type="primary"
            className="w-[250px] border h-[80px] textEdit text-gray-400 text-[24px] flex justify-center items-center transition-all hover:text-white hover:bg-red-400 "
            onClick={showModal}
          >
            Tạo phòng
          </Button>
          <Button
            onClick={() => {
              navigate("/pageChallenge");
            }}
            className="w-[250px] border h-[80px] textEdit text-gray-400 text-[24px] flex justify-center items-center transition-all hover:text-white hover:bg-red-400 "
          >
            Vào Phòng
          </Button>

          <Modal
            title="Tìm phòng mới"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Nhập mã phòng:</p>
            <Input
              placeholder="Nhập mã phòng"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};
