import React from 'react';
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
const goodsLength = new Set();

goodsFromServer.forEach(good => (
  goodsLength.add(good.length)
));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      selectedValue: 0,
      currentData: [...goodsFromServer],
      initialData: [...goodsFromServer],
    };
  }

  dataOfgoodsLength = (Array.from(goodsLength)).sort()

  letsStart = () => {
    this.setState({
      isStarted: true,
    });
  }

  letsReverse = () => {
    this.setState(prevState => ({
      currentData: prevState.currentData.reverse(),
    }));
  }

  letsSortAlphabetically = () => {
    this.setState(prevState => ({
      currentData: prevState.currentData.sort(),
    }));
  }

  letsReset = () => {
    this.setState(prevState => ({
      currentData: [...prevState.initialData],
      selectedValue: 0,
    }));
  }

  letsSortByLength = () => {
    this.setState(prevState => ({
      currentData: prevState.currentData.sort((a, b) => (
        a.length - b.length
      )),
    }));
  }

  letsSelectByLength = ({ target: { value } }) => {
    this.setState(prevState => ({
      currentData: [...prevState.initialData].filter(good => (
        good.length >= value
      )),
      selectedValue: value,
    }));
  }

  render() {
    const { isStarted, currentData, selectedValue } = this.state;
    const {
      letsStart,
      letsReverse,
      letsSortAlphabetically,
      letsReset,
      letsSortByLength,
      dataOfgoodsLength,
      letsSelectByLength,
    } = this;

    return (
      <div className="app">
        <h1>
          Total goods:
          {` ${currentData.length}`}
        </h1>
        {isStarted || (
          <button onClick={letsStart} type="button">Start</button>
        )}
        {isStarted && (
          <>
            <ul className="buttons-list">
              <li className="buttons-list__item">
                <button onClick={letsReverse} type="button">Reverse</button>
              </li>
              <li className="buttons-list__item">
                <button
                  onClick={letsSortAlphabetically}
                  type="button"
                >
                  Sort alphabetically
                </button>
              </li>
              <li className="buttons-list__item">
                <button onClick={letsReset} type="button">Reset</button>
              </li>
              <li className="buttons-list__item">
                <button
                  onClick={letsSortByLength}
                  type="button"
                >
                  Sort by length
                </button>
              </li>
              <li className="buttons-list__item">
                <label>
                  Filter goods by length:
                  <select onChange={letsSelectByLength} value={selectedValue}>
                    <option value="0">No filtering</option>
                    {dataOfgoodsLength.map(goodLength => (
                      <option key={goodLength} value={goodLength}>{goodLength}</option>
                    ))}
                  </select>
                </label>
              </li>
            </ul>
            <ul className="goods-list">
              {currentData.map(good => (
                <li key={good} className="goods-list__item">{good}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
