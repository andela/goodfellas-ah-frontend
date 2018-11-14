import React, { Component } from 'react';

class Notification extends Component {
  state = {
    email: true,
    inApp: true
  };

  render() {
    return (
      <div className="notification-panel">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-center">Notification settings</h5>
                  {/* <p className="card-text">Enable/Disable email or In app notification</p> */}

                  <div className="row">
                    <div className="col-md-7">
                      <p className="slider-title">Email Notification</p>
                      <label className="notification-switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                    </div>
                    <div className="col-md-5">
                      <p className="slider-title">In-App Notification</p>
                      <label className="notification-switch">
                        <input type="checkbox" />
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

export default Notification;
