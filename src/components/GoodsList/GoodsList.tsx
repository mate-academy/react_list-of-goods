import { range } from 'lodash';
import { Button } from 'react-bootstrap';
import { Component } from 'react';
import { SortType } from '../../enums/SortType';

interface Props {
  goods: string[];
}

interface State {
  isReversed: boolean;
  sortBy: SortType;
  minLength: number,
  maxLength: number,
  selectedLength: number,
}

export class GoodsList extends Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: SortType.Default,
    minLength: 1,
    maxLength: 10,
    selectedLength: 1,
  };

  handleReverseClick = () => {
    this.setState({ isReversed: true });
  };

  handleSortByLengthClick = () => {
    this.setState({ sortBy: SortType.ByLength });
  };

  handleSortAlphabeticallyClick = () => {
    this.setState({ sortBy: SortType.Alphabetical });
  };

  handleResetClick = () => {
    const { minLength } = this.state;

    this.setState({
      isReversed: false,
      sortBy: SortType.Default,
      selectedLength: minLength,
    });
  };

  handleSelectorChange = (value: string) => {
    this.setState({
      selectedLength: +value,
    });
  };

  render() {
    const { goods } = this.props;
    const {
      isReversed,
      sortBy,
      minLength,
      maxLength,
      selectedLength,
    } = this.state;
    const {
      handleSortByLengthClick,
      handleSortAlphabeticallyClick,
      handleReverseClick,
      handleResetClick,
      handleSelectorChange,
    } = this;

    const availableOptions = range(minLength, maxLength + 1);

    const visibleGoodsList = goods.filter(
      item => item.length >= selectedLength,
    );

    visibleGoodsList.sort(
      (itemA, itemB) => {
        switch (sortBy) {
          case SortType.ByLength:
            return itemA.length - itemB.length;

          case SortType.Alphabetical:
            return itemA.localeCompare(itemB);

          case SortType.Default:
            return 0;

          default:
            throw new Error(`Error: SortType ${sortBy} is undefined`);
        }
      },
    );

    if (isReversed) {
      visibleGoodsList.reverse();
    }

    return (
      <div className="GoodsList">
        <div className="GoodsList__controllers">
          <Button
            className="GoodsList__button"
            onClick={handleSortByLengthClick}
            disabled={sortBy === SortType.ByLength}
          >
            Sort by length
          </Button>

          <Button
            className="GoodsList__button"
            onClick={handleSortAlphabeticallyClick}
            disabled={sortBy === SortType.Alphabetical}
          >
            Sort alphabetically
          </Button>

          <Button
            className="GoodsList__button"
            onClick={handleResetClick}
            disabled={selectedLength === minLength
              && sortBy === SortType.Default
              && !isReversed}
          >
            Reset
          </Button>

          <Button
            className="GoodsList__button"
            onClick={handleReverseClick}
            disabled={isReversed}
          >
            Reverse
          </Button>

          <div className="GoodsList__selector">
            <span className="GoodsList__selector-label">
              Length
            </span>

            <select
              className="GoodsList__selector-select"
              value={selectedLength}
              onChange={({ target }) => {
                handleSelectorChange(target.value);
              }}
            >
              {availableOptions.map(item => (
                <option
                  className="GoodsList__selector-item"
                  key={`length-${item}`}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <ul className="GoodsList__list">
          {visibleGoodsList.map(item => (
            <li
              className="GoodsList__list-item"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
