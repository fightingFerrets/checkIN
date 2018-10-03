import React from 'react';
import "../SendNow/SendNow.css";

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
                                    onChange={props.onChange}
                                    name="receiver">
                                </input>
                            </div>
                            <label htmlFor="input">Phone Number ex: 7028885555</label>
                            <div className="input-group input-group-sm mb-3">
                                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                    id="phoneNum"
                                    value={props.phoneNum}
                                    onChange={props.onChange}
                                    name="phoneNum">
                                </input>
                            </div>
                            {/* <label htmlFor="input">Status? example: Hiking, Leaving From, Safe, etc.</label>
                            <div className="input-group input-group-sm mb-3">
                                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                    id="condition"
                                    value={props.condition}
                                    onChange={props.onChange}
                                    name="condition">
                                </input>
                            </div> */}
                            {/* <label htmlFor="input">Comment</label>
                            <div className="input-group input-group-sm mb-3">
                                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                    id="comment"
                                    value={props.comment}
                                    onChange={props.onChange}
                                    name="comment">
                                </input>
                            </div> */}
                        </div>

                        {/* <button //add A person and send check in//
                            className="btn btn-primary"
                            type="button"
                            onClick={props.onClick}>
                            Check In
                        </button> */}

                        <button
                            className="button loginBtn"
                            type="button"
                            data-toggle="modal"
                            data-target="#addModal"
                            onClick={props.onClick}>
                            Add Person
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
);
export default AddPeople;