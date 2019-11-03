import React from 'react';
import GoodsList from './components/goodsList/GoodsList';

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
    originalGoods: [...goodsFromServer],
    goods: [...goodsFromServer],
    startPoint: true,
    selectedValue: 1,
  };

  start = () => {
    this.setState({
      startPoint: false,
    });
  };

  doReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortaAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  };

  doReset = () => {
    this.setState(prevState => ({
      goods: [...prevState.originalGoods],
      selectedValue: 1,
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  doSelect = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      selectedValue: value,
      goods: [...prevState.originalGoods]
        .filter(item => item.length >= value),
    }));
  };

  render() {
    return (
      <div>
        {this.state.startPoint
          ? (<button onClick={this.start}>Start</button>)
          : (
            <GoodsList
              goods={this.state.goods}
              doReverse={this.doReverse}
              sortaAlphabetically={this.sortaAlphabetically}
              doReset={this.doReset}
              sortByLength={this.sortByLength}
              doSelect={this.doSelect}
              selectedValue={this.state.selectedValue}
            />
          )
        }
      </div>
    );
  }
}

export default App;
