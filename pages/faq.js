import React from "react";
import { Collapse, Button } from "antd";
const { Panel } = Collapse;

function Faq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h1>Frequently Asked Questions</h1>
          <h3>Find answers to your emergency situations</h3>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="What to do when stomach ache?" key="1">
            <p>Go to washroom</p>
          </Panel>
          <Panel header="Headache?" key="2">
            <p>Bang your head to the wall</p>
          </Panel>
          <Panel header="Chest pain?" key="3">
            <p>Beat your chest</p>
          </Panel>
          <Panel header="What to do when snake bit?" key="4">
            <p>Kill the snake first</p>
          </Panel>
          <Panel header="What to do when legs pain?" key="5">
            <p>Get a skateboard</p>
          </Panel>
          <Panel header="Fingers got cut?" key="6">
            <p>Grab them and put it on ice</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Is your question missing or do you want to add another remedy?</p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i> Email your question
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
