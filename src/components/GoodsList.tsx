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
    this.setState({
      sortBy: 'alph',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
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
    const newGoodsList = list.filter(el => el.length >= wordLength);

    if (isReverse) {
      newGoodsList.reverse();
    }

    switch (sortBy) {
      case 'alph':
        newGoodsList.sort((e1, e2) => e1.localeCompare(e2));
        break;
      case 'length':
        newGoodsList.sort((e1, e2) => e1.length - e2.length);
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
            {
              (new Array(10))
                .fill(null)
                .map((_, index) => (
                  <option
                    value={index + 1}
                  >
                    {`${index + 1}+ letters`}
                  </option>
                ))
            }
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
            newGoodsList.map(elem => (
              <li key={elem} className="goodsList__item">{elem}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
