import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

const Validate = ({ name, email, phone, password  }) => {
  const [msg, setMsg] = useState({})
  if (isEmpty(name)) {
    msg.name = "Vui lòng nhập Tên";
  }
  if (isEmpty(email)) {
    msg.email = "Vui lòng nhập Email";
  } else if (!isEmail(email)) {
    msg.email = "Email nhập sai rồi ";
  }
  if (isEmpty(phone)) {
    msg.phone = "Vui lòng nhập Phone";
  }
  if (isEmpty(password)) {
    msg.password = "Vui lòng nhập Password";
  }
  setMsg(msg);
  if (Object.keys(msg).length > 0) return false;
  return msg;
};

export default Validate;
