import React from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Goods from './components/Goods/Goods';

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
    state = {
      isStarted: false,
      selectedValue: '0',
      currentData: [...goodsFromServer],
      initialData: [...goodsFromServer],
    };

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
      selectedValue: '0',
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
            <Buttons
              letsReverse={letsReverse}
              letsSortAlphabetically={letsSortAlphabetically}
              letsReset={letsReset}
              letsSortByLength={letsSortByLength}
              dataOfgoodsLength={dataOfgoodsLength}
              letsSelectByLength={letsSelectByLength}
              selectedValue={selectedValue}
            />
            <Goods currentData={currentData} />
          </>
        )}
      </div>
    );
  }
}

export default App;
