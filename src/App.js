import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    isStartButtonClicked: false,
    goods: [...goodsFromServer],
    selectedValue: 1,
  }

  handleClickStart = () => {
    this.setState({
      isStartButtonClicked: true,
    });
  }

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleClickSortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  handleClickSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  handleClickReset = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectedValue: 1,
    });
  }

  handleChangeSelect = ({ target }) => {
    const { value } = target;

    this.setState({
      selectedValue: value,
      goods: [...goodsFromServer]
        .filter(good => good.length >= value),
    });
  }

  render() {
    const { isStartButtonClicked, goods, selectedValue } = this.state;

    return (
      <div className="container is-fluid">
        <h1 className="title">List of goods</h1>
        {isStartButtonClicked
          ? (
            <GoodsList
              goods={goods}
              handleClickReverse={this.handleClickReverse}
              handleClickSortByAlphabet={this.handleClickSortByAlphabet}
              handleClickSortByLength={this.handleClickSortByLength}
              handleClickReset={this.handleClickReset}
              handleChangeSelect={this.handleChangeSelect}
              selectedValue={selectedValue}
            />
          )
          : (
            <button
              type="button"
              className="button is-link"
              onClick={this.handleClickStart}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
