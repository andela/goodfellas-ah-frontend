import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../../actions/authActions';

const Header = (props) => {
  const { signout: signoutUser } = props;
  return (
    <div>
      <button
        type="button"
        onClick={signoutUser}
      >
        Sign Out
      </button>
    </div>
  );
};

export default connect(null, { signout })(Header);
