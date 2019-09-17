import React from 'react';

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
      goods: [],
      isStarted: false,
      selectedValue: 0,
    };

  showGoods = () => {
    this.setState({
      goods: [...goodsFromServer],
      isStarted: true,
    });
  }

  resetScreen = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectedValue: 0,
    });
  }

  reversGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabet = () => {
    this.setState({
      goods: [...goodsFromServer].sort(),
    });
  }

  sortLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => a.length - b.length),
    }));
  }

  handleChangeSelect = (event) => {
    this.setState({
      selectedValue: event.target.value,
      goods: [...goodsFromServer]
        .filter(elem => elem.length >= Number(event.target.value) + 1),
    });
  }

  render() {
    const {
      showGoods,
      reversGoods,
      resetScreen,
      sortAlphabet,
      sortLength,
      handleChangeSelect,
    } = this;
    const {
      isStarted,
      selectedValue,
      goods,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods </h1>
        {isStarted && (
          <>
            <button type="button" onClick={reversGoods}>Reverse</button>
            <button type="button" onClick={sortAlphabet}>
              Sort alphabetically
            </button>
            <button type="button" onClick={sortLength}>Sort by length</button>
            <select
              value={selectedValue}
              onChange={handleChangeSelect}
            >
              {goodsFromServer.map((item, index) => (
                <option value={index}>{index + 1}</option>))}
            </select>
            <button type="button" onClick={resetScreen}>Reset</button>
            <ol>
              {goods.map(item => <li>{item}</li>)}
            </ol>
          </>
        )}
        {!isStarted && (
          <button type="button" onClick={showGoods}>START</button>
        )}
      </div>

    );
  }
}
export default App;
