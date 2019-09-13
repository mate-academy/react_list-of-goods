import React from 'react';

import Start from './component/Start';
import Reverse from './component/Reverse';
import SortAlphabetic from './component/SortAlphabetic';
import Reset from './component/Reset';
import SortByLength from './component/SortByLength';

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

  toShowList = () => (
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
      toShowList,
      reverseList,
      sortByAlphabet,
      resetList,
      sortByLength,
    } = this;

    return (
      <div className="App">
        <Start>
          { !isListShown
            && (
              <button
                className="button-start"
                type="button"
                onClick={toShowList}
              >
                Start
              </button>
            )
          }
        </Start>

        { isListShown
          && (
            <>
              <div className="buttons-goods">
                <SortByLength>
                  <button
                    className="button-goods"
                    type="button"
                    onClick={sortByLength}
                  >
                    Sort by length
                  </button>
                </SortByLength>

                <Reset>
                  <button
                    className="button-goods"
                    type="button"
                    onClick={resetList}
                  >
                    Reset
                  </button>
                </Reset>

                <SortAlphabetic>
                  <button
                    className="button-goods"
                    type="button"
                    onClick={sortByAlphabet}
                  >
                    Sort by alphabetic
                  </button>
                </SortAlphabetic>

                <Reverse>
                  <button
                    className="button-goods"
                    type="button"
                    onClick={reverseList}
                  >
                    Reverse
                  </button>
                </Reverse>
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
