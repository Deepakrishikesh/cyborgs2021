import { useState, useRef } from "react";
import register from "../services/register";
import Swal from "sweetalert2";
import { IoMdCloudUpload, IoMdTrash } from "react-icons/io";
import existingUser from "../services/existingUser";
import { uploadId } from "../services/storeId";
function Registration() {
  const talnCheckBoxRef = useRef(null);
  const codigoCheckBoxRef = useRef(null);
  const logoCheckBoxRef = useRef(null);
  const bgmiCheckBoxRef = useRef(null);
  const quibleCheckBoxRef = useRef(null);
  const domCheckBoxRef = useRef(null);
  const regButtonRef = useRef(null);
  const fileRef = useRef(null);
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [dept, setDept] = useState("");
  const [eventCount, setEventCount] = useState(0);
  const [events, setEvents] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [clgId, setClgId] = useState("");
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
      !year ||
      !year.replace(/\s/g, "").length ||
      !clgId ||
      !clgId.replace(/\s/g, "").length ||
      eventCount < 3
    ) {
      return false;
    }

    return true;
  };

  // handle upload
  const uploadMirror = () => {
    let event = document.createEvent('MouseEvent');
    event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    fileRef.current.dispatchEvent(event);
  };

  // handle checkbox
  const onCheckBoxClick = (e) => {
    let temp = events;
    if (e.target.checked) {
      if (eventCount > 2) {
        Swal.fire("More than three events selected");
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
  };

  // check if email is valid
  const checkEmail = () => {
    // eslint-disable-next-line
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
  const submit = async () => {
    if (checkForm()) {
      if (!checkEmail()) {
        Swal.fire("Enter valid Email ID");
        return;
      }
      if (!checkPhone()) {
        Swal.fire("Enter valid Phone Number");
        return;
      }
      Swal.fire({
        title:
          '<center><img class="animate-spin w-20 h-20" src="https://image.flaticon.com/icons/png/512/3305/3305803.png" alt="Loading..." /></center>',
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      const idURL = await uploadId(fileRef.current.files[0]);
      // regButtonRef.current.disabled = true;
      const details = {
        name: name,
        institute: institute,
        dept: dept,
        year: year,
        email: email,
        phone: phone,
        events: events,
        idURL: idURL,
      };
      let result = await existingUser(details);
      if (!result) {
        register(details).then(() => {
          Swal.fire({
            icon: "success",
            title: "Registered Successfully",
          });
          resetValues();
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Email ID Already Registered",
        });
      }
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
    domCheckBoxRef.current.checked = false;
    // regButtonRef.current.disabled = false;
    setName("");
    setDept("");
    setInstitute("");
    setEmail("");
    setPhone("");
    setYear("");
    setClgId("");
    setEventCount(0);
    setEvents([]);
  };

  //set File
  const setFile = (e) => {
    if (e.target.files[0].size > 500000) {
      Swal.fire("Please upload file less than 1MB");
      return;
    }
    setClgId(e.target.value);
  };

  return (
    <>
      <div className="p-3 bg-gray-300">
        <div className="flex flex-col justify-center items-stretch register-wrap lg:ml-48 lg:mr-48">
          <h1 className="m-1 text-xl">Register</h1>
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
            placeholder="Branch of Study"
          />
          {/* <input
            type="text"
            className="m-2 p-2 rounded-md"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            placeholder="Year of Study"
          /> */}
          <select
            className="m-2 p-2 rounded-md bg-white"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          >
            <option value="1st Year">1st year</option>
            <option value="2nd Year">2nd year</option>
            <option value="3rd Year">3rd year</option>
            <option value="4th Year">4th year</option>
          </select>
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
          <label className="text-bold m-2 text-md">
            Upload College ID
            <p className="text-red-700">
              (only .jpg, .jpeg, .png files upto 1Mb)
            </p>
          </label>
          <div className="flex items-center mb-2">
            {/* sample button above */}
            <div>
              <button
                onClick={uploadMirror}
                className="flex items-center p-2 bg-green-300 m-1 rounded "
              >
                <IoMdCloudUpload size={22} />
                &nbsp;&nbsp;
                <span>Upload</span>
              </button>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                className="height-0"
                onChange={setFile}
                hidden
                value={clgId}
                placeholder="College ID"
                ref={fileRef}
              />
            </div>
            {clgId !== "" ? (
              <button
                className="bg-red-500 p-2 text-white rounded-md m-1"
                onClick={() => setClgId("")}
              >
                <IoMdTrash size={22} />
              </button>
            ) : null}
          </div>
          <p className="text-sm text-bold m-1 text-red-800">*Choose 3 Events</p>
          <div
            className={
              window.innerWidth > 800
                ? "flex justify-between"
                : "grid grid-cols-2"
            }
          >
            <div className="flex flex-row items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Talen-di-sadee"
                ref={talnCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                TALEN-DI-SADEE
              </label>
            </div>
            <div className="flex flex-row items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Co-di-Go"
                ref={codigoCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                CO-DI-GO
              </label>
            </div>
            <div className="flex flex-row items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Logo pursuit"
                ref={logoCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                LOGO PURSUIT
              </label>
            </div>
            <div className="flex items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="BGMI"
                ref={bgmiCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                BGMI_SURVIVE
              </label>
            </div>
            <div className="flex flex-row items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Quibble"
                ref={quibleCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                QUIBBLE'21
              </label>
            </div>
            <div className="flex flex-row items-center m-2">
              <input
                type="checkbox"
                onChange={onCheckBoxClick}
                id="Domain Dude"
                ref={domCheckBoxRef}
              />
              <label htmlFor="event" className="ml-1">
                DOMAIN DUDE
              </label>
            </div>
          </div>

          <button
            className="p-2 rounded-md shadow-md bg-blue-400 m-2 duration-300 transform hover:scale-105"
            onClick={submit}
            ref={regButtonRef}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Registration;
