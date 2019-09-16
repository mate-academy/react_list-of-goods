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

class App extends React.Component {
  state = {
    hidden: false,
    goods: goodsFromServer,
    optionState: 1,
    originGoods: [...goodsFromServer],
  };

  startClick = () => {
    this.setState({
      hidden: true,
    });
  };

  reverseClick = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  };

  alphabetSort = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(),
    }));
  };

  lengthSort = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(
        (a, b) => b.replace(/ /gi, '').length - a.replace(/ /gi, '').length
      ),
    }));
  };

  resetClick = () => {
    this.setState(prevState => ({
      optionState: 1,
      goods: [...prevState.originGoods],
    }));
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState(prevState => ({
      optionState: value,
      goods: [...prevState.originGoods].filter(good => good.length >= value),
    }));
  };

  render() {
    const { goods, optionState, hidden } = this.state;
    const {
      reverseClick, alphabetSort, lengthSort, resetClick, handleChange, startClick,
    } = this;
    return (
      <div className="app">
        <button
          type="button"
          onClick={startClick}
          className={hidden ? 'hidden-button' : 'positive ui button'}
        >
          Press to START!
        </button>
        {hidden && (
          <Goods
            goods={goods}
            optionState={optionState}
            reverseClick={reverseClick}
            alphabetSort={alphabetSort}
            lengthSort={lengthSort}
            resetClick={resetClick}
            handleChange={handleChange}
          />
        )}
      </div>
    );
  }
}
export default App;
