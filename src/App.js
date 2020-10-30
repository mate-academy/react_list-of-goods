import React, { Component } from 'react';
import GoodsList from './components/GoodsList';

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

        <button
          type="button"
          className="positive ui button"
          onClick={this.Start}
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>

        <button
          type="button"
          disabled={isVisible ? '' : 'disabled'}
          className="ui secondary button"
          onClick={isSorted ? this.Reverse : this.Sort}
        >
          {isSorted ? 'Sort DESC' : 'Sort ASC'}
        </button>

        <button
          type="button"
          disabled={isVisible ? '' : 'disabled'}
          className="ui secondary button"
          onClick={this.Reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          disabled={isVisible ? '' : 'disabled'}
          className="ui secondary button"
          onClick={this.Reset}
        >
          Reset
        </button>

        <button
          type="button"
          disabled={isVisible ? '' : 'disabled'}
          className="ui secondary button"
          onClick={isSorted ? this.Reverse : this.SortbyLength}
        >
          { isSorted ? 'Sort by Length DESC' : 'Sort by Length ASC' }
        </button>

        { isVisible ? <ul><GoodsList goods={goods} /></ul> : '' }
      </div>
    );
  }
}

export default App;
