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

class App extends React.Component {
  state = {
    copyGoods: [...goodsFromServer],
    isHiddenToggle: false,
    alphabetically: true,
    length: true,
    selectValue: 1,
    selects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  isHidden = () => (
    this.setState(prevState => (
      {
        isHiddenToggle: !prevState.isHiddenToggle,
      }
    ))
  );

  reverse = () => (
    this.setState(prevState => (
      {
        copyGoods: [...prevState.copyGoods].reverse(),
      }
    ))
  );

  sortAlphabetically = () => {
    this.setState(prevState => (
      {
        copyGoods: prevState.alphabetically
          ? [...prevState.copyGoods].sort((a, b) => a.localeCompare(b))
          : [...prevState.copyGoods].sort((a, b) => b.localeCompare(a)),
      }
    ));
    this.setState(prevState => (
      {
        alphabetically: !prevState.alphabetically,
      }
    ));
  };

  reset = () => (
    this.setState(
      {
        copyGoods: [...goodsFromServer],
        selectValue: 1,
      },
    )
  );

  sortLength = () => {
    this.setState(prevState => (
      {
        copyGoods: prevState.length
          ? [...prevState.copyGoods].sort((a, b) => a.length - b.length)
          : [...prevState.copyGoods].sort((a, b) => b.length - a.length),
      }
    ));
    this.setState(prevState => (
      {
        length: !prevState.length,
      }
    ));
  };

  selectLength =(event) => {
    this.setState({
      selectValue: event.target.value,
    });
    this.setState(prevState => ({
      copyGoods:
        [...goodsFromServer].filter(el => el.length >= prevState.selectValue),
    }));
  };

  render() {
    const {
      copyGoods,
      isHiddenToggle,
      selectValue,
      selects,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {copyGoods.length}
        {isHiddenToggle && copyGoods.map(good => (
          <div key={good}>
            {good}
          </div>
        ))}
        <button type="button" onClick={this.isHidden}>
          {isHiddenToggle ? 'Hidden' : 'Show'}
        </button>
        <button type="button" onClick={this.reverse}>
          Reverse
        </button>
        <button type="button" onClick={this.sortAlphabetically}>
          Alphabetically
        </button>
        <button type="button" onClick={this.reset}>
          Reset
        </button>
        <button type="button" onClick={this.sortLength}>
          Length
        </button>
        <select value={selectValue} onChange={this.selectLength}>
          {selects.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default App;
