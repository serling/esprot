import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from '../image';

const Character = ({ id, name, src, isSelected, onClick }) => {
  return (
    <div
      className={cn('character', {
        'character--active': isSelected
      })}
    >
      <input
        className="character__input"
        type="checkbox"
        checked={isSelected}
        id={id}
        onClick={onClick}
        name={id}
        value={id}
      />
      <label htmlFor={id} className="character__label">
        <div className="character__name">{name}</div>
        <div className="character__portrait">
          <Image src={src} alt={name} theme={Image.themes.portrait} />
        </div>
      </label>
    </div>
  );
};

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};
export default Character;
