import {useState} from 'react';
import register from '../services/register';
function Registration() {

  const [name,setName] = useState('')
  const [institute,setInstitute] = useState('')
  const [dept,setDept] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')

  /* check if details are not empty */
  const checkForm = () =>{
    if(!name || !name.replace(/\s/g, '').length || 
      !institute || !institute.replace(/\s/g, '').length ||
      !dept || !dept.replace(/\s/g, '').length ||
      !email || !email.replace(/\s/g, '').length ||
      !phone || !phone.replace(/\s/g, '').length ){
        
        return false
    }
   
    return true
  }
  
  /* handle form submit */
  const submit = () =>{
    if(checkForm()){
      const details = {
        name: name,
        institute: institute,
        dept: dept,
        email: email,
        phone: phone
      }
      register(details)
      setName('')
      setDept('')
      setInstitute('')
      setEmail('')
      setPhone('')
    }
    else{
      alert("Enter all the details")
    }
  }

  return (
    <>
      <div className="p-3 bg-gray-300">
        <h1 className="m-1">Register</h1>
        <div className="flex flex-col justify-center items-stretch">
          <input type="text" className="m-2 p-2 rounded-sm" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
          <input type="text" className="m-2 p-2 rounded-sm" onChange={(e) => setInstitute(e.target.value)} value={institute} placeholder="Institution" />
          <input type="text" className="m-2 p-2 rounded-sm" onChange={(e) => setDept(e.target.value)} value={dept} placeholder="Department and Year" />
          <input type="text" className="m-2 p-2 rounded-sm" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
          <input type="text" className="m-2 p-2 rounded-sm" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Phone" />
          <button 
            className="p-2 rounded-md shadow-md bg-blue-300 m-2" onClick={submit}>Register</button>
        </div>
      </div>
    </>
  );
}

export default Registration;
