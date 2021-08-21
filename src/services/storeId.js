import fire from "../firebase";

export const uploadId = async (file) => {
  let d = new Date();
  let dformat = d.getUTCSeconds()+'_'+d.getUTCMinutes()+'_'+d.getUTCHours()+'_'+d.getUTCMonth()+'_'+d.getUTCHours()+'_';
  const fileRef = fire.storage().ref("participants_proof").child(dformat+file.name);
  await fileRef.put(file);
  return await fileRef.getDownloadURL();
};
