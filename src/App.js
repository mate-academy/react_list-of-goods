import React from 'react';
import './App.css';
import Goods from './components/Goods/Goods';

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
const goodsArr = [...goodsFromServer];

class App extends React.Component {
  state = {
    hidden: false,
    goods: goodsFromServer,
    optionState: 1,
  };

  startClick = () => {
    this.setState({
      hidden: true,
    });
  };

  reverseClick = () => {
    this.setState({
      goods: this.state.goods.reverse(),
    });
  };

  alphabetSort = () => {
    this.setState({
      goods: this.state.goods.sort(),
    });
  };

  lengthSort = () => {
    this.setState({
      goods: this.state.goods.sort(
        (a, b) => b.replace(/ /gi, '').length - a.replace(/ /gi, '').length
      ),
    });
  };

  resetClick = () => {
    this.setState({
      goods: [...goodsArr],
    });
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      goods: [...goodsArr].filter(el => el.length >= value),
    });
  };

  render() {
    return (
      <div className="App">
        <button
          type="button"
          onClick={this.startClick}
          className={this.state.hidden ? 'hiddenButton' : 'positive ui button'}
        >
          Press to START!
        </button>
        {this.state.hidden && (
          <Goods
            goods={this.state.goods}
            reverseClick={this.reverseClick}
            alphabetSort={this.alphabetSort}
            lengthSort={this.lengthSort}
            resetClick={this.resetClick}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}
export default App;
