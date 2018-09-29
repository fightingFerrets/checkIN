import React, { Component } from 'react';

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

                        </div>

                        <button
                            classNameName="btn btn-primary"
                            type="button"
                        // onClick={() => this.sendLocation()}
                        >
                            Check In
                                </button>

                        <button
                            classNameName="btn btn-primary"
                            type="button"
                            onClick={() => props.handleFormSubmit()}
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