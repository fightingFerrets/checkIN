import React, { Component } from 'react';

class AddPeople extends Component {
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
                            <div className="form-group">
                                <label for="input">Check In With?</label>

                                {this.state.receiver.map(receiver => {
                                    return <div class="checkbox">
                                        <label><input type="checkbox" value={this.state.receiver} />{this.state.receiver}</label>
                                    </div>
                                })
                                }

                                < label for="input">Status? example: Hiking, Safe, On My Way Home From, etc.</label>

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
                                Add Someone
                                </button>

                        </div>
                    </div>
                </div>
                <AddPeople />
            </div >
        )
    }

}

export default AddPeople;