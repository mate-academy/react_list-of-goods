import classNames from 'classnames';
import React from 'react';
import './App.css';
// import Page from './Page';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isHidden: true,
    isReversed: false,
    sortBy: '',
  }

  buttonSatus = () => {
    this.setState({
      isHidden: false,
    });
  }

  reverseMethod = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByField = (field) => {
    this.setState({
      sortBy: field,
    });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const {
      goods,
      isHidden,
      isReversed,
      sortBy,
    } = this.state;

    const copyOfGoods = [...goods];

    copyOfGoods.sort((a, b) => {
      switch (sortBy) {
        case 'byAlphabet':
          return a.localeCompare(b);

        case 'byLength':
          return a.length - b.length;
        default:
          return '';
      }
    });

    if (isReversed) {
      copyOfGoods.reverse();
    }

    return (
      <div className="App">
        {isHidden && (
          <button
            type="button"
            onClick={this.buttonSatus}
          >
            Start
          </button>
        )}

        {!isHidden && (
          <>
            <ul className="list">
              {copyOfGoods.map(el => (
                <li key={el}>
                  {el}
                </li>
              ))}
            </ul>

            <div className="buttons">
              <button
                type="button"
                className={classNames(isReversed ? 'active' : '')}
                onClick={this.reverseMethod}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={() => this.sortByField('byAlphabet')}
                className={classNames(sortBy === 'byAlphabet' ? 'active' : '')}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={() => this.sortByField('byLength')}
                className={classNames(sortBy === 'byLength' ? 'active' : '')}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </>
        )}

      </div>
    );
  }
}

export default App;
