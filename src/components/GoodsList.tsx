import React from 'react';
import './GoodsList.scss';

type Props = {
  list: string[];
};

type State = {
  isReverse: boolean,
  sortBy: string,
  wordLength: number,
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReverse: false,
    sortBy: '',
    wordLength: 1,
  };

  listReverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      sortBy: state.sortBy === 'alph' ? '' : 'alph',
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      sortBy: state.sortBy === 'length' ? '' : 'length',
    }));
  };

  lengthChange = (len: number) => {
    this.setState({
      wordLength: len,
    });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
      wordLength: 1,
    });
  };

  render() {
    const { list } = this.props;
    const { isReverse, sortBy, wordLength } = this.state;
    const newList = list.filter(el => el.length >= wordLength);

    if (isReverse) {
      newList.reverse();
    }

    switch (sortBy) {
      case 'alph':
        newList.sort((e1, e2) => e1.localeCompare(e2));
        break;
      case 'length':
        newList.sort((e1, e2) => e1.length - e2.length);
        break;
      default:
        break;
    }

    return (
      <div className="goodsList">
        <div className="goodsList__buttons">
          <button
            className="goodsList__button"
            type="button"
            onClick={this.listReverse}
          >
            Reverse
          </button>
          <select
            value={wordLength}
            className="goodsList__button"
            onChange={event => this.lengthChange(+event.target.value)}
          >
            <option value="1" className="goodsList__option">
              1 character
            </option>
            <option value="2" className="goodsList__option">
              2 characters
            </option>
            <option value="3" className="goodsList__option">
              3 characters
            </option>
            <option value="4" className="goodsList__option">
              4 characters
            </option>
            <option value="5" className="goodsList__option">
              5 characters
            </option>
            <option value="6" className="goodsList__option">
              6 characters
            </option>
            <option value="7" className="goodsList__option">
              7 characters
            </option>
            <option value="8" className="goodsList__option">
              8 characters
            </option>
            <option value="9" className="goodsList__option">
              9 characters
            </option>
            <option value="10" className="goodsList__option">
              10 characters
            </option>
          </select>
          <button
            className="goodsList__button"
            type="button"
            onClick={this.sortByAlphabet}
          >
            Sort by alphabet
          </button>
          <button
            className="goodsList__button"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            className="goodsList__button"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <ul className="goodsList__list">
          {
            newList.map(elem => (
              <li key={elem} className="goodsList__item">{elem}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
