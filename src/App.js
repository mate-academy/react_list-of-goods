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
    selectValue: 1,
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
    this.setState({ selectValue: 1 });
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

  lengthSelect = (element) => {
    this.setState({
      visibleGoods: goodsFromServer.filter(word => (
        word.length >= +element.target.value
      )),
      selectValue: element.target.value,
    });
  };

  render() {
    const { isStarted, visibleGoods, selectValue } = this.state;
    const lengthsForSelection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

            <select
              onChange={this.lengthSelect}
              value={selectValue}
            >
              {lengthsForSelection.map(neededLength => (
                <option key={neededLength} value={neededLength}>
                  {neededLength}
                </option>
              ))}
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
