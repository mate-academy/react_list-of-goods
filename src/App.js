import React from 'react';
import './App.css';
import GoodsList from './component/goodslist';

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
    IsStart: false,
    goods: [],
    goodsLength: 1,
  }

  click = () => {
    this.setState({
      IsStart: true,
      goods: [...goodsFromServer],
    });
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  sort = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      goodsLength: 1,
    });
  }

  lengthSort = () => {
    this.setState(prevState => ({
      goods: [...goodsFromServer].sort((x, y) => (x.length - y.length)),
    }));
  }

  selectFunc = (event) => {
    this.setState({
      goodsLength: event.target.value,
      goods: [...goodsFromServer].filter(
        good => good.length >= event.target.value,
      ),
    });
  };

  render() {
    return (
      <main>
        {this.state.IsStart ? (
          <div className="GoodsList">
            <button className="reverseButton" onClick={this.reverse}>
              Reverce
            </button>
            <button className="sort" onClick={this.sort}>
              Sort alphabetically
            </button>
            <button className="reset" onClick={this.reset}>
              reset list
            </button>
            <button className="lengthSort" onClick={this.lengthSort}>
              Sort by length
            </button>
            <select
              onChange={this.selectFunc}
              value={this.state.goodsLength}
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
            <h1>GoodsList</h1>
            <GoodsList goods={this.state.goods} />
          </div>
        ) : (
          <button className="startButton" onClick={this.click}>
            START
          </button>
        )}
      </main>
    );
  }
}

export default App;
