import React, { Component } from "react";
import "./SignUpForm.css";
class SignUpForm extends Component {
  render() {
    return (
      <div className="signup-wrap">
        {/* INTRODCTION TO SIGN UP */}
        <section className="section container scrollspy" id="contact">
          <div className="row">
            <div className="col s12 l5">
              <h2 className="indigo-text text-darken-4 signhead">
                Let the show begin...
              </h2>
              <p>
                Welcome to our movie club app. Please take a moment to create an account (It's free!).
                After you have created an account
              </p>
              <p>
                Mauris dolor augue, vulputate in pharetra ac, facilisis nec
                libero. Fusce condimentum gravida urna, vitae scelerisque erat
                ornare nec.
              </p>
            </div>
            {/* SIGN UP htmlForM */}
            <div className="col s12 l5 offset-l2 htmlForm-wrap">
              <form className='signup-form'>
                <div className="input-field">
                  <i className="sign material-icons prefix">account_circle</i>
                  <input
                    name="username"
                    type="text"
                    id="text"
                    onChange={this.props.handleInput}
                  />
                  <label className="signup-label" htmlFor="name">
                    Username:
                  </label>
                </div>
                <div className="input-field">
                  <i className="sign material-icons prefix">contacts</i>
                  <input
                    name="firstName"
                    htmlFor="firstName"
                    type="text"
                    id="text"
                    onChange={this.props.handleInput}
                  />
                  <label className="sign signup-label" htmlFor="firstName">
                    First Name:
                  </label>
                </div>
                <div className="input-field">
                  <i className="sign material-icons prefix">contacts</i>
                  <input
                    name="lastName"
                    htmlFor="lastName"
                    type="text"
                    id="text"
                    onChange={this.props.handleInput}
                  />
                  <label className="signup-label" htmlFor="name">
                    Last Name:
                  </label>
                </div>
                <div className="input-field">
                  <i className="sign material-icons prefix">email</i>
                  <input
                    name="email"
                    htmlFor="email"
                    type="email"
                    id="email"
                    onChange={this.props.handleInput}
                  />
                  <label className="signup-label" htmlFor="email">
                    Email:
                  </label>
                </div>
                <div className="input-field">
                  <i className="sign material-icons prefix">lock</i>
                  <input
                    htmlFor="password"
                    onChange={this.props.handleInput}
                    name="password"
                    id="text"
                    type="text"
                  ></input>
                  <label className="signup-label" htmlFor="message">
                    Password:
                  </label>
                </div>
            
                {/* SUBMIT BUTTON */}
                <div className="btn-wrap">
                  <button
                    className="btn sign waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={this.props.handleSignUp}
                  >
                    Submit
                  </button>
                  <p className="login-message">
                    Already a member? <a href="/login">Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default SignUpForm;
