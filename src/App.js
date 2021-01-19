import React from 'react';
import './App.scss';

import GoodsList from './components/GoodsList';

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
    goods: goodsFromServer,
    showList: false,
    isReversed: false,
    sortBy: '',
    selectedValue: 1,
  }

  show = () => {
    this.setState({
      showList: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      selectedValue: 1,
    });
  }

  changeValue = (e) => {
    this.setState({
      selectedValue: e.target.value,
    });
  }

  render() {
    const { isReversed, goods, showList, sortBy, selectedValue } = this.state;

    return (
      <div className="App">
        <h1>
          Goods:
          {goods.length}
        </h1>
        {
          !showList
            ? (
              <button
                type="button"
                className="start-button buttons"
                onClick={this.show}
              >
                Start
              </button>
            )

            : (
              <div>
                <button
                  type="button"
                  className="buttons"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={this.sortByName}
                >
                  Sort by name
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <select className="select-goods" onChange={this.changeValue}>
                  <option value="1" defaultChecked>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

                <button
                  type="button"
                  className="buttons buttons--reset"
                  onClick={this.reset}
                >
                  Reset
                </button>

                <GoodsList
                  goods={goods}
                  isReversed={isReversed}
                  sortBy={sortBy}
                  selectedValue={selectedValue}
                />
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
