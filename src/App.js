import React, { Component } from 'react';
import GoodsList from './components/GoodsList';
import ReverseButton from './components/ReverseButton';
import SortButton from './components/SortButton';
import StartButton from './components/StartButton';
import ResetButton from './components/ResetButton';
import SortByLengthButton from './components/SortByLengthButton';

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

const preperedGoods = goodsFromServer.map((good, index) => ({
  id: index,
  name: good,
}));

class App extends Component {
  state = {
    goods: [...preperedGoods],
    isVisible: false,
    isSorted: false,
  }

  Start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  Reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
      isSorted: false,
    }));
  }

  Sort = () => {
    this.setState(state => ({
      // eslint-disable-next-line
      goods: state.goods.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
      isSorted: true,
    }));
  }

  Reset = () => {
    this.setState(state => ({
      goods: [...preperedGoods],
    }));
  }

  SortbyLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.name.length - b.name.length),
      isSorted: true,
    }));
  }

  render() {
    const { goods, isVisible, isSorted } = this.state;

    return (
      <div className="goods">

        <StartButton
          start={this.Start}
          isVisible={isVisible}
        />

        <SortButton
          isVisible={isVisible}
          isSorted={isSorted}
          reverse={this.Reverse}
          sort={this.Sort}
        />

        <ReverseButton
          isVisible={isVisible}
          reverse={this.Reverse}
        />

        <ResetButton
          isVisible={isVisible}
          reset={this.Reset}
        />

        <SortByLengthButton
          isVisible={isVisible}
          isSorted={isSorted}
          reverse={this.Reverse}
          sortbyLength={this.SortbyLength}
        />

        { isVisible ? <ul><GoodsList goods={goods} /></ul> : '' }
      </div>
    );
  }
}

export default App;
