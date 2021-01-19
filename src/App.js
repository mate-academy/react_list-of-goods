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
    value: '1',
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
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
      sortBy: '', isReversed: false, value: '1',
    });
  }

  render() {
    const { isReversed, sortBy, showList, hideButton, value } = this.state;

    return (
      <div className="App box has-text-centered">
        <h1 className="title is-1">Goods</h1>
        <GoodsList
          showList={showList}
          goods={goodsFromServer}
          isReversed={isReversed}
          sortBy={sortBy}
          value={value}
        />
        <button
          type="button"
          className={classNames('button is-primary is-light m-2',
            { hidden: hideButton })}
          onClick={this.startButton}
        >
          Start
        </button>
        <div className={classNames('has-text-centered', { hidden: showList })}>
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
        <div className={classNames('select is-rounded', { hidden: showList })}>
          <select value={this.state.value} onChange={this.handleChange}>
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
        </div>
      </div>
    );
  }
}

export default App;
