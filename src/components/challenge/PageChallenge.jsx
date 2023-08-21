import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PageChallenge = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.login.currentUser?.infor);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messageListRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }

    const message = {
      position: "right",
      type: "text",
      text: newMessage,
      date: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, message]);
    setNewMessage("");

    if (messageListRef.current) {
      messageListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    // Tự động cuộn đến tin mới nhất
    if (messageListRef.current) {
      messageListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    setNewMessage("");
  }, [messages]);

  return (
    <div className="w-full bg-[#0F102E] min-h-[calc(100vh-6rem)] snap-center flex justify-center  ">
      <div className="max-w-[1200px] w-full flex gap-5 mt-16 ">
        <div className="w-[300px]">
          <div className="">
            <h1 className="text-center py-2 text-2xl rounded-t-md  text-gray-200 bg-gray-600 ">
              ID : xx.xx.xx
            </h1>
            <div className="flex flex-col gap-3 pt-2 w-full rounded-b-md px-5 py-3 bg-gray-500 ">
              <div className="flex justify-center items-center gap-3">
                <div className="avt w-8 h-8 rounded-full bg-slate-50 flex justify-center items-center ">
                  A
                </div>
                <div className="w-[180px] pl-2">
                  <p>Nguyễn văn A</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="avt w-8 h-8 rounded-full bg-slate-50 flex justify-center items-center ">
                  A
                </div>
                <div className="w-[180px] pl-2">
                  <p>Nguyễn văn A</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="avt w-8 h-8 rounded-full bg-slate-50 flex justify-center items-center ">
                  A
                </div>
                <div className="w-[180px] pl-2">
                  <p>Nguyễn văn A</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[600px] w-full">
          <h1 className="text-center py-2 text-2xl rounded-t-md  text-gray-200 bg-gray-600 ">
            Phòng chat
          </h1>
          <div className="border-none max-h-[700px] h-[80%]  xl:h-[85%]  flex flex-col justify-end p-2 bg-gray-500  shadow-2xl rounded-b-md shadow-emerald-600 ">
            <div
              className="message-list-container overflow-y-auto relative"
              style={{
                maxHeight: "700px",
              }}
            >
              <MessageList
                ref={messageListRef}
                className="message-list"
                lockable={true}
                toBottomHeight={"100%"}
                dataSource={messages.map((message) => ({
                  ...message,
                  avatar:
                    "https://img.thuthuattinhoc.vn/uploads/2020/05/30/hhinh-anh-luffy-chibi-thu-the-rat-ngau_055520104.jpg", // Thay URL_OF_AVATAR_IMAGE bằng đường dẫn đến hình ảnh đại diện
                }))}
              />
            </div>
            <div className="custom-input flex justify-center items-center max-w-[600px] w-full bg-white px-5 py-2 rounded-3xl">
              <input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ marginRight: "8px" }}
                className="outline-none w-full"
              />
              <Button
                type="primary"
                className="text-black border border-gray-200 shadow-lg   "
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[300px]">
          <div className="flex flex-col gap-5">
            <div className="">
              <h1 className="text-center py-2 text-2xl rounded-t-md  text-gray-200 bg-gray-600 opacity-70">
                Thông tin
              </h1>
              <div className=" gap-3 pt-2 w-full rounded-b-md px-5 py-3 bg-gray-500 opacity-70 h-[120px] flex">
                <table>
                  <tbody className="text-gray-900">
                    <tr>
                      <td className="w-[80px] ">Name :</td>
                      <td> Nguyễn Văn A</td>
                    </tr>
                    <tr>
                      <td className="w-[80px]">Score:</td>
                      <td>100 Point</td>
                    </tr>
                    <tr>
                      <td className="w-[100px]">Thành tựu :</td>
                      <td>Sắp có</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            className="mt-5 w-full h-14 bg-gray-500 opacity-80 rounded-md hover:opacity-100 transition-all flex justify-center items-center"
            onClick={() => {
              navigate("/chartschallenge");
            }}
          >
            <h1 className="text-gray-300 text-center text-2xl">Sẵn Sàng</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageChallenge;
