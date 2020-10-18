import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AddMeetup extends Component {
  addMeetup(newMeetup) {
    axios
      .request({
        method: "post",
        url: "http://localhost:3000/api/meetups",
        data: newMeetup,
      })
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  }
  onSubmit(e) {
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value,
    };
    this.addMeetup(newMeetup);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1>Add Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" ref="name" />
          </div>
          <div className="input-field">
            <label htmlFor="city">City</label>
            <input type="text" name="city" ref="city" />
          </div>
          <div className="input-field">
            <label htmlFor="name">Address </label>
            <input type="text" name="address" ref="address" />
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default AddMeetup;
