import React from 'react';
import { Good } from '../../types/Good';
import './GoodsList.scss';

interface Props {
  goods: Good[],
}

interface State {
  isReversed: boolean,
  sortBy: string,
  length: number,
}

export class GoodsList extends React.PureComponent<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: '',
    length: 1,
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ sortBy: '', length: 1 });
  };

  changeLength = (value: number) => {
    this.setState({ length: value });
  };

  render() {
    const { sortBy, isReversed, length } = this.state;
    const goods = [...this.props.goods].filter(el => el.length > length);

    goods.sort((el1, el2) => {
      switch (sortBy) {
        case 'alphabet':
          return el1.localeCompare(el2);

        case 'length':
          return el1.length - el2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="GoodsList">
        <div className="GoodsList-Buttons">
          <button
            type="button"
            onClick={this.reverse}
            className="GoodsList-Button"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortAlphabetically}
            className="GoodsList-Button"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
            className="GoodsList-Button"
          >
            Sort by length
          </button>
          <select
            onChange={(event) => this.changeLength(+event.target.value)}
            className="GoodsList-Button"
          >
            <option value={1} selected={length === 1}>
              goods with length more than 1
            </option>
            <option value={2}>
              goods with length more than 2
            </option>
            <option value={3}>
              goods with length more than 3
            </option>
            <option value={4}>
              goods with length more than 4
            </option>
            <option value={5}>
              goods with length more than 5
            </option>
            <option value={6}>
              goods with length more than 6
            </option>
            <option value={7}>
              goods with length more than 7
            </option>
            <option value={8}>
              goods with length more than 8
            </option>
            <option value={9}>
              goods with length more than 9
            </option>
            <option value={10}>
              goods with length more than 10
            </option>
          </select>
          <button
            type="button"
            onClick={this.reset}
            className="GoodsList-Button"
          >
            Reset
          </button>
        </div>
        <ul className="GoodsList-List">
          {goods.map(el => {
            return (
              <li key={el} className="GoodsList-Item">
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
