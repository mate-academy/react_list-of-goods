import React from 'react';
import { Button } from '../Button';

const possibleLength: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

enum SortType {
  default,
  alphabetically,
  length,
}

interface Props {
  goodsFromServer: string[];
}

interface State {
  isReversed: boolean;
  sortBy: SortType,
  minLength: number,
}

export class MainContent extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: SortType.default,
    minLength: 1,
  };

  chooseMinLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      minLength: +event.target.value,
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
    const visibleGoods = goods.filter(item => item.length > minLength);

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
    } = this.state;
    const visibleGoods = this.getVisibleGoods(this.props.goodsFromServer);

    return (
      <div className="main">
        <select
          name="min-length"
          className="form-select"
          aria-label="Default select example"
          value={this.state.minLength}
          onChange={this.chooseMinLength}
        >
          {possibleLength.map(
            item => (
              <option value={item}>
                {item}
              </option>
            ),
          )}
        </select>

        <ul className="main__list">
          {
            visibleGoods.map(item => (
              <li
                key={item}
                className="main__item"
              >
                {item}
              </li>
            ))
          }
        </ul>

        <div className="main__buttons">
          <Button
            name="Reverse"
            action={this.reverse}
            active={isReversed}
          />
          <Button
            name="Sort alphabetically"
            action={this.sortAlphabetically}
            active={sortBy === SortType.alphabetically}
          />
          <Button
            name="Sort by length"
            action={this.sortByLength}
            active={sortBy === SortType.length}
          />
          <Button
            name="Reset"
            action={this.reset}
            active={false}
          />
        </div>
      </div>
    );
  }
}
