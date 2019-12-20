import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import CreateThread from "../CreateThread/CreateThread";
import "./ClubCard.css";
import "materialize-css/dist/css/materialize.min.css";
class ClubCard extends Component {
  state = {};
  storeClubID = () => {
    window.localStorage.setItem("clubID", this.props.club._id);
  };
  handleJoinClub = () => {};
  render() {
    return (
      <div className="col m6 l2">
        <div
          className="card"
          data-tilt
          data-tilt-max="50"
          data-tilt-speed="400"
          data-tilt-perspective="500"
        >
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator zoom"
              src={this.props.club.thumbnailURL}
            />
          </div>
          <div className="card-content">
            <span id="club-card-title" className="card-title activator">
              {this.props.club.title}
              <i class="material-icons right">more_vert</i>
            </span>
            <p onClick={this.storeClubID}>
              <a href="/CreateThread">
                <i className="material-icons blue-text text-darken-4">
                  remove_red_eye
                </i>
              </a>
            </p>
          </div>
          <div class="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {this.props.club.title}
              <i className="material-icons right">close</i>
            </span>
            <span className="watching">Currently Watching:</span>
            <p className="current-topic">{this.props.club.currentTopic}</p>
            <p className="club-description">{this.props.club.description}</p>
            <br />
            <div className="club card-action right">
              <a
                className="link"
                href="/CreateThread"
                onClick={this.storeClubID}
                alt="test"
              >
                Discussion
              </a>
              <br />
              <br />
              <a
                onClick={event => this.handleJoinClub(event)}
                className="link"
                href="https://google.com"
                alt="test"
              >
                Join Club
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ClubCard);