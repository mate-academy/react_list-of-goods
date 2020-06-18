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
            type="success"
            size="lg"
          >
            Start
          </Button>
        )
        : (
          <div>
            <Button
              handleClick={this.toggleList}
              type="danger"
              size="lg"
            >
              Hide
            </Button>
            <GoodsList goods={this.props.goods} />
          </div>
        )
    );
  }
}

export { Goods };

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
