import React from 'react';
import { Good } from '../../types/Good';
import './GoodsList.scss';

interface Props {
  goods: Good[];
}

interface State {
  isReversed: boolean;
  sortBy: string;
  maxWordLength: string;
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: '',
    maxWordLength: '10',
  };

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ maxWordLength: event.target.value });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
      maxWordLength: '10',
    });
  };

  render() {
    const { goods } = this.props;
    const { isReversed, sortBy, maxWordLength } = this.state;
    const filteredGoods = goods.filter(good => (
      good.name.length <= +maxWordLength
    ));

    filteredGoods.sort(({ name: good1 }, { name: good2 }) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      filteredGoods.reverse();
    }

    return (
      <div>
        <p>
          Maximum length of the words in the list will be:
        </p>
        <select
          value={maxWordLength}
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
        <button
          className="button"
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          className="button"
          type="button"
          onClick={this.sortByAlphabet}
        >
          Sort alphabetically
        </button>
        <button
          className="button"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          className="button"
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
      </div>
    );
  }
}
