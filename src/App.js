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
  state={
    isGoodsLoaded: false,
    goods: [...goodsFromServer],
  }

  shownClick = () => {
    this.setState({
      isGoodsLoaded: true,
    });
  }

  reverseClick = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  render() {
    const listOfGoodGenerator = this.state.isGoodsLoaded
      && this.state.goods.map(item => <li>{item}</li>);

    const showListButton = this.state.isGoodsLoaded
      || (
        <button
          type="button"
          className="button"
          onClick={this.shownClick}
        >
        Start
        </button>
      );

    const reverseButton = this.state.isGoodsLoaded
      && (
        <button
          type="button"
          className="button button--reverse"
          onClick={this.reverseClick}
        >
        Reverse
        </button>
      );

    return (
      <div className="App">
        <h1>Goods 1</h1>
        {reverseButton}
        {showListButton}
        <ul className="list">
          {listOfGoodGenerator}
        </ul>
      </div>
    );
  }
}

export default App;
