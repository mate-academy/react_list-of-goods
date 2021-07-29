import React from 'react';
import PropTypes from 'prop-types';

export class ListOfGoods extends React.Component {
  state = {
    listOfGoods: [...this.props.goodsFromServer],
  };

  listReverse = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.reverse(),
    }));
  }

  listSortAlphabetically = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.sort(),
    }));
  }

  resetList = () => {
    this.setState(() => ({
      listOfGoods: [...this.props.goodsFromServer],
    }));
  }

  sortByLengthList = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.sort(
        (prevGood, nextGood) => prevGood.length - nextGood.length,
      ),
    }));
  }

  render() {
    const { listOfGoods } = this.state;
    const { goodsFromServer } = this.props;
    const {
      listReverse,
      listSortAlphabetically,
      resetList,
      sortByLengthList,
    } = this;

    return (
      <>
        <ul className="App__items">
          {listOfGoods.map(good => (
            <li key={Math.random()}>
              {good}
            </li>
          ))}
        </ul>
        <div className="App__button">
          <button
            type="button"
            onClick={listReverse}
          >
            reverse
          </button>

          <button
            type="button"
            onClick={listSortAlphabetically}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={resetList}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={sortByLengthList}
          >
            Sort by length
          </button>
        </div>
      </>
    );
  }
}

ListOfGoods.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string).isRequired,
};
