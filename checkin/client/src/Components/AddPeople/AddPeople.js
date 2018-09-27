import React, { Component } from 'react';
import { auth } from '../../firebase'
class AddPeople extends Component {
    state = {
        receiver: [], //person in mongo db related with our user
        phoneNum: [],
        status: [],
        mediaUrl: '',
        comment: []
    }

    //function that adds a person to our mongo db and sends the mediaUrl
    addPersonAndSend = () => {
        this.setState({

        })
    }

    checkSignedInUserFreinds = (user) => {
        //api to call user model and populate all their friends
        //then set to state
    }

    //function that adds a person to mongodb and refreshes the modal allowing a user to add another person to their check in
    addMultiple = () => {
        this.setState({

        })
    }

    componentDidMount() {
        auth.onAuthStateChanged(function (user) {
            console.log(user);
            console.log(user.displayName)
            console.log(user.email)
            if (user) {
                // User is signed in.
                //insert user into db the constarint will keep duplication from happening
                //aftuser is in db call checkSignedInUserFreinds

            } else {
                // No user is signed in.
            }
        });
    }

    render() {
        return (
            <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addModalLabel">Check In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form>

                                <div className="form-group">
                                    <label htmlFor="input">Check In With... Hermoine Granger?</label>

                                    <div class="input-group input-group-sm mb-3">
                                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                        </input>
                                    </div>


                                    <label htmlFor="input">Phone # example: 7027590101</label>

                                    <div class="input-group input-group-sm mb-3">
                                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                        </input>
                                    </div>

                                    <label htmlFor="input">Status? example: Hiking, Leaving From, Safe, etc.</label>

                                    <div class="input-group input-group-sm mb-3">
                                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                        </input>
                                    </div>

                                    <label htmlFor="input">Comment</label>

                                    <div class="input-group input-group-sm mb-3">
                                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                        </input>
                                    </div>

                                </div>

                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={() => this.sendLocation()}
                                >
                                    Check In
                                </button>

                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={() => this.sendLocation()}
                                >
                                    Add Another Person
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AddPeople;