import React from 'react';
import './App.css';

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

export interface State {
  goods: string[];
  isShown: boolean;
  isReversed: boolean;
  sortBy: string,
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isShown: false,
    isReversed: false,
    sortBy: '',
  }

  showItems = () => {
    this.setState(state => ({
      isShown: !state.isShown,
    }))
  }

  sortByAlphabet = () => {
    this.setState({ 
      sortBy: 'alphabet',
      isReversed: false,
    })
  }

  sortByLength = () => {
    this.setState({ 
      sortBy: 'length',
      isReversed: false,
    })
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    })
  }

  listToRender = () => {
    const { goods, isReversed, sortBy } = this.state;

    if(isReversed) {
      return [...goods].reverse();
    }

    if(sortBy === 'alphabet') {
      return [...goods].sort();
    }

    if(sortBy === 'length') {
      return [...goods].sort((a, b) => a.length - b.length)
    }

    return goods;
  }

  render() {
    const { isShown } = this.state;
    const items = this.listToRender();

    return (
      <div className="App">
        <ul>
          {!isShown &&
          <button
            onClick={this.showItems}
            className="button"
            type="button"
          >
            start
          </button>}
          {isShown && (
            <>
            <div className="buttons">
              <button
                onClick={this.reverse}
                className="button"
                type="button"
              >
                Reverse
              </button>

              <button
                onClick={this.sortByAlphabet}
                className="button"
                type="button"
              >
                Sort alphabetically
              </button>

              <button
                onClick={this.reset}
                className="button"
                type="button"
              >
                Reset
              </button>

              <button
                onClick={this.sortByLength}
                className="button"
                type="button"
              >
                Sort by length
              </button>
            </div>

            {items.map(item => (
            <li
              key={item}
              className="item"
            >
              {item}
            </li>
            ))}
            </>
          )}
        </ul>
      </div>
    );
  }
} 

export default App;
