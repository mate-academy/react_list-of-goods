import React from 'react';
import { nanoid } from 'nanoid';
import { Button } from './components/button/button';
import { Select } from './components/select/select';
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
    goodsData: [...goodsFromServer],
    id: 1,
    isVisible: false,
  };

  setGoodsVisible = () => {
    this.setState({
      isVisible: true,
    });
  }

  sortBy = () => {
    this.setState(state => ({
      goodsData: state.goodsData.sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      goodsData: [...goodsFromServer],
      id: 1,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsData: state.goodsData.sort((a, b) => a.length - b.length),
    }));
  }

  filterLength = () => {
    this.setState(state => ({
      goodsData: [...goodsFromServer].filter(a => a.length >= state.id),
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goodsData: state.goodsData.reverse(),
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
    const { reverse, sortBy, reset,
      sortByLength, onChange, setGoodsVisible } = this;
    const { goodsData, id, isVisible } = this.state;

    return (
      <div className="app">
        { isVisible
          ? (
            <>
              <h1>Goods</h1>
              <div className="list">
                { goodsData.map(good => <p key={nanoid()}>{ good }</p>) }
              </div>

              <div className="buttons">
                <Button onClick={reverse} text="Reverse" />
                <Button onClick={sortBy} text="Sort" />
                <Button onClick={reset} text="Reset" />
                <Button onClick={sortByLength} text="Sort by length" />
                <Select onChange={onChange} id={id} />
              </div>
            </>
          )
          : (
            <Button onClick={setGoodsVisible} text="Start" />
          )
        }
      </div>
    );
  }
}

export default App;
