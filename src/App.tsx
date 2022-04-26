import React from 'react';
import './App.scss';

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
    goods: string [];
    visibilityHidden: boolean,
    minLength: number,
  };

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    visibilityHidden: true,
    minLength: 1,
  };

  showList = () => {
    this.setState((state) => ({
      visibilityHidden: !state.visibilityHidden,
    }));
  };

  sortByAbc = () => {
    const { goods } = this.state;

    this.setState({
      goods: [...goods].sort((a, b) => a.localeCompare(b)),
    });
  };

  sortByLength = () => {
    const { goods } = this.state;

    this.setState({
      goods: [...goods].sort((a, b) => a.length - b.length),
    });
  };

  reverse = () => {
    const { goods } = this.state;

    this.setState({
      goods: [...goods].reverse(),
    });
  };

  setLength = (length: string) => {
    const { goods, minLength } = this.state;

    this.setState({
      minLength: +length,
    });

    return [...goods].filter(g => g.length >= minLength);
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      minLength: 1,
    });
  };

  render() {
    const { goods, visibilityHidden, minLength } = this.state;
    const sortedList = goods.filter(g => g.length >= minLength);

    return (
      <div className="App">
        <h1 className="App__title">
          Goods:
          {' '}
          {goods.length}
        </h1>
        {visibilityHidden
          ? (
            <button
              type="button"
              className="App__button"
              onClick={this.showList}
            >
              Start
            </button>
          )
          : (
            <>
              <div className="App__buttons">

                <button
                  type="button"
                  className="App__button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="App__button"
                  onClick={this.sortByAbc}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className="App__button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
                <button
                  type="button"
                  className="App__button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>

              <span className="App__button-description">
                Set length:
              </span>
              <select
                name="setLength"
                id="setLength"
                value={minLength}
                onChange={({ target }) => {
                  this.setLength(target.value);
                }}
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

              <ul className="App__list">
                {sortedList.map(item => (
                  <li key={item} className="App__item">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
      </div>
    );
  }
}
