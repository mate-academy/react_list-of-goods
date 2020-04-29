import React from 'react';
import './App.css';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    clicked: false,
  }

  StartClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    const startButtonClicked = this.state.clicked;

    return (
      <div className="App">
        {startButtonClicked
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.StartClick}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

class GoodsList extends React.Component {
  state = {
    goodsCopy: [...goodsFromServer],
  }

  ReverseGoods = () => {
    this.setState(({ goodsCopy }) => ({
      goodsCopy: goodsCopy.reverse(),
    }));
  }

  render() {
    const listOfGoods = this.state.goodsCopy;

    return (
      <>
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.ReverseGoods}
        >
          Reverse Goods
        </button>
        <ul className="list">
          {listOfGoods.map(good => (
            <li className="list__item" key={good}>{good}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
