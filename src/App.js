import React from 'react';

import { ButtonStart } from './components/ButtonStart';
import { GoodList } from './components/GoodList';
import { ResetButton } from './components/ResetButton';
import { ReverseButton } from './components/ReverseButton';
import { SortAlphabeticallyButton }
  from './components/SortAlphabeticallyButton';
import { SortByLengthButton } from './components/SortByLengthButton';

import './App.css';
import { LengthSelect } from './components/LengthSelect/LengthSelect';

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

// const prepearedGoods = goodsFromServer.map((good, index) => (
//   {
//     name: good,
//     id: index,
//   }
// ));

class App extends React.Component {
  state = {
    isListVisible: false,
    goods: goodsFromServer,
    selectValue: 1,
  }

  start = () => {
    this.setState({ isListVisible: true });
  }

  sortGoodsAlphabetically = () => {
    this.setState(prevState => (
      {
        goods: [...prevState.goods].sort(),
      }
    ));
  }

  reverseGoods = () => {
    this.setState(prevState => ({ goods: [...prevState.goods].reverse() }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      selectValue: 1,
    });
  }

  setTargetLength = (event) => {
    const targetLength = Number(event.target.value);

    this.setState({
      goods: goodsFromServer.filter(good => good.length >= targetLength),
      selectValue: targetLength,
    });
  }

  sortGoodsByLength = () => {
    this.setState(prevState => (
      {
        goods: [...prevState.goods].sort((prevGood, curGood) => (
          prevGood.length - curGood.length
        )),
      }
    ));
  };

  render() {
    const { isListVisible, goods, selectValue } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {
          isListVisible
            ? <GoodList goods={goods} />
            : <ButtonStart handleClick={this.start} />
        }

        <ReverseButton
          handleClick={this.reverseGoods}
        />

        <SortAlphabeticallyButton
          handleClick={this.sortGoodsAlphabetically}
        />

        <ResetButton
          handleClick={this.reset}
        />

        <SortByLengthButton
          handleClick={this.sortGoodsByLength}
        />

        <LengthSelect
          handleChange={this.setTargetLength}
          value={selectValue}
        />
      </div>
    );
  }
}

export default App;
