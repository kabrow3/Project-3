import React from "react";
import Modal from "react-responsive-modal";

const SignInModal = props => (
<Modal open={props.open} onClose={props.onCloseModal} center>
        <br/>
        <h4 className="text-center">Please, login into your account</h4>
        <form id="signIn" name="signIn" className="col-sm-12">
          <div className="row">
            <div className="form-group col-sm-12">
              <input id="email" name="email" type="text" className="validate"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12">
              <input id="password" name="password" type="password" className="validate"/>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div class='row'>
            <button type='submit' class='col-sm-12 btn btn-primary'>Login</button>
          </div>
        </form>
        <a href=""><p className="text-center">create account</p></a>
        </Modal>
)

export default SignInModal;