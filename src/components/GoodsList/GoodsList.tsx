import React from 'react';
import { Button } from '../Button';
import './GoodsList.scss';

interface Props {
  goods: Good[];
}

interface State {
  isReversed: boolean;
  sortBy: string;
  minWordLength: string;
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: '',
    minWordLength: '1',
  };

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  sortByOption = (option: string) => {
    this.setState({ sortBy: option });
  };

  changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ minWordLength: event.target.value });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
      minWordLength: '1',
    });
  };

  getFilteredGoods = () => {
    const { goods } = this.props;
    const { isReversed, sortBy, minWordLength } = this.state;
    let filteredGoods = goods.filter(good => (
      good.name.length >= +minWordLength
    ));

    if (sortBy) {
      filteredGoods = [...filteredGoods]
        .sort(({ name: good1 }, { name: good2 }) => {
          switch (sortBy) {
            case 'alphabet':
              return good1.localeCompare(good2);

            case 'length':
              return good1.length - good2.length;

            default:
              return 0;
          }
        });
    }

    if (isReversed) {
      filteredGoods = [...filteredGoods].reverse();
    }

    return filteredGoods;
  };

  render() {
    const { minWordLength } = this.state;
    const filteredGoods = this.getFilteredGoods();

    return (
      <div>
        <p>
          Minimum length of the words in the list will be:
        </p>
        <select
          value={minWordLength}
          onChange={this.changeHandler}
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
        <ul className="list">
          {filteredGoods.map(good => (
            <li key={good.id} className="list__item">
              {good.name}
            </li>
          ))}
        </ul>
        <Button
          name="Reverse"
          onClick={this.reverse}
        />
        <Button
          name="Sort alphabetically"
          onClick={() => this.sortByOption('alphabet')}
        />
        <Button
          name="Sort by length"
          onClick={() => this.sortByOption('length')}
        />
        <Button
          name="Reset"
          onClick={this.reset}
        />
      </div>
    );
  }
}
