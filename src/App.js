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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: [],
      isShowButton: true,
    };
  }

  handleButtonShowClick = () => {
    this.setState(prevState => ({
      goods: [...goodsFromServer],
      isShowButton: !prevState.isShowButton,
    }));
  };

  handleButtonReverseClick = () => {
    this.setState({
      goods: [...goodsFromServer].reverse(),
    });
  }

  handleButtonSortClick = () => {
    this.setState({
      goods: [...goodsFromServer].sort((a, b) => a.localeCompare(b)),
    });
  }

  handleButtonResetClick = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  handleButtonSortByLengthClick = () => {
    this.setState({
      goods: [...goodsFromServer].sort((a, b) => a.length - b.length),
    });
  }

  handleSelect = (id) => {
    this.setState({
      goods: [...goodsFromServer].filter(item => item.length >= id),
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods 1</h1>
        <ul>
          {goods.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {this.state.isShowButton
          && (
            <button
              onClick={this.handleButtonShowClick}
              type="button"
            >
              Start
            </button>
          )
          || (
            <>
              <button
                onClick={this.handleButtonReverseClick}
                type="button"
              >
                Reverse
              </button>
              <button
                onClick={this.handleButtonSortClick}
                type="button"
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.handleButtonResetClick}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.handleButtonSortByLengthClick}
              >
                Sort by length
              </button>
            </>
          )}
        <br />
        <select
          style={{ marginTop: 10 }}
          onChange={e => this.handleSelect(e.target.value)}
        >
          <option selected value="1">1</option>
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
    );
  }
}

export default App;
