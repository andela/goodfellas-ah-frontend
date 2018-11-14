import React, { Component } from 'react';
import icons from '../../assets/icons.svg';
import { userPlaceholderImage } from '../../mixin';

class ProfileImageUploader extends Component {
  handleChange = (e) => {
    const { imageRead } = this.props;
    const file = e.target.files[0];
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = () => {
      imageRead(file, reader.result);
    };
    if (file) reader.readAsDataURL(file);
  }

  render() {
    const { profileImage, canReset, resetImage } = this.props;
    return (
      <div
        className="profile-image profile-image-uploader centralizer"
        style={{ backgroundImage: `linear-gradient(rgba(150, 150, 150, 0.4), rgba(150, 150, 150, 0.4)), url(${profileImage || userPlaceholderImage})` }}
      >
        {canReset && <span onClick={resetImage} className="profile-image-uploader_cancel hoverable centralizer">x</span>}
        <input type="file" onChange={this.handleChange} id="uploader" accept=".png, .jpg, .jpeg" />
        <label htmlFor="uploader">
          <svg className="icon">
            <use xlinkHref={`${icons}#camera`} />
          </svg>
        </label>
      </div>
    );
  }
}

export default ProfileImageUploader;
