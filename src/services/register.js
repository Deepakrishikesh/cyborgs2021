import fire from "../firebase";

// Usage of Async calls to avoid racing
const register = async (details) => {
  console.log(details);
  await fire.database().ref("Participants").push(details);
};

export default register;
