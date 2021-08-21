import fire from "../firebase";

export const uploadId = async (file) => {
  let d = new Date();
  let dformat = d.getUTCSeconds()+'_'+d.getUTCMinutes()+'_'+d.getUTCHours()+'_'+d.getUTCDate()+'_'+d.getUTCMonth()+'_'+d.getUTCFullYear()+'_';
  const fileRef = fire.storage().ref("participants_proof").child(dformat+file.name);
  await fileRef.put(file);
  return await fileRef.getDownloadURL();
};
