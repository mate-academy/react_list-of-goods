import React from 'react';
import PropTypes from 'prop-types';
import { GoodsListButtons } from '../GoodsListButtons/GoodsListButtons';
import { GoodItem } from '../GoodItem/GoodItem';
import { GoodsListSelect } from '../GoodsListSelect/GoodsListSelect';

class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
    minLength: 1,
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods.reverse()],
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods.sort((a, b) => a.localeCompare(b))],
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.goods,
      minLength: 1,
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods.sort((a, b) => a.length - b.length)],
    }));
  }

  setMinLength = (value) => {
    this.setState({ minLength: Number(value) });
  }

  render() {
    return (
      <>
        <ul className="list-group">
          {
            this.state.goods.map(product => (
              product.length >= this.state.minLength
                && <GoodItem product={product} key={product} />
            ))
          }
        </ul>
        <GoodsListButtons
          goods={this.state.goods}
          reverse={this.reverse}
          sortAlphabetically={this.sortAlphabetically}
          reset={this.reset}
          sortByLength={this.sortByLength}
        />
        <GoodsListSelect
          minLength={this.state.minLength}
          setMinLength={this.setMinLength}
        />
      </>
    );
  }
}

export { GoodsList };

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
