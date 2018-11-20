import React from 'react';
import PropTypes from 'prop-types';

import Character from '../character';

class Selection extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string.isRequired })
    )
  };

  state = {
    ...this.props.data
  };

  handleOnClick = id => {
    let chars = this.state.characters;

    chars.map(character => {
      if (character.id === id) {
        character.isSelected = !character.isSelected;
      }
    });

    this.setState({
      characters: chars
    });
  };

  serialize = () => ({
    id: this.props.id,
    data: {
      characters: this.state.characters
    }
  });

  render() {
    return (
      <div className="selection">
        <h2>{this.props.title}</h2>
        <div className="selection__list">
          {this.state.characters.map(character => (
            <div className="selection__item" key={character.id}>
              <Character
                onClick={() => {
                  this.handleOnClick(character.id);
                }}
                {...character}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Selection;
