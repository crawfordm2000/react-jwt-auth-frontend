import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";
import ClubCard from "../ClubCard/ClubCard"

class Profile extends Component {
  state = {
    updatedUser: {
      username: "",
      password: ""
    },

    clubs: []
  };

  componentDidMount() {
    this.getLoggedInUser();
    this.getUserClubs();
  }

  getUserClubs = () => {
    if (this.state.user) {
      this.state.user.clubs.forEach(club => {
        console.log(club)
        console.log(`${this.props.databaseUrl}/api/users/${club}`)
        // axios({
        //   method: "get",
        //   url: `${this.props.databaseUrl}/api/users/${club}`
        // })
        
        // .then(response => {
        //   this.setState((prevState, currentState) => {
        //     clubs: [...prevState.clubs, ...response]
        //   })
        // })
      })
    }
    
  }

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

  handleDeleteUser = () => {
    axios({
      url: `${this.props.databaseUrl}/api/users/${window.localStorage.userID}`,
      method: "delete"
    }).then(response => {
      console.log(response);
    });
  };

  // to update the state of the patient
  changeUser = e => {
    let updatedUser = {
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    };
    console.log(this.state.updatedUser);
    this.setState((prevState, currentState) => ({
      updatedUser: { ...prevState.updatedUser, ...updatedUser }
    }));
  };
  // axios call to change state of the array of patients
  updateUser = e => {
    e.preventDefault();
    // let id = this.state.updatedUser.id;
    // let intId = Number(id);
    axios({
      url: `${this.props.databaseUrl}/api/users/${window.localStorage.userID}`,
      method: "put",
      data: this.state.updatedUser
    }).then(response => {
      this.setState({ user: response.data.user });
    });
  };

  

  render() {
    console.log(this.state.user)
    if (this.state.user) {
      return (
        <div className='profile-wrap'>
          <h4 id='welcome' className='welcome'>Welcome Back {this.state.user.firstName} {this.state.user.lastName}!</h4>
          <div>
          </div>
          <div className="col s12 l5 offset-l2 htmlForm-wrap">
            <form
              onChange={e => this.changeUser(e)}
              onSubmit={e => this.updatedUser(e)}
            >
              <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input
                  name="username"
                  type="text"
                  id="text"
                  // onChange={event => this.handleInput(event)}
                />
                <label className="label" htmlFor="name">
                  Username:
                </label>
              </div>
              <div className="input-field"></div>

              <div className="input-field">
                <i className="material-icons prefix">lock</i>
                <input
                  htmlFor="password"
                  // onChange={event => this.handleInput(event)}
                  name="password"
                  id="text"
                  type="text"
                ></input>
                <label className="label" htmlFor="message">
                  Password:
                </label>
              </div>
              {/* SUBMIT BUTTON */}
              <div className="btn-wrap">
                <button
                  id='update'
                  className="update btn sign waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={event => this.updateUser(event)}
                >
                  Update Your Profile
                </button>
                <button
                  id='delete'
                  className="delete btn sign waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={event => this.handleDeleteUser(event)}
                >
                  Delete Your Profile
                </button>
              </div>
            </form>
          </div>
          <div>
            {this.state.user.clubs.map(club => {
              axios({
                method: "get",
                url: `${this.props.databaseUrl}/api/clubs/${club}`
              }).then(response => {
                return (<ClubCard club={response} />)
            })
            
            
              
            })}
    </div>
        </div>
   
      );
    } else {
      return (
        <div>
          <h4>You are not logged in Dude!</h4>
        </div>
      );
    }
  }
}

export default Profile;
