import React from 'react';
import ListOfGoods from './ListOfGoods';

const goodsFromServer = [
  'Dumplings(01)',
  'Carrot(02)',
  'Eggs(03)',
  'Ice cream(04)',
  'Apple(05)',
  'Bread(06)',
  'Fish(07)',
  'Honey(08)',
  'Jam(09)',
  'Garlic(10)',
];

class App extends React.Component {
  state = {
    goods: [],
    isLoaded: false,
    selectLength: 1,
  };

  handleClick = () => {
    this.setState({
      goods: [...goodsFromServer],
      isLoaded: true,
    })
  };

  reverse = () => {
    this.setState({
      goods: this.state.goods.reverse(),
    })
  };

  sortAlphabetically = () => {
    this.setState({
      goods: this.state.goods.sort(),
    })
  };

  resetGoods = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectLength: 1,
    })
  };

  sortByLength = () => {
    this.setState({
      goods: this.state.goods.sort((a, b) => a.length - b.length
      ),
    })
  };

  filterByLength = (event) => {
    const { value } = event.target;
    this.setState({
      selectLength: value,
      goods: [...goodsFromServer].filter(item => item.length >= value),
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Goods {this.state.goods.length}</h1>
            <ListOfGoods goods={this.state.goods} />
            <button onClick={this.reverse}>
              Reverse
            </button>
            <button onClick={this.sortAlphabetically}>
              Sort alphabetically
            </button>
            <button onClick={this.resetGoods}>
              Reset
            </button>
            <button onClick={this.sortByLength}>
              Sort by length
            </button>
            <select value={this.state.selectLength} onChange={this.filterByLength}>
            <option value="1">Length 1</option>
            <option value="2">Length 2</option>
            <option value="3">Length 3</option>
            <option value="4">Length 4</option>
            <option value="5">Length 5</option>
            <option value="6">Length 6</option>
            <option value="7">Length 7</option>
            <option value="8">Length 8</option>
            <option value="9">Length 9</option>
            <option value="10">Length 10</option>
            </select>
          </div>
        ) : (
            <div>
              <h1>Goods {this.state.goods.length}</h1>
              <button onClick={this.handleClick}>
                Start
              </button>
            </div>
          )}
      </div>
    );
  }
}

export default App;
