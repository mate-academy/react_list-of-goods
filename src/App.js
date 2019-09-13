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

  toReverseList = () => (
    this.setState(prevState => ({
      copiedList: prevState.copiedList.reverse(),
    }))
  )

  toSortByAlphabeticList = () => (
    this.setState(prevState => ({
      copiedList: prevState.copiedList.sort(),
    }))
  )

  toResetList = () => (
    this.setState({
      copiedList: [...goodsFromServer],
    })
  )

  toSortByLengthList = () => (
    this.setState(prevState => ({
      copiedList: prevState.copiedList.sort((a, b) => a.length - b.length),
    }))
  )

  render() {
    const { copiedList, selectedValue, isListShown } = this.state;
    const {
      setSelectValue,
      toShowList,
      toReverseList,
      toSortByAlphabeticList,
      toResetList,
      toSortByLengthList,
    } = this;

    return (
      <div className="App">

        <Start>
          <>
            { isListShown === false
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
          </>
        </Start>

        { isListShown !== false
          && (
            <>
              <div className="buttons-goods">
                <SortByLength>
                  <button
                    className="button-goods"
                    type="button"
                    onClick={toSortByLengthList}
                  >
                    Sort by length
                  </button>
                </SortByLength>

                <Reset>
                  <button
                    className="button-goods"
                    type="button"
                    onClick={toResetList}
                  >
                    Reset
                  </button>
                </Reset>

                <SortAlphabetic>
                  <button
                    className="button-goods"
                    type="button"
                    onClick={toSortByAlphabeticList}
                  >
                    Sort by alphabetic
                  </button>
                </SortAlphabetic>

                <Reverse>
                  <button
                    className="button-goods"
                    type="button"
                    onClick={toReverseList}
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
                  {goodsFromServer.map((elem, index) => (
                    <option key={elem} value={index + 1}>{index + 1}</option>
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
