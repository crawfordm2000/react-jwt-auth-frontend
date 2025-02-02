import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import axios from "axios";
import ClubCard from "../ClubCard/ClubCard";
import "./Explore.css";
import "materialize-css/dist/css/materialize.min.css";

class Explore extends Component {
  state = {
    clubs: []
  };

  componentDidMount() {
    // window.localStorage.setItem("clubID", "")
    this.getClubs();
  }

  getClubs = () => {
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/clubs`,
    })
      .then(response => {

        this.setState({
          clubs: response.data.clubs
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props)
    const clubEls = this.state.clubs.map(club => {
      return <ClubCard key={club._id} club={club} />;
    });

    return (
      <div className='explore-wrap'>
        <div className="club-wrap">
          <h2 className="club indigo-text text-darken-4 signhead">FILM CLUBS</h2>

          <div className="btn-wrapper">
            <a href="/CreateClub" className="btn create-club-button">
              Create Club
            </a>
          </div>
          <div className='explore row'>
            {clubEls}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Explore);
