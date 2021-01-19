import React from 'react';
import { GoodList } from './GoodList';
import './App.scss';

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

function removeSpaces(value) {
  return value.split(' ').join('');
}

class App extends React.Component {
  state = {
    goods: [],
    elemIsVisible: false,
  }

  showList = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
      elemIsVisible: true,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  resetList = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => removeSpaces(a).length - removeSpaces(b).length),
    }));
  };

  render() {
    const { elemIsVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>

        <div className="App__buttons buttons">
          {!elemIsVisible && (
            <button
              type="button"
              className="buttons__button buttons__button--green"
              onClick={this.showList}
            >
              Start
            </button>
          )}

          {elemIsVisible && (
            <>
              <button
                type="button"
                className="buttons__button buttons__button--green"
                onClick={this.reverseList}
              >
                Reverse
              </button>

              <button
                type="button"
                className="buttons__button buttons__button--yellow"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="buttons__button buttons__button--red"
                onClick={this.resetList}
              >
                Reset
              </button>

              <button
                type="button"
                className="buttons__button buttons__button--magenta"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </>
          )}
        </div>

        {elemIsVisible && (
          <GoodList
            goods={this.state.goods}
          />
        )}
      </div>
    );
  }
}

export default App;
