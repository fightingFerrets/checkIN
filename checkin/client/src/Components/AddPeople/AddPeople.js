import React, { Component } from 'react';

class AddPeople extends Component {
    state = {
        receiver: [],
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

    //function that adds a person to mongodb and refreshes the modal allowing a user to add another person to their check in
    addMultiple = () => {
        this.setState({

        })
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Check In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form>

                                <div className="form-group">
                                    <label for="input">Check In With?</label>

                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Hermoine Granger</span>
                                    </div>

                                    <label for="input">Phone # example: 7027590101</label>

                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Phone Number</span>
                                    </div>

                                    <label for="input">Status? example: Hiking, Safe, etc.</label>

                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Hiking</span>
                                    </div>

                                    <label for="input">Comment</label>

                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Comment</span>
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