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
      <div className=" w-[90%] max-w-[800px] xl:max-w-[1000px] flex flex-col gap-3 mt-[80px] items-center">
        <div className="border-t-4 border-l-2 border-[#00FFB2] w-full xl:max-w-[1200px] pl-12 pt-8 ">
          <div className="xl:max-w-[900px] max-w-[700px]  ">
            <h1 className="font text-2xl font-bold text-gradient">
              Hướng dẫn sử dụng
            </h1>
            <div className="mt-3 pl-6 ">
              <h1 className="text-white font mb-3 mt-6 text-xl font-[500]">
                Cách tạo phòng hoặc tìm phòng
              </h1>
              <p className="text-gray-300 text-[18px] font">
                Bạn có thể tạo phòng hoặc tìm phòng để tham gia vào phòng thi
                bằng cách sử dụng các chức năng bên dưới :
              </p>
              <p className="text-gray-300 text-[18px]  font">
                - Để tạo 1 phòng thi, bạn hãy chọn nút "Tạo phòng".
              </p>
              <p className="text-gray-300 text-[18px]  font">
                - Để tham gia 1 phòng thi bạn hãy chọn nút "Tìm phòng" sau đó
                bạn nhập ID phòng thi và ấn nút "Tham gia" để vào phòng.
              </p>
              <p className="text-gray-300 text-[18px]  font">
                Sau khi vào phòng thi bạn hãy "Sẵn sàng" và chờ người chủ phòng
                "Bắt đầu" cuộc thi. Khi đó bạn sẽ thấy được giao diện trang kết
                quả, ở đây bạn có thể thấy được IP máy chủ, thời gian cuộc thi,
                thứ hạng những người chơi khác.... Hãy cố gắng thu thập thật
                nhiều Flag để tăng điểm, thứ hạng của bản thân.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1000px] mt-12 mb-12 flex justify-center items-center gap-10">
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
