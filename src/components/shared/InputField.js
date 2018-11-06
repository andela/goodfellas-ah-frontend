import React from 'react';

const InputField = (props) => (
  <div className="form-group">
    <input type={props.type} className="form-control form-control-lg" placeholder={props.placeholder} name={props.name} />
  </div>
);

export default InputField;
