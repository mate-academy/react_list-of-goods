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

interface State{
  renderStatus: boolean,
  goodsToShow: string[],
}
class App extends React.Component {
  state:State = {
    renderStatus: false,
    goodsToShow: goodsFromServer,
  };

  SwitchStatus = () => {
    this.setState((prevState:State) => ({ renderStatus: !prevState.renderStatus }));
  };

  reverseOrder = () => {
    this.setState((prevState:State) => ({
      goodsToShow: [...prevState.goodsToShow].reverse(),
    }));
  };

  alphabeticalOrder = () => {
    this.setState((prevState:State) => ({
      goodsToShow: [...prevState.goodsToShow].sort((g1, g2) => g1.localeCompare(g2)),
    }));
  };

  resetOrder = () => {
    this.setState({ goodsToShow: [...goodsFromServer] });
  };

  lengthOrder = () => {
    this.setState((prevState:State) => ({
      goodsToShow: [...prevState.goodsToShow].sort((g1, g2) => g1.length - g2.length),
    }));
  };

  render() {
    const { renderStatus, goodsToShow } = { ...this.state };

    return (
      <div className="App">
        <button
          type="button"
          className={`show--${!renderStatus}`}
          onClick={this.SwitchStatus}
        >
          Start
        </button>

        <div className={`show--${renderStatus}`}>
          <button
            type="button"
            onClick={this.reverseOrder}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.alphabeticalOrder}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.resetOrder}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.lengthOrder}
          >
            Sort by length
          </button>
          <ul>
            {goodsToShow.map((good) => (
              <li>{good}</li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
