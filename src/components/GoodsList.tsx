import React from 'react';

const goodsFromServer: string[] = [
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

type State = {
  goods: string[];
};

export class GoodsList extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
  };

  reversed = () => {
    this.setState((prevState) => ({
      goods: prevState.goods.reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState((prevState) => ({
      goods: prevState.goods.sort((name1, name2) => (
        name1.localeCompare(name2)
      )),
    }));
  };

  sortByLength = () => {
    this.setState((prevState) => ({
      goods: prevState.goods.sort((name1, name2) => (
        name1.length - name2.length
      )),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="list-container">
        <ul className="list-group">
          {goods.map((good: string) => (
            <li key={good} className="list-group-item">
              {good}
            </li>
          ))}
        </ul>

        <div className="button-container">
          <button
            type="button"
            className="card-button"
            onClick={this.reversed}
          >
            Reverse
          </button>

          <button
            type="button"
            className="card-button"
            onClick={this.sortByAlphabet}
          >
            Sort by Alphabet
          </button>

          <button
            type="button"
            className="card-button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            type="button"
            className="card-button"
            onClick={this.sortByLength}
          >
            Sort by Length
          </button>

        </div>
      </div>
    );
  }
}
