import React from 'react';
import './App.css';

import { GoodsList } from './GoodsList';
import { Buttons } from './Buttons';

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

const selectorValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class App extends React.Component {
  state = {
    visibleSection: 'none',
    visibleButton: 'block',
    visibleGoods: [...goodsFromServer],
    value: 1,
  }

  show = () => {
    this.setState({
      visibleButton: 'none',
      visibleSection: 'block',
    });
  }

  reverse = () => {
    this.setState(state => ({ visibleGoods: state.visibleGoods.reverse() }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({ visibleGoods: state.visibleGoods.sort() }));
  }

  sortByName = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.sort((x, y) => x.length - y.length),
    }));
  }

  reset = () => {
    this.setState({
      visibleGoods: [...goodsFromServer],
      value: 1,
    });
  }

  handleChange = (e) => {
    const newValue = +e.target.value;

    this.setState({
      visibleGoods: goodsFromServer.filter(good => good.length >= newValue),
      value: newValue,
    });
  }

  render() {
    const { visibleGoods, visibleButton, visibleSection, value } = this.state;

    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        <button
          className="btn btn-success"
          type="button"
          style={{ display: visibleButton }}
          onClick={this.show}
        >
          Start
        </button>
        <section style={{ display: visibleSection }}>
          <Buttons
            selectorValues={selectorValues}
            value={value}
            reverse={this.reverse}
            sortAlphabetically={this.sortAlphabetically}
            sortByName={this.sortByName}
            reset={this.reset}
            handleChange={this.handleChange}
          />
          <GoodsList visibleGoods={visibleGoods} />
        </section>
      </div>
    );
  }
}
