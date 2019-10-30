import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: false,
    };
  }

  clickedFirstButton = (event) => {
    this.setState(prevState => ({
      ...prevState,
      buttonHidden: !prevState.buttonHidden,
    }));
  }

  render() {
    return (
      this.state.buttonHidden
        ? (
          <Order goods={this.props.goods} />
        ) : (
          <button
            type="submit"
            className="ui red button"
            onClick={this.clickedFirstButton}
          >
          Start!
          </button>
        )
    );
  }
}

Start.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Start;
