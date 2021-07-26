import React from 'react';
import './App.scss';
import classNames from 'classnames';
import { Button } from './components/Button/Button';
import { GoodsList } from './components/GoodsList/GoodsList';

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
    isVisible: false,
    sortBy: 'default',
    minLength: 1,
    isReversed: false,
  };

  showGoodList = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      sortBy: 'name',
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      sortBy: 'length',
    }));
  };

  setMinLength = (event) => {
    const { value } = event.target;

    this.setState(() => ({
      minLength: +value,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState(() => ({
      isVisible: true,
      sortBy: 'default',
      minLength: 1,
      isReversed: false,
    }));
  }

  render() {
    if (!this.state.isVisible) {
      return (
        <div className={classNames(
          'start-container',
        )}
        >
          <Button
            onClick={this.showGoodList}
            text="Start"
            isVisible={this.state.isVisible}
          />
        </div>
      );
    }

    return (
      <div className="app">
        <h1>Goods</h1>
        <GoodsList
          goods={this.state.goods}
          sortBy={this.state.sortBy}
          minLength={this.state.minLength}
          isReversed={this.state.isReversed}
        />
        <div className="app__buttons">
          <Button
            onClick={this.reverse}
            text="Reverse"
            isVisible={!this.state.isVisible}
          />
          <Button
            onClick={this.sortAlphabetically}
            text="Sort alphabetically"
            isVisible={!this.state.isVisible}
          />
          <Button
            onClick={this.sortByLength}
            text="Sort by length"
            isVisible={!this.state.isVisible}
          />
          <Button
            onClick={this.reset}
            text="Reset"
            isVisible={!this.state.isVisible}
          />
          <select
            name="minLength"
            onChange={this.setMinLength}
            className={
              classNames(
                'form-select fs-5',
              )
            }
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
        </div>
      </div>
    );
  }
}

export default App;
