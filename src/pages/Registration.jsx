import { useState } from "react";
import register from "../services/register";
function Registration() {
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [dept, setDept] = useState("");
  const [eventCount, setEventCount] = useState(0);
  const [events, setEvents] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  /* check if details are not empty */
  const checkForm = () => {
    if (
      !name ||
      !name.replace(/\s/g, "").length ||
      !institute ||
      !institute.replace(/\s/g, "").length ||
      !dept ||
      !dept.replace(/\s/g, "").length ||
      !email ||
      !email.replace(/\s/g, "").length ||
      !phone ||
      !phone.replace(/\s/g, "").length
    ) {
      return false;
    }

    return true;
  };

  // handle checkbox
  const onCheckBoxClick = (e) => {
    let temp = events;
    if (e.target.checked) {
      if (eventCount > 2) {
        alert("no events more than 3");
        e.target.checked = false;
      } else {
        setEvents([...temp, e.target.id]);
        setEventCount(eventCount + 1);
      }
    } else {
      setEvents(events.filter((i) => i !== e.target.id));
      setEventCount(eventCount - 1);
    }
    console.log(eventCount);
  };

  /* handle form submit */
  const submit = () => {
    console.log(events);
    if (checkForm()) {
      const details = {
        name: name,
        institute: institute,
        dept: dept,
        email: email,
        phone: phone,
      };
      register(details);
      setName("");
      setDept("");
      setInstitute("");
      setEmail("");
      setPhone("");
    } else {
      alert("Enter all the details");
    }
  };

  return (
    <>
      <div className="p-3 bg-gray-300">
        <div className="flex flex-col justify-center items-stretch register-wrap lg:ml-48 lg:mr-48">
          <h1 className="m-1">Register</h1>
          <input
            type="text"
            className="m-2 p-2 rounded-md"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
          />
          <input
            type="text"
            className="m-2 p-2 rounded-md"
            onChange={(e) => setInstitute(e.target.value)}
            value={institute}
            placeholder="Institution"
          />
          <input
            type="text"
            className="m-2 p-2 rounded-md"
            onChange={(e) => setDept(e.target.value)}
            value={dept}
            placeholder="Department and Year"
          />
          <input
            type="text"
            className="m-2 p-2 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <input
            type="text"
            className="m-2 p-2 rounded-md"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder="Phone"
          />
          <div className="flex justify-center flex-wrap">
            <div className="flex flex-row justify-center items-center m-2">
              <input type="checkbox" onChange={onCheckBoxClick} id="event1" />
              <label htmlFor="event" className="ml-1">
                Some thing
              </label>
            </div>
            <div className="flex flex-row justify-center items-center m-2">
              <input type="checkbox" onChange={onCheckBoxClick} id="event2" />
              <label htmlFor="event" className="ml-1">
                Some thing
              </label>
            </div>
            <div className="flex flex-row justify-center items-center m-2">
              <input type="checkbox" onChange={onCheckBoxClick} id="event3" />
              <label htmlFor="event" className="ml-1">
                Some thing
              </label>
            </div>
            <div className="flex justify-center items-center m-2">
              <input type="checkbox" onChange={onCheckBoxClick} id="event4" />
              <label htmlFor="event" className="ml-1">
                Some thing
              </label>
            </div>
            <div className="flex flex-row justify-center items-center m-2">
              <input type="checkbox" onChange={onCheckBoxClick} id="event5" />
              <label htmlFor="event" className="ml-1">
                Some thing
              </label>
            </div>
            <div className="flex flex-row justify-center items-center m-2">
              <input type="checkbox" onChange={onCheckBoxClick} id="event6" />
              <label htmlFor="event" className="ml-1">
                Some thing
              </label>
            </div>
          </div>

          <button
            className="p-2 rounded-md shadow-md bg-blue-300 m-2"
            onClick={submit}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Registration;
