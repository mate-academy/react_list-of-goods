import React from 'react';
import './GoodsList.css';
import goodsPropTypes from '../../proptypes/proptypes';

class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
  }

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleClickSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  handleClickReset = () => {
    this.setState(prevState => ({
      goods: this.props.goods,
    }));
  }

  handleClickSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  handleChangeSelect = (event) => {
    this.setState({
      goods: [...this.props.goods]
        .filter(elem => elem.length >= event.target.value),
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <div className="wrapper-buttons">
          <button
            type="button"
            className="button"
            onClick={this.handleClickReverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className="button"
            onClick={this.handleClickSort}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="button"
            onClick={this.handleClickReset}
          >
            Reset
          </button>
          <button
            type="button"
            className="button"
            onClick={this.handleClickSortByLength}
          >
            Sort by length
          </button>
          <select
            className="select"
            name="good-length"
            id="selectedLength"
            onChange={this.handleChangeSelect}
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
        </div>
        <ul className="goods-list">
          {goods.map(item => (
            <li key={item} className="goods-item">
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = goodsPropTypes;

export default GoodsList;
