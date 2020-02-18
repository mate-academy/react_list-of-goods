import React from 'react';
import PropTypes from 'prop-types';

import Goods from '../Goods/Goods';
import Button from '../Button/Button';
import Select from '../Select/Select';

class GoodsList extends React.Component {
  state = {
    goodsList: [...this.props.goods],
    goodsLength: 1,
  }

  reverseHandler = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.reverse(),
    }));
  }

  abcSortHandler = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetHandler = () => {
    this.setState({
      goodsList: [...this.props.goods],
      goodsLength: 1,
    });
  }

  lengthSortHandler = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.sort((a, b) => a.length - b.length),
    }));
  }

  selectedHandler = (e) => {
    const goodsList = [...this.props.goods];
    // eslint-disable-next-line max-len
    const filteredList = goodsList.filter(good => good.length >= e.target.value);

    this.setState({
      goodsList: filteredList,
      goodsLength: Number(e.target.value),
    });
  }

  render() {
    const { goodsList, goodsLength } = this.state;

    return (
      <>
        <div>
          <Button onClick={this.reverseHandler}>Reverse</Button>
          <Button onClick={this.abcSortHandler}>Sort alphabetically</Button>
          <Button onClick={this.resetHandler}>Reset</Button>
          <Button onClick={this.lengthSortHandler}>Sort by length</Button>
          <Select value={goodsLength} onChange={this.selectedHandler} />
        </div>
        <Goods goods={goodsList} />
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
