import React from 'react';
import classNames from 'classnames';
import { GoodsList } from './components/GoodsList';
import './App.css';

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

class App extends React.PureComponent {
  state = {
    hideButton: false,
    showList: true,
    isReversed: false,
    sortBy: '',
  }

  startButton = () => {
    this.setState(prevState => ({
      hideButton: !prevState.hideButton,
      showList: false,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlph = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      sortBy: '', isReversed: false,
    });
  }

  render() {
    const { isReversed, sortBy, showList, hideButton } = this.state;

    return (
      <div className="App box has-text-centered">
        <h1 className="title is-1">Goods</h1>
        <GoodsList
          showList={showList}
          goods={goodsFromServer}
          isReversed={isReversed}
          sortBy={sortBy}
        />
        <div className="has-text-centered">
          <button
            type="button"
            className={classNames('button is-primary is-light m-2',
              { hidden: hideButton })}
            onClick={this.startButton}
          >
            Start
          </button>
          <button
            type="button"
            onClick={this.reverse}
            className="button is-link is-light m-2"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortAlph}
            className="button is-success is-light m-2"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.reset}
            className="button is-danger is-light m-2"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.sortLength}
            className="button is-warning is-light m-2"
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

export default App;
