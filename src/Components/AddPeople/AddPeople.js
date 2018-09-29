import React, { Component } from 'react';
import { auth } from '../../firebase';
import "./AddPeople.css";
class AddPeople extends Component {
    state = {
        receiver: [], //person in mongo db related with our user
        phoneNum: [],
        status: [],
        mediaUrl: '',
        comment: []
    }

    const AddPeople = props => (
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

                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                        id="receiver"
                                        value={props.receiver}
                                        name="receiver"
                                        onChange={props.handleInputChange}>
                                    </input>
                                </div>


                                <label htmlFor="input">Phone # example: 7027590101</label>

                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                        id="phone"
                                        value={props.phoneNum}
                                        name="phone"
                                        onChange={props.handleInputChange}>
                                    </input>
                                </div>

                                <label htmlFor="input">Status? example: Hiking, Leaving From, Safe, etc.</label>

                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                        id="condition"
                                        value={props.condition}
                                        name="condition"
                                        onChange={props.handleInputChange}>
                                    </input>
                                </div>

                                <label htmlFor="input">Comment</label>

                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                        id="comment"
                                        value={props.comment}
                                        name="comment"
                                        onChange={props.handleInputChange}>
                                    </input>
                                </div>

                                render() {
        return (
            <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content" style={{ backgroundImage: `url('./images/bg_little.jpg')` }}>
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
                                                        className="button loginBtn"
                                                        type="button"
                                                        onClick={() => this.sendLocation()}
                                                    >
                                                        Check In
                                </button>

                                                    <button
                                                        className="button aboutBtn"
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
                                );
                                
export default AddPeople;