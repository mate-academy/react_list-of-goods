import React from 'react';

import GoodsList from './component/GoodsLIst';

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

  setSelectValue = event => (
    this.setState({
      selectedValue: event.target.value,
      copiedList: [...goodsFromServer]
        .filter(elem => elem.length === Number(event.target.value)),
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

        { !isListShown
          && (
            <button
              className="button-start"
              type="button"
              onClick={handleStart}
            >
              Start
            </button>
          )
        }

        { isListShown
          && (
            <>
              <div className="buttons-goods">
                <button
                  className="button-goods"
                  type="button"
                  onClick={sortByLength}
                >
                  Sort by length
                </button>

                <button
                  className="button-goods"
                  type="button"
                  onClick={resetList}
                >
                  Reset
                </button>

                <button
                  className="button-goods"
                  type="button"
                  onClick={sortByAlphabet}
                >
                  Sort by alphabetic
                </button>

                <button
                  className="button-goods"
                  type="button"
                  onClick={reverseList}
                >
                  Reverse
                </button>
              </div>

              <div>
                <select
                  className="select-goods"
                  value={selectedValue}
                  name="goodsList"
                  onChange={setSelectValue}
                >
                  <option value={0}>0</option>
                  {listBySelect.map(elem => (
                    <option key={elem} value={elem}>{elem}</option>
                  ))}
                </select>
              </div>

              <GoodsList
                goods={copiedList}
              />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
