import React from 'react';
import { Button } from '../Button/Button';

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

export class GoodsList extends React.Component {
  state = {
    isVisible: false,
    goods: [...goodsFromServer],
  }

  showList = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortListByAlp = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prev, next) => prev.localeCompare(next)),
    }));
  }

  resetList = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  }

  sortListByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prev, next) => prev.length - next.length),
    }));
  }

  render() {
    const { isVisible, goods } = this.state;

    return (
      <>
        {isVisible
          ? (
            <>
              <ol>
                {goods.map(good => (
                  <li key={good}>
                    {good}
                  </li>
                ))}
              </ol>
              <Button click={this.reverseList} text="Reverse" />
              <Button click={this.sortListByAlp} text="Sort alphabetically" />
              <Button click={this.resetList} text="Reset" />
              <Button click={this.sortListByLength} text="Sort by length" />
            </>
          )
          : (
            <button type="button" onClick={this.showList}>
              Start
            </button>
          )
        }
      </>
    );
  }
}
