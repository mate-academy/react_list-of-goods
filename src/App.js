import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { ResetButton } from './components/ResetButton';
import { SelectLengthButton } from './components/SelectLengthButton';
import { SortingButtons } from './components/SortingButtons';
import { StartButton } from './components/StartButton';
import 'semantic-ui-css/semantic.min.css';

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

const preparedGoodsList = goodsFromServer.map((item, index) => ({
  name: item,
  id: index,
}));

class App extends React.Component {
  state = {
    goodsList: preparedGoodsList,
    listVisible: false,
    buttonVisible: true,
    listReversed: false,
    sortBy: 'default',
    lengthSortingLimit: 1,
  }

  showGoodsList = () => {
    this.setState(state => ({
      listVisible: !state.listVisible,
      buttonVisible: !state.buttonVisible,
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      listReversed: !state.listReversed,
    }));
  }

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  selectLengthSorting = (event) => {
    this.setState({
      lengthSortingLimit: event.target.value,
    });
  }

  resetSorting = () => {
    this.setState({
      sortBy: 'default',
      listReversed: false,
      lengthSortingLimit: 0,
    });
  }

  render() {
    const {
      goodsList,
      listVisible,
      buttonVisible,
      listReversed,
      sortBy,
      lengthSortingLimit,
    } = this.state;

    const visibleList = goodsList.filter(
      item => item.name.length >= lengthSortingLimit,
    );

    visibleList.sort((item1, item2) => {
      switch (sortBy) {
        case 'alphabet':
          return item1.name.localeCompare(item2.name);

        case 'length':
          return item1.name.length - item2.name.length;

        case 'default':
        default:
          return 0;
      }
    });

    if (listReversed) {
      visibleList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {buttonVisible && (<StartButton showGoodsList={this.showGoodsList} />)}

        <SortingButtons
          reverseList={this.reverseList}
          sortByAlphabet={this.sortByAlphabet}
          sortByLength={this.sortByLength}
        />

        <SelectLengthButton
          selectLengthSorting={this.selectLengthSorting}
          lengthSortingLimit={lengthSortingLimit}
        />

        <ResetButton resetSorting={this.resetSorting} />

        {listVisible && (<GoodsList visibleList={visibleList} />)}
      </div>
    );
  }
}

export default App;
