import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

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
    goods: [],
    isVisible: false,
  }

  showList = () => {
    this.setState({
      goods: [...goodsFromServer],
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  sortByName = () => {
    this.setState(state => ({
      goods: state.goods.sort((fg, sg) => fg.localeCompare(sg)),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((fg, sg) => fg.length - sg.length),
    }));
  }

  render() {
    return (
      <div className="App">
        <button
          type="button"
          onClick={this.showList}
          className={this.state.isVisible ? 'invisible' : ''}
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.reverse}
          className={this.state.isVisible ? '' : 'invisible'}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortByName}
          className={this.state.isVisible ? '' : 'invisible'}
        >
          Sort by alphabet
        </button>
        <button
          type="button"
          onClick={this.reset}
          className={this.state.isVisible ? '' : 'invisible'}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
          className={this.state.isVisible ? '' : 'invisible'}
        >
          Sort by length
        </button>
        <GoodsList goodsList={this.state.goods} />
      </div>
    );
  }
}

export default App;
