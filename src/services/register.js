import fire from "../firebase";
import { sendMail } from "./mailer";
// Usage of Async calls to avoid racing
const register = async (details) => {
  await fire.database().ref("Participants").push(details);
  sendMail(details);
};

export default register;
