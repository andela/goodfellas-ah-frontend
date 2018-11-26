import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNotification } from '../actions/notificationActions';

export class NotificationSettings extends Component {
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
    const { notification } = this.props;
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

  render() {
    const { email, inApp } = this.state;
    return (
      <div className="notification-settings-wrapper notification-panel">
        <div className="notification-settings-header">
          <h2>Notification Settings</h2>
        </div>
        <div className="notification-settings">
          <div className="notification-settings-email">
            <p>Email Notification</p>
            <label className="notification-switch">
              <input type="checkbox" onChange={this.handleToggleChange} name="email" checked={email} className="toggle-click" />
              <span className="slider round" />
            </label>
          </div>
          <div className="notification-settings-inApp">
            <p>In App Notification</p>
            <label className="notification-switch">
              <input type="checkbox" onChange={this.handleToggleChange} name="inApp" className="toggle-click-inApp" checked={inApp} />
              <span className="slider round" />
            </label>
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
  { updateNotification },
)(NotificationSettings);
