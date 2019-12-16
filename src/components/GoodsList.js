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

class GoodsList extends React.Component {
  state = {
    listGoods: [],
    isLoaded: false,
  };

  handleClick = () => {
    this.setState({
      listGoods: [...goodsFromServer],
      isLoaded: true,
    });
  };

  getReverse = () => {
    this.setState({
      listGoods: [...goodsFromServer].reverse(),
    });
  };

  getSort = () => {
    this.setState({
      listGoods: [...goodsFromServer].sort(
        (a, b) => a.localeCompare(b)
      ),
    });
  };

  getReset = () => {
    this.setState({
      listGoods: [...goodsFromServer],
    });
  };

  getSortByLength = () => {
    this.setState({
      listGoods: [...goodsFromServer].sort(
        (a, b) => a.length - b.length
      ),
    });
  };

  setGoodsLength = (event) => {
    this.setState({
      listGoods: [...goodsFromServer].filter(
        good => good.length >= event.target.value
      ),
    });
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.isLoaded ? (
          <div>
            <h1>Goods</h1>
            <div>
              <select onChange={this.setGoodsLength}>
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
              <button onClick={this.getReset} type="button">
                reset set value
              </button>
            </div>
            <ul>
              {this.state.listGoods.map(item => (
                <li key="item">{item}</li>
              ))}
            </ul>
            <div>
              <button onClick={this.getReverse} type="button">
                reverse
              </button>
              <button onClick={this.getSort} type="button">
                sort alphabetically
              </button>
              <button onClick={this.getSortByLength} type="button">
                sort by length
              </button>
              <button onClick={this.getReset} type="button">
                reset
              </button>
            </div>

          </div>
        ) : (
          <button
            onClick={this.handleClick}
            type="button"
            className="start-bth"
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default GoodsList;
