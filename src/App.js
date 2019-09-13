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
    showList: false,
    copyList: [...goodsFromServer],
    selectValue: 0,
  }

  getSelectValue = event => (
    this.setState({
      selectValue: event.target.value,
      copyList: [...goodsFromServer]
        .filter(elem => elem.length === Number(event.target.value)),
    })
  );

  toShowList = () => (
    this.setState(prevState => ({
      showList: !prevState.showList,
    }))
  )

  toReverseList = () => (
    this.setState(prevState => ({
      copyList: prevState.copyList.reverse(),
    }))
  )

  toSortByAlphabeticList = () => (
    this.setState(prevState => ({
      copyList: prevState.copyList.sort(),
    }))
  )

  toResetList = () => (
    this.setState({
      copyList: [...goodsFromServer],
    })
  )

  toSortByLengthList = () => (
    this.setState(prevState => ({
      copyList: prevState.copyList.sort((a, b) => a.length - b.length),
    }))
  )

  render() {
    const { copyList, selectValue } = this.state;
    const {
      getSelectValue,
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
            { this.state.showList === false
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

        { this.state.showList !== false
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
                  value={selectValue}
                  name="goodsList"
                  onChange={getSelectValue}
                >
                  <option value={0}>0</option>
                  {goodsFromServer.map((elem, index) => (
                    <option key={elem} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>

              <GoodsList
                goods={copyList}
              />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
