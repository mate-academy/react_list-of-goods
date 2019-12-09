import React from 'react';

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
    goods: [...goodsFromServer],
    selectGoods: [...goodsFromServer],
    selectedValue: 1,
  }

  viewList = () => {
    this.setState({ isStarted: true });
  };

  reverseGoods = () => {
    this.setState(item => ({ goods: item.goods.reverse() }));
  };

  sort = () => {
    this.setState(item => ({ goods: item.goods.sort() }));
  }

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  }

  sortLength = () => {
    this.setState(item => (
      { goods: item.goods.sort((a, b) => a.length - b.length) }));
  }

  optionValue = (item) => {
    this.setState({ selectedValue: item.target.value });
    this.setState(elem => (
      { goods: [...elem.selectGoods].slice(0, elem.selectedValue) }
    ));
  }

  render() {
    const { isStarted } = this.state;
    const { goods } = this.state;

    return (
      <section className="goods">
        {isStarted ? (
          <>
            <h1>List of goods</h1>
            <button
              type="button"
              onClick={this.reverseGoods}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sort}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.sortLength}
            >
              Sort by length
            </button>
            <select
              default="1"
              onChange={this.optionValue}
            >
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
            <ul>
              {goods.map(item => (
                <li
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </>
        )
          : (
            <button
              type="button"
              onClick={this.viewList}
            >
          Start
            </button>
          )}
      </section>
    );
  }
}

export default App;
