import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'components/checkbox';
import Heading from 'components/heading';

const Checkboxes = ({ inputs, title }) => (
  <div className="checkboxes">
    <Heading text={title} className="checkboxes__heading" />
    <ul className="checkboxes__list">
      {inputs.map(input => (
        <li className="checkboxes__item" key={input.id}>
          <Checkbox {...input} />
        </li>
      ))}
    </ul>
  </div>
);

Checkboxes.propTypes = {
  inputs: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default Checkboxes;
