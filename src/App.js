import React from 'react';

import goods from './api/goods';
import './style.css';

const getReverse = arr => [...arr].reverse();

const getSortAlphabet = arr => [...arr].sort();

const getSortByLength = arr =>
  [...arr].sort((a, b) => b.length - a.length);

class App extends React.Component {
  state = {
    goods: [],
    visibleGoods: [],
    productLength: 1,
    isLoaded: false,
    isLoading: false,
  };

  handleClick = () => {
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        goods: [...goods],
        visibleGoods: [...goods],
        isLoaded: true,
      });
    }, 2000);
  };

  reverseClick = () => {
    this.setState(prevState => ({
      visibleGoods: getReverse(prevState.visibleGoods),
    }));
  };

  alphabeticallClick = () => {
    this.setState(prevState => ({
      visibleGoods: getSortAlphabet(prevState.visibleGoods),
    }));
  };

  lengthClick = () => {
    this.setState(prevState => ({
      visibleGoods: getSortByLength(prevState.visibleGoods),
    }));
  };

  resetClick = () => {
    this.setState(prevState => ({
      visibleGoods: prevState.goods,
      productLength: 1,
    }));
  };

  selectChange = (event) => {
    this.setState({
      productLength: event.target.value,
      visibleGoods: goods.filter(
        prod => prod.length >= Number(event.target.value)
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.isLoaded ? (
          <>
            <div className="btn-block">
              <button onClick={this.resetClick} type="button">
                Reset
              </button>
              <button onClick={this.reverseClick} type="button">
                Reverse
              </button>
              <button onClick={this.alphabeticallClick} type="button">
                Alphabetically
              </button>
              <button onClick={this.lengthClick} type="button">
                Length
              </button>
              <select
                onChange={this.selectChange}
                value={this.state.productLength}
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
            </div>
            <ul className="list">
              {this.state.visibleGoods.map(item => (
                <li>
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <button
            className="start-btn"
            type="button"
            onClick={this.handleClick}
          >
            {this.state.isLoading ? 'Loading...' : 'Load'}
          </button>
        )}
      </div>
    );
  }
}

export default App;
