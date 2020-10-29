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
  goodsList = preparedGoodsList;

  state = {
    visibleList: [...preparedGoodsList],
    visible: true,
    lengthSortingLimit: 1,
  }

  showGoodsList = () => {
    this.setState(state => ({
      listVisible: !state.listVisible,
      visible: !state.visible,
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      visibleList: state.visibleList.reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      visibleList: state.visibleList.sort((item1, item2) => (
        item1.name.localeCompare(item2.name))),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      visibleList: state.visibleList.sort((item1, item2) => (
        item1.name.length - item2.name.length)),
    }));
  }

  selectLengthSorting = (event) => {
    const { value } = event.target;

    this.setState({
      lengthSortingLimit: value,
      visibleList: [...preparedGoodsList].filter(
        item => item.name.length >= value,
      ),
    });
  }

  resetSorting = () => {
    this.setState({
      visibleList: [...preparedGoodsList],
    });
  }

  render() {
    const {
      visible,
      visibleList,
      lengthSortingLimit,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {visible && (<StartButton showGoodsList={this.showGoodsList} />)}

        {!visible && (
          <>
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

            <GoodsList visibleList={visibleList} />
          </>
        )}
      </div>
    );
  }
}

export default App;
