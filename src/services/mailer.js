import axios from "axios";
export const sendMail = async (userData) => {
  await axios.post(
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/msraj085%40gmail.com_dev/default/sendMail",
    userData
  );
};
