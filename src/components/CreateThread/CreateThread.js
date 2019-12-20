import React, { Component } from "react";
import ThreadGallery from "../ThreadGallery/ThreadGallery.js";
import "./CreateThread.css";
import axios from "axios";
class CreateThread extends Component {
  state = {
    title: "",
    prompt: "",
    club: null
  };
  componentDidMount() {
    this.getClub();
  }
  getClub = () => {
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/clubs/${window.localStorage.clubID}`
    }).then(response => {
      console.log(response);
      this.setState({
        club: response.data.club
      });
      console.log(this.state.club);
    });
  };
  handleCreateThread = event => {
    event.preventDefault();
    if (this.state.club) {
      const newThread = {
        title: this.state.title,
        prompt: this.state.prompt,
        thumbnailURL: this.state.club.thumbnailURL,
        backdropURL: this.state.club.backdropURL
      };
      const clubID = window.localStorage.clubID;
      axios({
        method: "post",
        url: `${this.props.databaseUrl}/api/clubs/${clubID}/threads`,
        data: newThread
      }).then(response => {
        console.log(response);
      });
    }
  };
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // handleInput = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  //   console.log(this.state);
  // };
  render() {
    return (
      <div className="create-thread-wrap">
        <div className="row">
          <form action="/action_page.php" id="usrform">
            <i id="thread-icon" class="material-icons prefix">
              stars
            </i>
            <label htmlFor="password">Title:</label>
            <input
              name="password"
              type="text"
              name="title"
              onChange={event => this.handleInput(event)}
            />
            <div className="text-area-wrap">
              <textarea
                className="text-area"
                name="prompt"
                form="usrform"
                onChange={event => this.handleInput(event)}
              >
                Start a discussion...
              </textarea>
            </div>
            <input
              id="thread-btn"
              className="btn waves-effect waves-light"
              type="submit"
              onClick={event => this.handleCreateThread(event)}
            />
          </form>
        </div>
        <ThreadGallery databaseUrl={this.props.databaseUrl} />
      </div>
    );
  }
}
export default CreateThread;
{
  /* <form className='form'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input className='submit' value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form> */
}