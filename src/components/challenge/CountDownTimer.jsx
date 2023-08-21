import { useState, useEffect } from "react";

function CountDownTimer() {
  const initialTime = 30 * 60; // Thời gian ban đầu là 30 phút (đơn vị: giây)
  const [timeRemaining, setTimeRemaining] = useState(
    parseInt(localStorage.getItem("countdownTime")) || initialTime
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(interval);
        // Xử lý khi thời gian đếm ngược kết thúc
      }
    }, 1000); // Mỗi giây

    return () => {
      clearInterval(interval); // Clear interval khi component unmount
    };
  }, [timeRemaining]);

  useEffect(() => {
    localStorage.setItem("countdownTime", timeRemaining.toString());
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <h1>
        Thời gian: {minutes} phút {seconds} giây
      </h1>
    </div>
  );
}

export default CountDownTimer;
