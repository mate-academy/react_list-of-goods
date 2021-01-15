import React from 'react';
import './App.scss';
import { PageContent } from './components/PageContent';
import { ListButton } from './components/ListButton';

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

const preparedGoods = goodsFromServer.map((good, index) => ({
  title: good,
  index,
}));

class App extends React.Component {
  state = {
    showList: false,
    showStartButton: true,
    goods: preparedGoods,
    wordLength: 1,
  }

  startList = () => {
    this.setState({
      showList: true,
      showStartButton: false,
    });
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlph = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.title.localeCompare(b.title)),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: preparedGoods,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.title.length - b.title.length),
    }));
  }

  selectLength = (target) => {
    this.setState(state => ({
      goods: preparedGoods.filter(
        good => good.title.length >= target.value,
      ),
      wordLength: target.value,
    }));
  }

  render() {
    const { goods, showStartButton, showList, wordLength } = this.state;

    return (
      <div className="App">
        {showStartButton && (
          <ListButton
            onClickFunc={this.startList}
            title="start"
          />
        )}
        {showList
        && (
          <PageContent
            reverseList={this.reverseList}
            reset={this.reset}
            sortByAlph={this.sortByAlph}
            sortByLength={this.sortByLength}
            wordLength={wordLength}
            selectLength={this.selectLength}
            goods={goods}
          />
        )}
      </div>
    );
  }
}

export default App;
