import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { confirm } from "../../actions/auth";

class ConfirmationPage extends React.Component {
  state = {
    loading: true,
    success: false
  };

  componentDidMount() {
    this.props
      .confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  render() {
    const { loading, success } = this.state;

    return (
      <div className="container-fluid">
        {loading && (
          <div className="alert alert-info">Validating your account...</div>
        )}

        {!loading &&
          success && (
            <div className="alert alert-success">
              Thank you! Your account has been verified. Now you can go to your
              <Link to="/dashboard"> dashboard</Link>
            </div>
          )}

        {!loading &&
          !success && (
            <div className="alert alert-danger">
              Ooops. Invalid token it seems.
            </div>
          )}
      </div>
    );
  }
}

ConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default connect(null, { confirm })(ConfirmationPage);
