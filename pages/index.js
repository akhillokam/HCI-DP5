import "../App.css";
import { useState } from "react";
import React from "react";
import JSONDATA from "../MOCK_DATA.json";
import Card from "react-bootstrap/Card";
import { Navigate } from "react-router-dom";
import Sos from "./Sos";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gotosos, setGoToSos] = React.useState(false);
  if (gotosos) {
    return <Navigate to="/Sos"  />;
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for help"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button onClick={() => setGoToSos(true)}>SOS</button>
      <br></br>

      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return; // this returns evverything; val is the entire json data
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            {/* {val.first_name}
              <img src={val.icon} /> */}
            <div class="row">
              <Card>
                <Card.Img variant="top" src={val.icon} />
                <Card.Body>
                  <Card.Title>{val.first_name}</Card.Title>
                  <Card.Text>Video</Card.Text>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = val.video;
                    }}
                  >
                    Click to play Video
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
