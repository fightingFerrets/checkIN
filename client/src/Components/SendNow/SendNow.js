import React, { Component } from 'react';
import "./SendNow.css";

const SendNow = props => (
    < div className="modal fade" id="sendNowModal" tabIndex="-1" role="dialog" aria-labelledby="sendNowModalLabel" aria-hidden="true" >
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

                        <div className="input-group input-group-sm mb-3">
                            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                id="receiver"
                                value={props.receiver}
                                onChange={props.onChange}
                                name="receiver">
                            </input>
                        </div>


                        <label htmlFor="input">Phone # example: 7027590101</label>

                        <div className="input-group input-group-sm mb-3">
                            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                id="phoneNum"
                                value={props.phoneNum}
                                onChange={props.onChange}
                                name="phoneNum">
                            </input>
                        </div>

                        <label htmlFor="input">Status? example: Hiking, Leaving From, Safe, etc.</label>

                        <div className="input-group input-group-sm mb-3">
                            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                id="condition"
                                value={props.condition}
                                onChange={props.onChange}
                                name="condition">
                            </input>
                        </div>

                        <label htmlFor="input">Comment</label>

                        <div className="input-group input-group-sm mb-3">
                            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                id="comment"
                                value={props.comment}
                                onChange={props.onChange}
                                name="comment">
                            </input>
                        </div>

                    </div>

                    <button
                        className="button loginBtn"
                        type="button"
                        data-toggle="modal"
                        data-target="#sendNowModal"
                        onClick={props.onClick}>
                        Check In
                                </button>

                </div>
            </div>
        </div>

    </div >
)




export default SendNow;