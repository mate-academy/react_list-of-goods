import React from 'react';

class GoodsList extends React.Component {
  state = {
    goodsList: [...this.props.goodsList],
  }

  reverse = () => {
    this.setState(state => ({
      goodsList: state.goodsList.reverse(),
    }));
  }

  alphaSort = () => {
    this.setState(state => ({
      goodsList: state.goodsList.sort(),
    }));
  }

  reset = () => {
    this.setState({ goodsList: [...this.props.goodsList] });
  }

  lengthSort = () => {
    this.setState(state => ({
      goodsList: state.goodsList.sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    return (
      <>
        <ul>
          {this.state.goodsList.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.alphaSort}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.lengthSort}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </>
    );
  }
}

export default GoodsList;
