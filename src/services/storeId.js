import fire from "../firebase";

export const uploadId = async (file) => {
  const fileRef = fire.storage().ref("participants_proof").child(file.name);
  await fileRef.put(file);
  return await fileRef.getDownloadURL();
};
