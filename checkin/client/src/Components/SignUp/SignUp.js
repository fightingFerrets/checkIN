
import React, { Component } from 'react';
import "./SignUp.css";
import firebase, { auth, provider } from '../../firebase'



class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {

        alert('Success, Proceed to login');
        window.location.href = '/';
      })
      .catch(error => {
        this.setState({ error })
      });
  }

  render() {
    return (
      <div className="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document" >
          <div className="modal-content" style={{ backgroundImage: `url('./images/bg_little.jpg')` }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="email"
                    onChange={event => this.setState({ email: event.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>

                  <input
                    className="form-control"
                    type="password"
                    placeholder="password"
                    onChange={event => this.setState({ password: event.target.value })}
                  />
                </div>

                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => this.signUp()}
                >
                  Sign Up
                </button>
              </form>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
              <div>{this.state.error.message}</div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}




export default SignUpModal;