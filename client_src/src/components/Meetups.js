import React, { Component } from "react";
import axios from "axios";

class Meetups extends Component {
  constructor() {
    super();
    this.state = {
      meetups: [],
    };
  }

  componentWillMount() {
    this.getMeetups();
  }

  getMeetups() {
    axios.get("http://localhost:3000/api/meetups").then((response) => {
      this.setState({ meetups: response.data }, () => {
        //console.log(this.state);
      });
    });
  }

  render() {
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return <li className="collection-item">{meetup.name}</li>;
    });
    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">{meetupItems}</ul>
      </div>
    );
  }
}

export default Meetups;
