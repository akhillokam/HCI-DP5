import React, { Component } from "react";
// import "./SMSForm.css";
// import image from '../public/sos.jpg';
import Register from "./Register";

class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: "",
        body: "Hi your neighbor is in danger, care to help?",
      },
      submitting: false,
      error: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },      body: JSON.stringify(this.state.message),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: "",
              body: "Hi your neighbor is in danger, care to help?",
            },
          });
        } else {
          this.setState({
            error: true,
            submitting: false,
          });
        }
      });
  }

  onHandleChange(event) {
    const name = event.target.getAttribute("name");
    this.setState({
      message: { ...this.state.message, [name]: event.target.value },
    });
  }
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? "error sms-form" : "sms-form"}
      >
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="tel"
            name="to"
            id="to"
            value={this.state.message.to}
            onChange={this.onHandleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            id="body"
            value={this.state.message.body}
            onChange={this.onHandleChange}
          />
        </div> */}
        <p>Emergency contact is: {this.props.emergency}</p>
        <h2>Are you sure you want to call for help?</h2>
        <button id="sos" type="submit" disabled={this.state.submitting}>
Send      </button>
      </form>
    );
  }
}

export default SMSForm;
