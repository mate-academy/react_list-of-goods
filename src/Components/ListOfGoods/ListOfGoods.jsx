import React from 'react';

export class ListOfGoods extends React.Component {
  state = {
    // eslint-disable-next-line react/prop-types
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
    this.setState(({ listOfGoods }) => ({
      // eslint-disable-next-line react/prop-types
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
            onClick={() => this.listReverse()}
          >
            reverse
          </button>

          <button
            type="button"
            onClick={() => this.listSortAlphabetically()}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={() => this.resetList()}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => this.sortByLengthList()}
          >
            Sort by length
          </button>
        </div>
      </>
    );
  }
}
