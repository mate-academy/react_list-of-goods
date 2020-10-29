import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

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
        <ul className="ui list">
          {goodsList.map(good => (
            <li key={good} className="ui list">
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

GoodList.propTypes = {
  goodsFromServer: PropTypes.arrayOf.isRequired,
};

export default GoodList;
