import { useState } from "react";
import { Navigate } from "react-router-dom";
import React from "react";
import index from './index'
import Sos from './Sos'


function Register() {
  const [firstname, setFirstName] = useState("");
  const [lasttname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emergency, setEmergency] = useState("");

  const [goToLogin, setGoToLogin] = React.useState(false);
  if (goToLogin) {
    return <Navigate to="/Login"/>;
  }

  return (
    <div>
      <Sos emergency={emergency}/>
    <form>
      <label>
        <b>FIRST NAME : </b>
      </label>
      <input
        type="text"
        placeholder="Enter First Name"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <br></br>
      <label>
        <b>LAST NAME : </b>
      </label>
      <input
        type="text"
        placeholder="Enter Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <br></br>
      <label>
        <b>PHONE NUMBER : </b>
      </label>
      <input
        type="tel"
        placeholder="Enter Phone Number"
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />
      <br></br>
      <label>
        <b>USERNAME : </b>
      </label>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <br></br>
      <label>
        <b>PASSWORD : </b>
      </label>
      <input
        type="text"
        placeholder="Enter Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br></br>
      <label>
        <b>EMERGENCY CONTACT : </b>
      </label>
      <input
        type="text"
        placeholder="Enter Emergency contact"
        onChange={(event) => {
          setEmergency(event.target.value);
        }}
      />
      <br></br>
      <button onClick={() => setGoToLogin(true)}>Register</button>
      
    </form>
  </div>
  );
}
export default Register;
