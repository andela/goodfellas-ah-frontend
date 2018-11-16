import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNotification, updateNotification } from '../actions/notificationActions';

class Notification extends Component {
  state = {
    email: false,
    inApp: false,
  };

  handleToggleChange = async (e) => {
    const { updateNotification: toggleNotification } = this.props;
    let toggle = '';
    this.setState({ [e.target.name]: e.target.checked });
    if (e.target.checked) {
      toggle = 'on';
    } else {
      toggle = 'off';
    }
    await toggleNotification(e.target.name, toggle);
  };

  componentDidMount() {
    const { setNotification: initialNotification } = this.props;
    initialNotification();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { notification } = nextProps;
      const currentNotification = notification.notification;
      const checkEmail = currentNotification.findIndex((setting) => setting === 'email');
      const checkinApp = currentNotification.findIndex((setting) => setting === 'inApp');
      if (checkEmail !== -1) {
        this.setState({
          email: true,
        });
      }
      if (checkinApp !== -1) {
        this.setState({
          inApp: true,
        });
      }
    }
  }

  render() {
    const { email, inApp } = this.state;
    return (
      <div className="notification-panel mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-muted text-center">Notification settings</h6>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="slider-title">Email Notification</p>
                      <label className="notification-switch">
                        <input type="checkbox" onChange={this.handleToggleChange} name="email" checked={email} />
                        <span className="slider round" />
                      </label>
                    </div>
                    <div className="col-md-5">
                      <p className="slider-title">In-App Notification</p>
                      <label className="notification-switch">
                        <input type="checkbox" onChange={this.handleToggleChange} name="inApp" checked={inApp} />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(
  mapStateToProps,
  { setNotification, updateNotification },
)(Notification);
