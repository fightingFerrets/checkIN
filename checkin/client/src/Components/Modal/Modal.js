import React, { Component } from "react";
import "./Modal.css";
import firebase, { auth, provider } from "../../firebase";
import GoogleButton from "react-google-button";

//this is the login modal

//This could take the place of sign up as it does both login and sign up.
//When a person logs in this should hit the mongo db to search for the id of the person,
//if the person exists, then the program should search for any people associated with that loginID and should not create them, if they do not exist it should create

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user: null,
      error: {
        message: ""
      }
    };
  }

  login() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userData => {
        console.log("login", userData);

        window.location.href = "/checkIn";
        // alert('success');
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  googleLogIn() {
    auth.signInWithPopup(provider).then(result => {
      console.log(result);
      window.location.href = "/checkIn";
    });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ backgroundImage: `url('./images/bg_little.jpg')` }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="email"
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>

                  <input
                    className="form-control"
                    type="password"
                    placeholder="password"
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </div>

                <button
                  className="button loginBtn"
                  type="button"
                  onClick={() => this.login()}
                >
                  Login
                </button>
                <br />
                <br />

                <GoogleButton
                  onClick={() => this.googleLogIn()}
                  className="googlesCool"
                />
                <br />
                <br />
              </form>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
              <div>{this.state.error.message}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
