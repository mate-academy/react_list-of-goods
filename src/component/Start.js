import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: this.props.goods,
      buttonHidden: false,
    };
  }

  clickedFirstButton = (event) => {
    this.setState(prevView => ({
      ...prevView,
      buttonHidden: !prevView.buttonHidden,
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
