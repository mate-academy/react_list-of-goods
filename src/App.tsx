import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';
import { SortType } from './types/SortType';

const goodsFromServer: string[] = [
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

const options = Array(10).fill(0).map((_, i) => i + 1);

type StateType = {
  isVisible: boolean,
  isReverse: boolean,
  SortBy: SortType,
  lengthMin: number
};

export class App extends React.Component<{}, StateType> {
  state = {
    isVisible: false,
    isReverse: false,
    SortBy: SortType.Nothing,
    lengthMin: 1,
  };

  StartList = () => (
    this.setState({ isVisible: true })
  );

  ReverseList = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  SortByAlfabet = () => {
    this.setState({
      SortBy: SortType.Alfabet,
      isReverse: false,
    });
  };

  SortByLen = () => {
    this.setState({
      SortBy: SortType.Length,
      isReverse: false,
    });
  };

  ResetAll = () => {
    this.setState({
      isReverse: false,
      SortBy: SortType.Nothing,
    });
  };

  minLengthOfGood = (value: number) => {
    this.setState({
      lengthMin: value,
    });
  };

  render() {
    const { isVisible, SortBy } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isVisible && (
          <>
            <GoodsList
              goodsFromServer={goodsFromServer}
              isReverse={this.state.isReverse}
              SortBy={SortBy}
              lengthMin={this.state.lengthMin}
            />
            <button
              type="button"
              onClick={this.ReverseList}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.SortByAlfabet}
            >
              SortByAlfabet
            </button>

            <button
              type="button"
              onClick={this.SortByLen}
            >
              SortByLen
            </button>

            <button
              type="button"
              onClick={this.ResetAll}
            >
              Reset
            </button>
            <br />
            <select
              name="select"
              id="nums"
              onChange={
                ({ currentTarget }) => {
                  this.minLengthOfGood(Number(currentTarget.value));
                }
              }
            >
              {options.map(option => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </>
        )}
        {!isVisible && (
          <button
            type="button"
            onClick={this.StartList}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
