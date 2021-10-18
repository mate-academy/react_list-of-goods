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

class App extends React.Component {
  state = {
    renderStatus: false,
    goodsToShow: goodsFromServer,
    defaultOrder: goodsFromServer
  }
  SwitchStatus = () => {
    this.setState({renderStatus: !this.state.renderStatus});
  }
  reverseOrder = () => {
    this.setState({goodsToShow: [...this.state.goodsToShow].reverse()});
  }
  alphabeticalOrder = () => {
    this.setState({goodsToShow: [...this.state.goodsToShow].sort((g1,g2) => g1.localeCompare(g2))});
  }
  resetOrder = () => {
    this.setState({goodsToShow: [...this.state.defaultOrder]});
  }
  lengthOrder = () => {
    this.setState({goodsToShow: [...this.state.goodsToShow].sort((g1,g2) => g1.length - g2.length)});
  }

  render() {
    let {renderStatus, goodsToShow} = {...this.state}
    return(
      <div className="App">
        <button
          type="button"
          className={`show--${!renderStatus}`}
          onClick={this.SwitchStatus}>
          Start
        </button>
        
        <div className={`show--${renderStatus}`}>
        <button
          type="button"
          onClick={this.reverseOrder}>
          Reverse
        </button>
        <button
          type="button"
          onClick={this.alphabeticalOrder}>
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.resetOrder}>
          Reset
        </button>
        <button
          type="button"
          onClick={this.lengthOrder}>
          Sort by length
        </button>
          <ul>
            {goodsToShow.map((good) => <li>{good}</li>)}
          </ul>
        </div>
        
      </div>
  );}
}

export default App;
