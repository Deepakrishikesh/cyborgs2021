import { useState, useRef } from "react";
import register from "../services/register";
import Swal from "sweetalert2";
function Registration() {
  const talnCheckBoxRef = useRef(null);
  const codigoCheckBoxRef = useRef(null);
  const logoCheckBoxRef = useRef(null);
  const bgmiCheckBoxRef = useRef(null);
  const quibleCheckBoxRef = useRef(null);
  const domCheckBoxRef = useRef(null);
  const regButtonRef = useRef(null);
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
      !phone.replace(/\s/g, "").length ||
      eventCount < 3
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
        Swal.fire("No events more than 3");
        // alert("no events more than 3");
        e.target.checked = false;
      } else {
        setEvents([...temp, e.target.id]);
        setEventCount(eventCount + 1);
      }
    } else {
      setEvents(events.filter((i) => i !== e.target.id));
      setEventCount(eventCount > 0 ? eventCount - 1 : 0);
    }
    console.log(eventCount, events);
  };

  // check if email is valid
  const checkEmail = () => {
    let re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // check if mobile number is valid
  const checkPhone = () => {
    let re = /^\d{10}$/;
    return re.test(phone);
  };
  /* handle form submit */
  const submit = () => {
    if (checkForm()) {
      if (!checkEmail()) {
        Swal.fire("Enter valid Email ID");
        return;
      }
      if (!checkPhone()) {
        Swal.fire("Enter valid Phone Number");
        return;
      }
      regButtonRef.current.disabled = true;
      const details = {
        name: name,
        institute: institute,
        dept: dept,
        email: email,
        phone: phone,
        events: events,
      };
      register(details).then(() => {
        Swal.fire({
          icon: "success",
          title: "Registered Successfully",
        });
        resetValues();
      });
    } else {
      Swal.fire("Enter all the details");
    }
  };

  // reset all values
  const resetValues = () => {
    talnCheckBoxRef.current.checked = false;
    bgmiCheckBoxRef.current.checked = false;
    codigoCheckBoxRef.current.checked = false;
    quibleCheckBoxRef.current.checked = false;
    logoCheckBoxRef.current.checked = false;
    regButtonRef.current.disabled = false;
    setName("");
    setDept("");
    setInstitute("");
    setEmail("");
    setPhone("");
    setEventCount(0);
    setEvents([]);
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
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-row justify-center items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Talen-di-sadee"
                ref={talnCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                Talen-di-sadee
              </label>
            </div>
            <div className="flex flex-row justify-center items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Co-di-Go"
                ref={codigoCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                Co-di-Go
              </label>
            </div>
            <div className="flex flex-row justify-center items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Logo pursuit"
                ref={logoCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                Logo pursuit
              </label>
            </div>
            <div className="flex justify-center items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="BGMI"
                ref={bgmiCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                BGMI
              </label>
            </div>
            <div className="flex flex-row justify-center items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Quibble"
                ref={quibleCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                Quibble
              </label>
            </div>
            <div className="flex flex-row justify-center items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Domain Dude"
                ref={domCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                Domain Dude
              </label>
            </div>
          </div>

          <button
            className="p-2 rounded-md shadow-md bg-blue-300 m-2"
            onClick={submit}
            ref = {regButtonRef}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Registration;
