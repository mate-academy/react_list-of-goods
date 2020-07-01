import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Things } from '../Things/Things';

export class GoodsList extends Component {
  state = {
    isShown: false,
    goods: this.props.things,
  }

  clickHandler = () => {
    this.setState({ isShown: true });
  }

  reverseHandler = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  render() {
    const { isShown, goods } = this.state;

    return (
      <>

        { isShown
          ? <Things content={goods} />
          : null
        }
        { !isShown
          ? <button type="button" onClick={this.clickHandler}>Show list</button>
          : null
        }
        <button type="button" onClick={this.reverseHandler}>Reverse</button>
      </>
    );
  }
}

GoodsList.propTypes = {
  things: PropTypes.arrayOf(PropTypes.string).isRequired,
};
