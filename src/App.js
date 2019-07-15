import React from 'react';
import styles from './styles.css';

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
    goods: [],
    isLoaded: false,
    defaultSelect: 1,
  };

  handleClick = () => {
    this.setState({
      goods: goodsFromServer,
      isLoaded: true,
    });
  };

  makeReverseSorting = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  makeAlphabeticalSorting = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  makeReset = () => {
    this.setState(() => ({
      goods: goodsFromServer,
      defaultSelect: 1,
    }));
  };

  makeSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      defaultSelect: value,
      goods: goodsFromServer.filter(good => good.length >= value),
    }));
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoaded ? (
          <div className="main__container">
            <section className="goods__container">
              <GoodsList goods={this.state.goods} />
            </section>

            <section className="button__set">
              <button className="button" onClick={this.makeReverseSorting}>Reverse</button>
              <button className="button" onClick={this.makeAlphabeticalSorting}>Sort alphabetically</button>
              <button className="button" onClick={this.makeReset}>Reset</button>
              <button className="button" onClick={this.makeSortByLength}>Sort by length</button>

              <select className="select__field" value={this.state.defaultSelect} onChange={this.handleChange}>
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

            </section>
          </div>
        ) : (
          <button className="button__front" onClick={this.handleClick}>
            Load
          </button>
        )}
      </div>
    );
  }
}

const GoodsList = ({ goods }) => (
  <div className="separate__good">
    <ul>
      {goods.map(good => (
        <li>{good}</li>
      ))}
    </ul>
  </div>
);

export default App;
