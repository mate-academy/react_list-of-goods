import React from 'react';
import './GoodsList.css';
import { Button } from './Button';

enum SortType {
  Alphabetically,
  ByLength,
  SortOff,
}

type Props = {
  goods: string[];
};

type State = {
  isReversed: boolean;
  sortBy: SortType;
  availableLengths: string[];
  productLength: string;
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: SortType.SortOff,
    availableLengths: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    productLength: '1',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: SortType.Alphabetically });
  };

  sortByLength = () => {
    this.setState({ sortBy: SortType.ByLength });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.SortOff,
      productLength: '1',
    });
  };

  handleLengthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState({ productLength: value });
  };

  render() {
    const { goods } = this.props;
    const {
      isReversed,
      sortBy,
      availableLengths,
      productLength,
    } = this.state;
    const visibleGoods = goods.filter(
      item => item.length > Number(productLength),
    );

    visibleGoods.sort((firstItem, secondItem) => {
      switch (sortBy) {
        case SortType.Alphabetically:
          return firstItem.localeCompare(secondItem);

        case SortType.ByLength:
          return firstItem.length - secondItem.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <section>
        <p>Choose product length:</p>
        <select
          name="productLength"
          className="form-select"
          value={productLength}
          onChange={this.handleLengthChange}
        >
          {availableLengths.map(length => (
            <option value={length}>
              {length}
            </option>
          ))}
        </select>

        <ul className="list-group">
          {visibleGoods.map(product => (
            <li className="list-group-item" key={product}>
              {product}
            </li>
          ))}
        </ul>

        <div className="list-buttons">
          <Button
            name="Reverse"
            action={this.reverse}
          />

          <Button
            name="Sort alphabetically"
            action={this.sortAlphabetically}
          />

          <Button
            name="Sort by length"
            action={this.sortByLength}
          />

          <Button
            name="Reset"
            action={this.reset}
          />
        </div>
      </section>
    );
  }
}
