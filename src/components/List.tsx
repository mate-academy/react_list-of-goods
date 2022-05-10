import React from 'react';

type Props = {
  goodsList: string[];
};

type State = {
  isReverse: boolean;
  sortBy: string;
  wordLength: number;
};

export class List extends React.Component<Props, State> {
  state = {
    isReverse: false,
    sortBy: '',
    wordLength: 1,
  };

  switchReverse = () => {
    this.setState((state) => ({
      isReverse: !state.isReverse,
    }));
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      sortBy: (state.sortBy === 'alphabet') ? '' : 'alphabet',
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      sortBy: (state.sortBy === 'length') ? '' : 'length',
    }));
  };

  handleChange = (value: number) => {
    this.setState({
      wordLength: value,
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
    const { isReverse, sortBy, wordLength } = this.state;
    const { goodsList } = this.props;
    const newGoodsList = goodsList.filter(word => word.length >= wordLength);

    switch (sortBy) {
      case 'alphabet':
        newGoodsList.sort((elem1, elem2) => elem1.localeCompare(elem2));
        break;
      case 'length':
        newGoodsList.sort((elem1, elem2) => elem1.length - elem2.length);
        break;
      default:
        break;
    }

    if (isReverse) {
      newGoodsList.reverse();
    }

    return (
      <div className="goods">
        <div className="goods__buttons">
          <button
            type="button"
            className={
              `goods__button ${isReverse && 'goods__button--active'}`
            }
            onClick={this.switchReverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className={
              `goods__button ${sortBy === 'alphabet' && 'goods__button--active'}`
            }
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              `goods__button ${sortBy === 'length' && 'goods__button--active'}`
            }
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <select
            className={
              `goods__button ${wordLength !== 1 && 'goods__button--active'}`
            }
            onChange={
              event => this.handleChange(Number(event.target.value))
            }
            value={wordLength}
          >
            <option value="1">{'Word length >= 1'}</option>
            <option value="2">{'Word length >= 2'}</option>
            <option value="3">{'Word length >= 3'}</option>
            <option value="4">{'Word length >= 4'}</option>
            <option value="5">{'Word length >= 5'}</option>
            <option value="6">{'Word length >= 6'}</option>
            <option value="7">{'Word length >= 7'}</option>
            <option value="8">{'Word length >= 8'}</option>
            <option value="9">{'Word length >= 9'}</option>
            <option value="10">{'Word length >= 10'}</option>
          </select>

          <button
            type="button"
            className="goods__button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <ul className="goods__list">
          {
            newGoodsList.map((item) => (
              <li key={item} className="goods__item">
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
