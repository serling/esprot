import React from 'react';
import PropTypes from 'prop-types';

const types = {
  radio: 'radio',
  checkbox: 'checkbox'
};

const Checkbox = ({
  id,
  defaultChecked,
  label,
  name,
  value,
  type,
  required
}) => (
  <div className="checkbox">
    <input
      className="checkbox__input"
      id={id}
      defaultChecked={defaultChecked}
      name={name}
      type={types[type]}
      value={value}
      required={required}
    />
    <label htmlFor={id} className="checkbox__label">
      <span className="checkbox__text">{label}</span>
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  type: PropTypes.oneOf(Object.keys(types).map(key => types[key])).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  type: types.checkbox
};

Checkbox.types = types;

export default Checkbox;
