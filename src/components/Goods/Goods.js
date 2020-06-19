import React from 'react';
import PropTypes from 'prop-types';
import { GoodsList } from '../GoodsList/GoodsList';
import { Button } from '../Button';

class Goods extends React.Component {
  state = { isShown: false }

  toggleList = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  }

  render() {
    return (
      !this.state.isShown
        ? (
          <Button
            handleClick={this.toggleList}
            color="success"
            size="lg"
          >
            Start
          </Button>
        )
        : <GoodsList goods={this.props.goods} />
    );
  }
}

export { Goods };

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
