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
    value: 1,
    isClicked: false,
    arrayOfGoods: [...goodsFromServer],
  };

  handleLoadClick = () => {
    this.setState({
      isClicked: true,
    });
  };

  goodsReverse = () => {
    console.log('goodsFromServer', goodsFromServer);
    this.setState({
      arrayOfGoods: [...goodsFromServer].reverse(),
    });
  };

  sortAlphabet = () => {
    this.setState({
      arrayOfGoods: [...goodsFromServer].sort((a, b) => {
        if (a < b) { return -1; }
        if (a > b) { return 1; }
        return 0;
      }),
    });
  };

  sortLength = () => {
    this.setState({
      arrayOfGoods: [...goodsFromServer].sort((a, b) => {
        if (a.length < b.length) { return -1; }
        if (a.length > b.length) { return 1; }
        return 0;
      }),
    });
  };

  resetListOfGoods = () => {
    this.setState({
      arrayOfGoods: [...goodsFromServer],
      value: 1,
    });
  };

  itemsListLengthFunc = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        {
          this.state.isClicked ? (
            <ul>
              {
                this.state.arrayOfGoods
                  .filter(goodItem => goodItem.length >= this.state.value)
                  .map(goodItem => (
                    <li>{goodItem}</li>
                  ))
              }
              <button type="button" onClick={this.goodsReverse}>Reverse</button>
              <button
                type="button"
                onClick={this.sortAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.resetListOfGoods}
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
                onChange={this.itemsListLengthFunc}
                value={this.state.value ? this.state.value : 1}
              >
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
            </ul>
          ) : (
            <button type="button" onClick={this.handleLoadClick}>Load</button>
          )
        }
      </div>
    );
  }
}

export default App;
