import React from 'react';
import { GoodsList } from './components/GoodsList';
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

const preparedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.PureComponent {
  state = {
    showList: false,
    isReversed: false,
    sortBy: '',
    value: '1',
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  startButton = () => {
    this.setState({ showList: true });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlph = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      sortBy: '', isReversed: false, value: '1',
    });
  }

  render() {
    const { isReversed, sortBy, showList, value } = this.state;

    let goodsList = [...goodsFromServer];

    if (value > 1) {
      goodsList = [...goodsFromServer.filter(good => good.length >= value)];
    }

    goodsList.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabet':
          return g1.localeCompare(g2);

        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsList.reverse();
    }

    return (
      <div className="App box has-text-centered">
        <h1 className="title is-1">Goods</h1>
        {!showList && (
          <button
            type="button"
            className="button is-primary is-light m-2"
            onClick={this.startButton}
          >
            Start
          </button>
        )}
        {showList && (
          <>
            <GoodsList
              goods={goodsList}
            />
            <div>
              <button
                type="button"
                onClick={this.reverse}
                className="button is-link is-light m-2"
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlph}
                className="button is-success is-light m-2"
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.sortLength}
                className="button is-warning is-light m-2"
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.reset}
                className="button is-danger is-light m-2"
              >
                Reset
              </button>
            </div>
            <div className="select is-rounded">
              <select
                value={this.state.value}
                onChange={this.handleChange}
              >
                {preparedValues.map(item => (
                  <option
                    value={item}
                    key={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
