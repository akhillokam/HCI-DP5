import { useState } from "react";
import { Navigate } from "react-router-dom";
import React from "react";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [goToHome, setGoToHome] = React.useState(false);
  if (goToHome) {
    return <Navigate to="/" />;
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <br></br>
      <input
        type="text"
        placeholder="Enter Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br></br>
      <button onClick={() => setGoToHome(true)}>Login</button>
    </form>
  );
}
export default Login;
