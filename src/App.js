import React from 'react';

import { ButtonStart } from './components/ButtonStart';
import { GoodList } from './components/GoodList';
import { ResetButton } from './components/ResetButton';
import { ReverseButton } from './components/ReverseButton';
import { SortAlphabeticallyButton }
  from './components/SortAlphabeticallyButton';
import { SortByLengthButton } from './components/SortByLengthButton';
import { LengthSelect } from './components/LengthSelect/LengthSelect';

import './App.css';

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

const prepearedGoods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

class App extends React.Component {
  state = {
    isListVisible: false,
    goods: prepearedGoods,
    selectedValue: {
      value: 1,
      label: 1,
    },
  }

  start = () => {
    this.setState({ isListVisible: true });
  }

  sortGoodsAlphabetically = () => {
    this.setState(prevState => (
      {
        goods: [...prevState.goods].sort((prevGood, curGood) => (
          prevGood.name.localeCompare(curGood.name)
        )),
      }
    ));
  }

  reverseGoods = () => {
    this.setState(prevState => ({ goods: [...prevState.goods].reverse() }));
  }

  reset = () => {
    this.setState({
      goods: prepearedGoods,
      selectedValue: {
        value: 1,
        label: 1,
      },
    });
  }

  setTargetLength = (selectedOption) => {
    const targetLength = selectedOption.value;

    this.setState({
      goods: prepearedGoods.filter(good => good.name.length >= targetLength),
      selectedValue: selectedOption,
    });
  }

  sortGoodsByLength = () => {
    this.setState(prevState => (
      {
        goods: [...prevState.goods].sort((prevGood, curGood) => (
          prevGood.name.length - curGood.name.length
        )),
      }
    ));
  };

  render() {
    const { isListVisible, goods, selectedValue } = this.state;

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
          value={selectedValue}
        />
      </div>
    );
  }
}

export default App;
