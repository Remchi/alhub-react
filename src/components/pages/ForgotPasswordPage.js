import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";

class ForgotPasswordPage extends React.Component {
  state = {
    success: false
  };

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true }));

  render() {
    return (
      <div>
        <div className="container" style={{ height: "100vh" }}>
          <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
              <div className="card">
                <h2 className="card-header">Recover Password</h2>
                <div className="card-body">
                  {this.state.success ? (
                    <div className="alert alert-info">Email has been sent.</div>
                  ) : (
                    <ForgotPasswordForm submit={this.submit} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
};

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
