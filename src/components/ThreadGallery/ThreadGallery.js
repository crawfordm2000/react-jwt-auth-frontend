import React, { Component } from "react";
import "./ThreadGallery.css";
import axios from "axios";
import ThreadCard from "../ThreadCard/ThreadCard.js";
class ThreadGallery extends Component {
  state = {
    threadArray: null
  };
  componentDidMount() {
    this.getThreads();
  }
  getThreads = () => {
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/clubs/${window.localStorage.clubID}/threads`
    })
      .then(response => {
        // console.log(response.data)
        this.setState({
          threadArray: response.data
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="thread row">
        {this.state.threadArray
          ? this.state.threadArray.map(thread => {
              return (
                <ThreadCard
                  databaseUrl={this.props.databaseUrl}
                  movieData={thread}
                />
              );
            })
          : null}
      </div>
    );
  }
}
export default ThreadGallery;