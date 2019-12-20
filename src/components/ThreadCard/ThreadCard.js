import React, { Component } from "react";
import "./ThreadCard.css";
class ThreadCard extends Component {
  state = {};
  setLocalStorage = () => {
    window.localStorage.setItem("threadID", this.props.movieData._id);
  };
  render() {
    console.log(this.props.movieData);
    return (
      <div class="thread">
        <div class="thread card horizontal">
          <div id="thread-image" class="thread card-image">
            <img
              src={
                this.props.movieData.thumbnailURL
                  ? this.props.movieData.thumbnailURL
                  : ""
              }
              alt=""
            />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <span className="card-title">{this.props.movieData.title}</span>
              <p>{this.props.movieData.prompt}</p>
            </div>
            <div class="card-action">
              <a
                href="/thread"
                onClick={event => {
                  this.setLocalStorage(event);
                }}
              >
                <i class="material-icons">arrow_forward</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ThreadCard;