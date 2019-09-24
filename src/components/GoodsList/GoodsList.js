import React from 'react';
import './GoodsList.css';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
    initGoods: [...this.props.goods],
  };

  handleReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  handleSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((good1, good2) => good1.content.localeCompare(good2.content)),
    }));
  };

  handleReset = () => {
    this.setState(prevState => ({
      goods: prevState.initGoods,
    }));
  };

  handleSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((good1, good2) => good1.content.length - good2.content.length),
    }));
  };

  handleSelectByLength = (event) => {
    this.setState({
      goods: [...this.state.initGoods]
        .filter(good => good.content.length >= event.target.value),
    });
  };

  render() {
    return (
      <div className="container">
        <button
          className="button-block--item"
          type="button"
          onClick={this.handleReverse}
        >
        Reverse
        </button>
        <button
          className="button-block--item"
          type="button"
          onClick={this.handleSort}
        >
          Sort A-Z
        </button>
        <button
          className="button-block--item"
          type="button"
          onClick={this.handleReset}
        >
          Reset
        </button>
        <button
          className="button-block--item"
          type="button"
          onClick={this.handleSortByLength}
        >
          Sort by length
        </button>
        <select
          onChange={this.handleSelectByLength}
          className="button-block--select"
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
        <ul className="list-of-goods">
          {this.state.goods.map(good => (
            <li key={good.id}>{good.content}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GoodsList;
