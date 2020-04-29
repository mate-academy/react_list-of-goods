import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Selcted from './Selected';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goodsFromServer],
    numberOfSelectedPoints: 10,
    defaultValue: 1,
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse().filter(good => prevState.goods.indexOf(good) < this.state.numberOfSelectedPoints),
    }));
  }

  sorAlphabetically = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort().filter(good => prevState.goods.indexOf(good) < this.state.numberOfSelectedPoints),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...this.props.goodsFromServer],
      numberOfSelectedPoints: 10,
      defaultValue: 1,
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => a.length - b.length).filter(good => prevState.goods.indexOf(good) < this.state.numberOfSelectedPoints),
    }));
  }

  selected = (value) => {
    this.setState({
      numberOfSelectedPoints: value,
      defaultValue: value,
    });
  }

  render() {
    const { goods } = this.state;
    const { defaultValue } = this.state;

    return (
      <>
        <ul>
          {goods.filter(good => goods.indexOf(good) < this.state.numberOfSelectedPoints).map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        <Button
          reset={this.reset}
          sortByLength={this.sortByLength}
          sorAlphabetically={this.sorAlphabetically}
          reverse={this.reverse}
        />
        <Selcted selected={this.selected} defaultValue={defaultValue}/>
      </>
    );
  }
}

GoodsList.propTypes = {
  goodsFromServer: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]).isRequired,
  ).isRequired,
};

export default GoodsList;
