import { range } from 'lodash';
import { Button, ListGroup } from 'react-bootstrap';
import { Component, SyntheticEvent } from 'react';
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
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  handleSortByLengthClick = () => {
    this.setState({ sortBy: SortType.ByLength });
  };

  handleSortAlphabeticallyClick = () => {
    this.setState({ sortBy: SortType.Alphabetical });
  };

  handleResetClick = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.Default,
    });
  };

  handleSelectorChange = (event: SyntheticEvent) => {
    this.setState({
      selectedLength: +(event.target as HTMLInputElement).value,
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
            onClick={this.handleReverseClick}
          >
            Reverse
          </Button>

          <Button
            className="GoodsList__button"
            onClick={this.handleSortByLengthClick}
          >
            Sort by length
          </Button>

          <Button
            className="GoodsList__button"
            onClick={this.handleSortAlphabeticallyClick}
          >
            Sort alphabetically
          </Button>

          <Button
            className="GoodsList__button"
            onClick={this.handleResetClick}
          >
            Reset
          </Button>

          <label
            className="GoodsList__selector"
            htmlFor="selector"
          >
            <span className="GoodsList__selector-label">
              Length
            </span>

            <select
              id="selector"
              defaultValue={availableOptions[0]}
              onChange={this.handleSelectorChange}
            >
              {availableOptions.map(item => (
                <option
                  key={`length-${item}`}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <ListGroup className="GoodsList__list">
          {visibleGoodsList.map(item => (
            <ListGroup.Item
              className="GoodsList__list-item"
              key={item}
            >
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
