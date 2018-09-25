
import React from "react";
import "./Modal.css";

const Modal = props => (
  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Matrix Data Sheet</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {/* SUBMIT FORM */}
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Username:</label>
              <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Username" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="modal-footer">


        </div>
      </div>
    </div>
  </div>





);

export default Modal;
