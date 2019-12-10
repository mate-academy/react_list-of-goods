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

const optionsArr = new Array(10);

for (let i = 0; i < optionsArr.length; i += 1) {
  optionsArr[i] = i;
}

class App extends React.Component {
  state = {
    isStarted: false,
    goods: [...goodsFromServer],
    selectGoods: [...goodsFromServer],
    selectedValue: 1,
    newOptionsArr: [...optionsArr],
  }

  viewList = () => {
    this.setState({ isStarted: true });
  };

  reverseGoods = () => {
    this.setState(item => ({ goods: [...item.goods].reverse() }));
  };

  sort = () => {
    this.setState(item => ({ goods: [...item.goods].sort() }));
  }

  reset = () => {
    this.setState({ goods: [...goodsFromServer], selectedValue: 1 });
  }

  sortLength = () => {
    this.setState(item => (
      { goods: [...item.goods].sort((a, b) => a.length - b.length) }));
  }

  optionValue = (item) => {
    this.setState({ selectedValue: item.target.value });
    this.setState(elem => (
      {
        goods: [...elem.selectGoods]
          .filter(i => i.length >= elem.selectedValue),
      }
    ));
  }

  render() {
    const { goods, selectedValue, isStarted, newOptionsArr } = this.state;

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
              value={selectedValue}
              onChange={item => this.optionValue(item)}
            >
              {newOptionsArr.map((item, i) => (
                <option value={i} key={item}>{i}</option>
              ))}
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
