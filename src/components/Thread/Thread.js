import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./Thread.css";
import axios from "axios";

import ThreadResponseCard from "../ThreadResponseCard/ThreadResponseCard.js";

class Thread extends Component {
  state = {
    responsesArray: null,
    currentThread: null
  };

  componentDidMount = () => {
    this.getResponses();
    this.getThread();
    this.getLoggedInUser();
  };

  getResponses = () => {
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/threads/${window.localStorage.threadID}/responses`
    })
      .then(response => {
        // console.log(response.data)
        this.setState({
          responsesArray: response.data
        });
      })
      .catch(err => console.log(err));
  };

  handleCreateResponse = event => {
    event.preventDefault();
    const newResponse = {
      text: this.state.text,
      username: this.state.user.username,
      likes: 0,
      timestamp: new Date() 
    };
    const threadID = window.localStorage.threadID;
    axios({
      method: "post",
      url: `${this.props.databaseUrl}/api/threads/${threadID}/responses`,
      data: newResponse
    }).then(response => {
      console.log(response);
    });
  };

  getLoggedInUser = () => {
    console.log(
      `${this.props.databaseUrl}/api/users/${window.localStorage.userID}`
    );
    console.log(`Bearer ${window.localStorage.token}`);
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/users/${window.localStorage.userID}`
      // headers: { Authorization: `Bearer ${window.localStorage.token}`}
    }).then(response => {
      this.setState({
        user: response.data
      });
      console.log(this.state.user)
      return(this.state.user)
    });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  };

  getThread = () => {
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/threads/${window.localStorage.threadID}`
    })
      .then(response => {
        this.setState({
          currentThread: response.data
        });
        console.log(this.state.currentThread);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      // {this.state.currentThread ? () : null}
      <div class="row">
        <div id="thread-area" class="col s12 m12 l7">
          <div className="thread-topic-wrap">
          <h2 id='current-thread-title'>
              {this.state.currentThread ? this.state.currentThread.title : null}
          </h2>
          </div>
          <div id='thread-prompt'>
            {this.state.currentThread ? this.state.currentThread.prompt : null}
          </div>
        </div>

        <div id="response-area" class="col s12 m12 l5">
          <form onChange={(event) => this.handleInput(event)}>
            <div className="text-area-wrap">
              <textarea placeholder='Remember, be polite!' name="styled-textarea response-input-area" id="styled"   className="text-area" name="text" form="usrform">
                
              </textarea>
            </div>
            <div id='thread-btn-wrap'>
            <input
              id="thread-btn"
              className="btn waves-effect waves-light"
              type="submit"
              onClick={(event) => {this.handleCreateResponse(event)}}
            />
            </div>
          </form>
          {this.state.responsesArray && this.state.user
            ? this.state.responsesArray.map(response => {
                return <ThreadResponseCard username={this.state.user.username} responseData={response} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Thread;
