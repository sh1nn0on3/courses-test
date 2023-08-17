import axios from "axios";

try {
  //   const res = await axios.post("http://localhost:3000/api/sign-in", {
  //     email: "test1@abcd.abc",
  //     password: "123456789",
  //   },{

  //   });

  const res = await fetch("http://localhost:3000/api/sign-in", {
    method: "POST",
    body: {
        "email" : "test1@abc.abc",
        "password" : "123456789"
    },
  });

  // console.log("🚀 ~ file: auth.jsx:15 ~ loginUser ~ res:", res.data);
  console.log(typeof res);
  // if (res.data.errorCode !== 0) return;
  //   dispatch(loginSuccess(res.data));
  //   navigate("/");
} catch (error) {
  //   dispatch(loginFailed());
}
