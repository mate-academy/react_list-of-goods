import React, { ChangeEvent } from 'react';
import './GoodsList.scss';

type Props = {
  goodList: string[];
};
type State = {
  goodList: string[];
  letterLength:number;
};

export class GoodsList extends React.Component<Props, State> {
  state:State = {
    goodList: [...this.props.goodList],
    letterLength: 1,
  };

  reverseList = () => {
    this.setState(
      state => ({
        goodList: [...state.goodList].reverse(),
      }),
    );
  };

  sortAlphabet = () => {
    this.setState(
      state => ({
        goodList: [...state.goodList].sort((a, b) => a.localeCompare(b)),
      }),
    );
  };

  resetSortParameters = () => {
    this.setState(
      {
        goodList: this.props.goodList,
        letterLength: 1,
      },
    );
  };

  sortByLength = () => {
    this.setState(
      state => ({
        goodList: [...state.goodList].sort((a, b) => a.length - b.length),
      }),
    );
  };

  handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState({
      letterLength: +value,
    });
  };

  render() {
    return (
      <div className="GoodsListContainer">
        <button
          type="button"
          className="ReverseButton button"
          onClick={this.reverseList}
        >
          Reverse
        </button>
        <button
          type="button"
          className="SortAlphabetButton button"
          onClick={this.sortAlphabet}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="SortAlphabetButton button"
          onClick={this.resetSortParameters}
        >
          Reset
        </button>
        <button
          type="button"
          className="SortAlphabetButton button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <select
          onChange={this.handleChange}
          value={this.state.letterLength}
          name="lettersLength"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <ul className="GoodsList">
          {
            this.state.goodList.map(good => {
              return (
                good.length >= this.state.letterLength
                && (
                  <li className="GoodsListItem" key={good}>
                    {good}
                  </li>
                )
              );
            })
          }
        </ul>
      </div>
    );
  }
}
