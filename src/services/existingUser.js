import fire from "../firebase";

const existingUser = async(details) => {
  const result = await fire
    .database()
    .ref("Participants")
    .orderByChild("email")
    .equalTo(details.email)
    .limitToFirst(1)
    .get();
    if(result.val() === null)
        return false;
    return true;
};

export default existingUser;
