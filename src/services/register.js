import fire from "../firebase";
import Swal from "sweetalert2";
const register = (details) =>{
    console.log(details);
    fire.database().ref('Participants').push(details)
    Swal.fire({
        icon: 'success',
        title: 'Registered Successfully'
    })
}

export default register;