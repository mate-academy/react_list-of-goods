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
    isClicked: false,
    goods: goodsFromServer,
    value: '1',
  }

  mainClick = () => {
    this.setState({ isClicked: true });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: goodsFromServer,
      value: '1',
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (a, b) => a.length - b.length,
      ),
    }));
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      goods: goodsFromServer.filter(
        item => item.length >= event.target.value,
      ),
    });
  }

  render() {
    const { isClicked, goods, value } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.mainClick}
          hidden={isClicked}
        >
          Start
        </button>

        <div hidden={!isClicked}>
          <ul className="list">
            {goods.map(item => (
              <li className="list__item" key={item}>
                {item}
              </li>
            ))}
          </ul>

          <button type="button" onClick={this.reverse}>
            Reverse
          </button>
          <button type="button" onClick={this.sortByAlphabet}>
            Sort alphabetically
          </button>
          <button type="button" onClick={this.reset}>
            Reset
          </button>
          <button type="button" onClick={this.sortByLength}>
            Sort by length
          </button>

          <select value={value} onChange={this.handleChange}>
            <option value="1">1</option>
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
        </div>
      </div>
    );
  }
}

export default App;
