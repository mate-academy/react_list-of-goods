import React from 'react';
// import classNames from 'classnames';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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
    goodsList: [],
    isReversed: false,
    sortedBy: '',
    isVisible: false,
  }

  ShowList = () => {
    this.setState({
      goodsList: goodsFromServer,
      isVisible: true,
    });
  }

  Reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  SortAlphabetically = () => {
    this.setState({
      sortedBy: 'alphabeth',
    });
  }

  SortByLength = () => {
    this.setState({
      sortedBy: 'length',
    });
  }

  Reset = () => {
    this.setState({
      isReversed: false,
      sortedBy: '',
    });
  }

  render() {
    const { goodsList, isReversed, sortedBy, isVisible } = this.state;
    const visibleList = [...goodsList];

    visibleList.sort((g1, g2) => {
      switch (sortedBy) {
        case 'alphabeth':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleList.reverse();
    }

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.ShowList}
          className={
            isVisible
              ? 'button-start--hidden'
              : 'button-start--visible'
          }
        >
          Start
        </button>

        <GoodsList goodsList={visibleList} />

        <div>
          <button
            type="button"
            onClick={this.Reverse}
            className="App__button"
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.SortAlphabetically}
            className="App__button"
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.SortByLength}
            className="App__button"
          >
            Sort by length
          </button>
        </div>

        <button
          type="button"
          onClick={this.Reset}
          className="App__button"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
