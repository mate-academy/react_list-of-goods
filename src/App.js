import React from 'react';
import PropTypes from 'prop-types';

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
    isStart: false,
    goods: [...goodsFromServer],
    index: '',
  };

  start = () => {
    this.setState(
      { isStart: true }
    );
  };

  sort = () => {
    this.setState(state => (
      { goods: [...state.goods].sort((a, b) => a.length - b.length) }
    ));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => a.localeCompare(b)),
    }));
  };

  reverse = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      index: '1',
    });
  };

  filter = (event) => {
    this.setState({ index: event.target.value });
    this.setState(prev => (
      {
        goods: goodsFromServer
          .filter(item => item.length >= prev.index),
      }
    ));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="h1">Goods</h1>
        <div className="buttons">
          {this.state.isStart ? (
            <section>
              <select
                value={this.state.index}
                onChange={this.filter}
                className="select"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                  <option value={i}>{i}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sort}
              >
                Sort
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort-abc
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <GoodsList goods={goods} />
            </section>
          )
            : (
              <button
                className="start"
                type="button"
                onClick={this.start}
              >
                Start
              </button>
            )}
        </div>
      </div>
    );
  }
}

const GoodsList = props => (
  <ul className="ul">
    {props.goods.map(item => <li className="li">{item}</li>)}
  </ul>
);

GoodsList.propTypes = { goods: PropTypes.arrayOf(PropTypes.string).isRequired };

export default App;
