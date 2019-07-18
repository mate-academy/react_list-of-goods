import React from 'react';

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

class App extends React.Component{
  state = {
    data: [],
    loaded: false,
    value: '1',
  };

  loadData = () => {
    this.setState({
      loaded: true,
      data: [...goodsFromServer],
    });
  };

  upSideDown = () => {
    this.setState({
      data: this.state.data.reverse(),
    });
  };

  sortAlphabet = () => {
    this.setState({
      data: this.state.data.sort((a, b) => a.localeCompare(b)),
    });
  };

  backToStart = () => {
    this.setState({
      data: [...goodsFromServer],
      value: '1',
    });
  };

  sortLength =() => {
    this.setState({
      data: this.state.data.sort((a, b) => a.length - b.length),
    });
  };

  sortSelect = (event) => {
    this.setState({
      value: event.target.value,
      data: this.state.data
        .filter(item => item.length >= event.target.value),
    });
  };

  render() {
    if (!this.state.loaded) {
      console.log(this.state.data);
      return <button className="load-button" onClick={this.loadData}>Start</button>;
    }
    return (
      <div className="App">
        <h1>Gods list:</h1>
        <div className="buttons-block">
          <button onClick={this.upSideDown}>Reverse</button>
          <button onClick={this.sortAlphabet}>Sort alphabetically</button>
          <button onClick={this.backToStart}>Reset </button>
          <button onClick={this.sortLength}>Sort by length</button>
          <select onChange={this.sortSelect} value={this.state.value}>
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
        <ul>
          {this.state.data.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
