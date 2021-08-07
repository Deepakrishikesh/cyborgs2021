import axios from "axios";
export const sendMail = async (userData) => {
  await axios
    .post(
      "https://csemailer-forgiving-quoll-rs.eu-gb.mybluemix.net/mailto",
      userData
    )
};
