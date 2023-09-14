import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import stateCity from "../Constant/StateList";
import { RegExNum, RegExAlfa, RegExMail } from "../Common/RegEx";
import { ErrorAlfa, ErrorNum, ErrorMail, ErrorCom } from "../Common/ErrorMsg";
import { objList } from "../Constant/ObjectList";
import { useDispatch } from "react-redux";
import { addFormData, selectFormData } from "../Redux/Slice";
import { Link } from "react-router-dom";
import Header from "../Component/Header";

const Form = () => {
  const dispatch = useDispatch();

  const [errorMsgFirstName, setErrorMsgFirstName] = useState("");
  const [errorMsgMiddleName, setErrorMsgMiddleName] = useState("");
  const [errorMsgLastName, setErrorMsgLastName] = useState("");
  const [errorMsgMobileNo, setErrorMsgMobileNo] = useState("");
  const [errorMsgEmailId, setErrorMsgEmailId] = useState("");
  const [errorMsgPinCode, setErrorMsgPinCode] = useState("");
  const [value, setValue] = useState(objList);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    if (name === "state") {
      setValue((prevValue) => ({
        ...prevValue,
        city: "",
      }));
    }
  };

  const handleInputChangeFname = (e) => {
    const inputValue = e.target.value;
    const isAlphabetic = RegExAlfa.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Fname: inputValue,
    }));
    if (isAlphabetic) {
      setErrorMsgFirstName(ErrorCom);
    } else {
      setErrorMsgFirstName(ErrorAlfa);
    }
  };

  const handleInputChangeMname = (e) => {
    const inputValue = e.target.value;
    const isAlphabetic = RegExAlfa.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Mname: inputValue,
    }));
    if (isAlphabetic) {
      setErrorMsgMiddleName(ErrorCom);
    } else {
      setErrorMsgMiddleName(ErrorAlfa);
    }
  };

  const handleInputChangeLname = (e) => {
    const inputValue = e.target.value;
    const isAlphabetic = RegExAlfa.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Lname: inputValue,
    }));
    if (isAlphabetic) {
      setErrorMsgLastName(ErrorCom);
    } else {
      setErrorMsgLastName(ErrorAlfa);
    }
  };

  const handleInputChangeMono = (e) => {
    const inputValue = e.target.value;
    const isNumber = RegExNum.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Mono: inputValue,
    }));
    if (isNumber) {
      setErrorMsgMobileNo(ErrorCom);
    } else {
      setErrorMsgMobileNo(ErrorNum);
    }
  };

  const handleInputChangeEmail = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    const inputValue = e.target.value;
    const isMail = RegExMail.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Eid: inputValue,
    }));
    if (isMail) {
      setErrorMsgEmailId(ErrorCom);
    } else {
      setErrorMsgEmailId(ErrorMail);
    }
  };

  const handleInputChangePIN = (e) => {
    const inputValue = e.target.value;
    const isNumber = RegExNum.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      pin: inputValue,
    }));
    if (isNumber) {
      setErrorMsgPinCode(ErrorCom);
    } else {
      setErrorMsgPinCode(ErrorNum);
    }
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      value.Fname === "" ||
      value.Mname === "" ||
      value.Lname === ""
      // ||
      // value.date === ""
    ) {
      alert("Please Enter Information");
    } else {
      const newFormData = { ...value, id: uuid() };
      dispatch(addFormData(newFormData));
      dispatch(selectFormData(newFormData));
      // console.log("newFormData", newFormData);
      setValue(objList);
      // console.log("object", objList);
    }
  };

  return (
    <>
      <Header pageTitle="Form" />
      <div className="form">
        <h2>Client Inteck Form</h2>
        <b style={{ color: "red" }}>* Mendatory to Fill.</b>
        <div className="form-data">
          <form>
            <h4>Personal Information</h4>
            <label className="label">
              First Name:<b style={{ color: "red" }}>*</b> <br />
              <input
                type="text"
                name="Fname"
                value={value.Fname}
                onChange={handleInputChangeFname}
                placeholder="Your Name"
                required
                maxLength="15"
              />
              {errorMsgFirstName && (
                <p style={{ color: "red" }}>{errorMsgFirstName}</p>
              )}
              <br />
              Middle Name :
              <input
                type="text"
                name="Mname"
                value={value.Mname}
                onChange={handleInputChangeMname}
                placeholder="Father's Name"
                required
                maxLength="15"
              />
              {errorMsgMiddleName && (
                <p style={{ color: "red" }}>{errorMsgMiddleName}</p>
              )}
              <br />
              Last Name :
              <input
                type="text"
                name="Lname"
                value={value.Lname}
                onChange={handleInputChangeLname}
                placeholder="SurName"
                required
                maxLength="15"
              />
              {errorMsgLastName && (
                <p style={{ color: "red" }}>{errorMsgLastName}</p>
              )}
              <br />
              Date Of Birth:<b style={{ color: "red" }}>*</b>
              <input
                type="date"
                dateFormat="dd/MM/yyyy"
                name="date"
                value={value.date}
                onChange={handleInputChange}
                placeholder="Birth Date"
              />
              <br />
              Gender:<b style={{ color: "red" }}>*</b>
              <div className="gender-btn">
                <input
                  className="gender-btn-m"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={value.gender === "Male"}
                  onChange={handleInputChange}
                />{" "}
                Male
                <input
                  className="gender-btn-f"
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={value.gender === "Female"}
                  onChange={handleInputChange}
                />{" "}
                Female
                <input
                  className="gender-btn-o"
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={value.gender === "Other"}
                  onChange={handleInputChange}
                />{" "}
                Other
              </div>
            </label>
          </form>
          <div>
            <h4>Digital Information</h4>
            <label className="label">
              Mobile No:<b style={{ color: "red" }}>*</b>
              <input
                type="text"
                name="Mono"
                value={value.Mono}
                onChange={handleInputChangeMono}
                placeholder="Mobile No"
                required
                maxLength="10"
              />
              {errorMsgMobileNo && (
                <p style={{ color: "red" }}>{errorMsgMobileNo}</p>
              )}
              <br />
              Email Id :
              <input
                type="text"
                name="Eid"
                value={value.Eid}
                onChange={handleInputChangeEmail}
                placeholder="abcd@email.com"
              />
              {errorMsgEmailId && (
                <p style={{ color: "red" }}>{errorMsgEmailId}</p>
              )}
            </label>
          </div>
          <div>
            <h4>Contact Information</h4>
            <label className="label">
              Address:<b style={{ color: "red" }}>*</b>
              <input
                type="text"
                name="Add"
                value={value.Add}
                onChange={handleInputChange}
                placeholder="Address"
              />
              <br />
              <br />
              State :
              <br />
              <div>
                <select
                  className="dropdown"
                  name="state"
                  value={value.state}
                  onChange={handleInputChange}
                >
                  <option>Select State</option>
                  {Object.keys(stateCity).map((state) => (
                    <option>{state}</option>
                  ))}
                </select>
              </div>
              <br />
              <br />
              City :
              <br />
              <div>
                <select
                  className="dropdown"
                  name="city"
                  value={value.city}
                  onChange={handleInputChange}
                >
                  <option>Select City</option>
                  {value.state &&
                    stateCity[value.state].map((city) => (
                      <option>{city}</option>
                    ))}
                </select>
              </div>
              <br />
              <br />
              Pin Code:<b style={{ color: "red" }}>*</b>
              <input
                type="text"
                name="pin"
                value={value.pin}
                onChange={handleInputChangePIN}
                placeholder="Pin Code"
                required
                maxLength="6"
              />
              {errorMsgPinCode && (
                <p style={{ color: "red" }}>{errorMsgPinCode}</p>
              )}
            </label>
          </div>
        </div>
        <Link to="/DetailPage">
          <button type="button" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </Link>
      </div>
    </>
  );
};

export default Form;
