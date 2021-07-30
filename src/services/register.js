import fire from "../firebase";

const register = (details) =>{
    console.log(details);
    fire.database().ref('Participants').push(details)
    alert('Registered successfully')
}

export default register;