import React from 'react';

import GoodsList from './component/GoodsLIst';
import Buttons from './component/Buttons';

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

const listBySelect = goodsFromServer
  .map(elem => elem.length)
  .sort((a, b) => a - b)
  .filter((elem, i, arr) => i === arr.indexOf(elem));

class App extends React.Component {
  state = {
    isListShown: false,
    copiedList: [...goodsFromServer],
    selectedValue: 0,
  }

  setSelectValue = ({ value }) => (
    this.setState({
      selectedValue: value,
      copiedList: [...goodsFromServer]
        .filter(elem => elem.length === Number(value)),
    })
  );

  handleStart = () => (
    this.setState(prevState => ({
      isListShown: !prevState.isListShown,
    }))
  )

  reverseList = () => (
    this.setState({
      copiedList: [...goodsFromServer].reverse(),
    })
  )

  sortByAlphabet = () => (
    this.setState({
      copiedList: [...goodsFromServer].sort(),
    })
  )

  resetList = () => (
    this.setState({
      copiedList: [...goodsFromServer],
    })
  )

  sortByLength = () => (
    this.setState({
      copiedList: [...goodsFromServer].sort((a, b) => a.length - b.length),
    })
  )

  render() {
    const { copiedList, selectedValue, isListShown } = this.state;
    const {
      setSelectValue,
      handleStart,
      reverseList,
      sortByAlphabet,
      resetList,
      sortByLength,
    } = this;

    return (
      <div className="App">

        <Buttons
          isListShown={isListShown}
          selectedValue={selectedValue}
          setSelectValue={setSelectValue}
          handleStart={handleStart}
          reverseList={reverseList}
          sortByAlphabet={sortByAlphabet}
          resetList={resetList}
          sortByLength={sortByLength}
          listBySelect={listBySelect}
        />

        { isListShown
          && (
            <GoodsList
              goods={copiedList}
            />
          )
        }
      </div>
    );
  }
}

export default App;
