import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';
import ListOfGoods from './ListOfGoods';

class GoodList extends React.Component {
  state = {
    goodsList: this.props.goodsFromServer,
  };

  reverse = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  }

  sortByAlphabetically = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      goodsList: this.props.goodsFromServer,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goodsList } = this.state;

    return (
      <>
        <Options
          reverse={this.reverse}
          sortByAlphabetically={this.sortByAlphabetically}
          reset={this.reset}
          sortByLength={this.sortByLength}
        />
        <ListOfGoods
          items={goodsList}
        />
      </>
    );
  }
}

GoodList.propTypes = {
  goodsFromServer: PropTypes.arrayOf.isRequired,
};

export default GoodList;
