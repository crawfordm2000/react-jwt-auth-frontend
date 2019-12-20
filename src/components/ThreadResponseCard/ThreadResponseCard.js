import React, { Component } from "react";

class ThreadResponseCard extends Component {
  state = {};
  render() {
    return (
      <div className="response-card-wrap">
        
          <div class="col s12 m12 l12" >
         
            <div class="response card blue-grey response-card">
            <div class="card-action">
            <a href="#"><i class="material-icons white-text darken-4 left">account_circle</i><span className='white-text'>{this.props.username}</span></a>
          <a href="#"><i class="material-icons white-text text-darken-4 right">favorite</i></a>
        </div>
              <div class="card-content large black-text response">
                <h5 id='response-card-text'>
                  {this.props.responseData.text}
                </h5>
              </div>
            </div>
          </div>
        
      </div>
    );
  }
}

export default ThreadResponseCard;
