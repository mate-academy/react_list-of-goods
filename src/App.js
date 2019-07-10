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
    moddedData: [],
    value: '',
  };

  componentWillMount() {
    this.state = {
      data: goodsFromServer,
    };
  }

  loadData = () => {
    this.setState({
      loaded: true,
      moddedData: [...goodsFromServer],
    });
  };

  upSideDown = () => {
    this.setState({
      moddedData: [...goodsFromServer].reverse(),
    });
  };

  sortAlphabet = () => {
    this.setState({
      moddedData: [...goodsFromServer].sort((a, b) => a.localeCompare(b)),
    });
  };

  backToStart = () => {
    this.setState({
      moddedData: [...goodsFromServer],
    });
  };

  sortLength =() => {
    this.setState({
      moddedData: [...goodsFromServer].sort((a, b) => a.length - b.length),
    });
  };

  sortSelect = (event) => {
    this.setState({
      moddedData: [...goodsFromServer]
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
          {this.state.moddedData.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
