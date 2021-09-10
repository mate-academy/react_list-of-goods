import React from 'react';
import { Button } from '../Button';
import './GoodsList.scss';

const possibleLength: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
  goodsFromServer: string[];
}

enum SortType {
  default,
  alphabetically,
  length,
}

interface State {
  isReversed: boolean;
  sortBy: SortType,
  minLength: number,
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: SortType.default,
    minLength: 1,
  };

  selectMinLength = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      minLength: +(e.target.value),
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: SortType.alphabetically,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: SortType.length,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.default,
      minLength: 1,
    });
  };

  getVisibleGoods = (goods: string[]) => {
    const {
      isReversed,
      sortBy,
      minLength,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length > minLength);

    visibleGoods.sort(
      (firstGood, secondGood) => {
        switch (sortBy) {
          case SortType.alphabetically:
            return firstGood.localeCompare(secondGood);
          case SortType.length:
            return firstGood.length - secondGood.length;
          default:
            return 0;
        }
      },
    );

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  render() {
    const {
      isReversed,
      sortBy,
      minLength,
    } = this.state;

    const { goodsFromServer } = this.props;

    const visibleGoods = this.getVisibleGoods(goodsFromServer);

    return (
      <div className="goods-content">
        <select
          name="minLength"
          className="form-select"
          aria-label="Default select example"
          value={minLength}
          onChange={this.selectMinLength}
        >
          {possibleLength.map(
            item => (
              <option
                value={item}
                key={item}
              >
                {item}
              </option>
            ),
          )}
        </select>

        <ul className="goods-content__list">
          {
            visibleGoods.map(good => (
              <li
                className="goods-content__item"
                key={good}
              >
                {good}
              </li>
            ))
          }
        </ul>

        <div className="goods-content__buttons">
          <Button
            name="Reverse"
            active={isReversed}
            action={this.reverse}
          />

          <Button
            name="Sort alphabetically"
            active={sortBy === SortType.alphabetically}
            action={this.sortAlphabetically}
          />

          <Button
            name="Reset"
            active={false}
            action={this.reset}
          />

          <Button
            name="Sort by length"
            active={sortBy === SortType.length}
            action={this.sortByLength}
          />
        </div>
      </div>
    );
  }
}
