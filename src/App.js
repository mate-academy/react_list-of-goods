import React from 'react';
import PropTypes from 'prop-types';

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
    isStarted: false,
    visibleGoods: [...goodsFromServer],
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reverse = () => {
    this.setState(state => (
      { visibleGoods: [...state.visibleGoods].reverse() }));
  };

  reset = () => {
    this.setState({ visibleGoods: [...goodsFromServer] });
  };

  sortByName = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods]
        .sort(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { isStarted, visibleGoods } = this.state;

    return (
      <div className="App">
        <h1>
Goods
          {visibleGoods.length}
        </h1>
        {isStarted ? (
          <section>

            <button
              type="button"
              onClick={() => {
                this.setState(this.reverse);
              }}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState(this.sortByName);
              }}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState(this.reset);
              }}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState(this.sortByLength);
              }}
            >
              Sort By Length
            </button>

            <select>
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

            <GoodsList list={visibleGoods} />
          </section>

        ) : (
          <button
            type="button"
            onClick={this.start}
          >
              Start
          </button>
        )}

      </div>
    );
  }
}

const GoodsList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li>
        {item}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = { list: PropTypes.arrayOf(PropTypes.object).isRequired };

export default App;
