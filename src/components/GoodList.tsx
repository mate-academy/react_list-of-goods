/* eslint-disable no-console */
import classNames from 'classnames';
import React from 'react';

import './GoodList.scss';

type Props = {
  goods: string[];
};

interface State {
  goods: string[],
  isReversed: boolean,
  sortBy: string,
  goodLength: number,
}

export class GoodList extends React.Component<Props, State> {
  state = {
    goods: [...this.props.goods],
    isReversed: false,
    sortBy: '',
    goodLength: 1,
  };

  reverse = () => {
    this.setState(state => (
      { isReversed: !state.isReversed }
    ));
  };

  sortByAlpabet = () => {
    this.setState(({ sortBy: 'alphabet' }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      goodLength: 1,
    });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  changeLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState({ goodLength: Number(value) });
  };

  render() {
    const {
      isReversed,
      goods,
      sortBy,
      goodLength,
    } = this.state;

    const copy = goods.filter(
      good => good.length >= goodLength,
    );

    copy.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return b.length - a.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copy.reverse();
    }

    return (
      <div className="goods">
        <button
          className={classNames('btn',
            { 'btn--selected': isReversed })}
          type="button"
          onClick={this.reverse}
        >
          Reversed
          {`(${isReversed})`}
        </button>

        <button
          className={classNames('btn',
            { 'btn--selected': sortBy === 'alphabet' })}
          type="button"
          onClick={this.sortByAlpabet}
        >
          Sort alphabetically
          {`(${sortBy === 'alphabet'})`}
        </button>

        <button
          className={classNames('btn',
            { 'btn--selected': sortBy === 'length' })}
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
          {`(${sortBy === 'length'})`}
        </button>

        <button
          className="btn"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <select
          name="goodLength"
          value={goodLength}
          onChange={(event) => {
            this.changeLength(event);
          }}
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

        <ul className="goods__list">
          {copy.map(good => (
            <li
              key={good}
              className="goods__item"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
