import React from 'react';
import { Button } from './components/button/button';
import { Select } from './components/select/select';
import './App.css';

// import { array } from 'prop-types';

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
    myArr: [...goodsFromServer],
    id: 1,
  };

  sortBy = () => {
    this.setState(state => ({
      myArr: state.myArr.sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      myArr: [...goodsFromServer],
      id: 1,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      myArr: state.myArr.sort((a, b) => a.length - b.length),
    }));
  }

  filterLength = () => {
    this.setState(state => ({
      myArr: [...goodsFromServer].filter(a => a.length >= state.id),
    }));
  }

  reverse = () => {
    this.setState(state => ({
      myArr: state.myArr.reverse(),
    }));
  }

  onChange = (event) => {
    const { value } = event.target;

    this.setState({
      id: value,
    });

    this.filterLength();
  }

  render() {
    const { reverse, sortBy, reset, sortByLength, onChange } = this;
    const { myArr, id } = this.state;

    return (
      <div className="app">
        <h1>Goods</h1>
        <div className="list">
          { myArr.map(good => <p key={good}>{ good }</p>) }
        </div>

        <div className="buttons">
          <Button onClick={reverse} text="Reverse" />
          <Button onClick={sortBy} text="Sort" />
          <Button onClick={reset} text="Reset" />
          <Button onClick={sortByLength} text="Sort by length" />
          <Select onChange={onChange} id={id} />
        </div>

      </div>
    );
  }
}

export default App;
