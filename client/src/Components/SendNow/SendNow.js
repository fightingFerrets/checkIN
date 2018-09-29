import React, { Component } from 'react';
import "./SendNow.css";
class SendNow extends Component {
    state = {
        receiver: [],
        phoneNum: [],
        status: [],
        mediaUrl: '',
        comment: []
    }

    //allow user to select added person and send mediaUrl

    render() {
        return (

            <div className="modal fade" id="sendNowModal" tabindex="-1" role="dialog" aria-labelledby="sendNowModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ backgroundImage: `url('./images/bg_little.jpg')` }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="sendNowModalLabel">Check In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="input">Check In With?</label>

                                {this.state.receiver.map(receiver => {
                                    return <div class="checkbox">
                                        <label><input type="checkbox" value={this.state.receiver} /></label>
                                    </div>
                                })
                                }

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
                                className="button loginBtn"
                                type="button"
                                onClick={() => this.sendLocation()}
                            >
                                Check In
                                </button>

                        </div>
                    </div>
                </div>
                {/* <AddPeople /> */}
            </div >
        )
    }

}

export default SendNow;