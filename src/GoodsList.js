import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class GoodsList extends React.Component {
  constructor({ goods }) {
    super(goods);
    this.goods = goods;

    this.state = {
      goodsList: [...this.goods],
      lengthSelector: 1,
    };
  }

    reverseSort = () => {
      this.setState(prevState => (
        { goodsList: [...prevState.goodsList].reverse() }
      ));
    };

    alphabetSort = () => {
      this.setState(prevState => ({
        goodsList: [...prevState.goodsList].sort(
          (item1, item2) => item1.localeCompare(item2)
        ),
      }));
    };

    lengthSort = () => {
      this.setState(prevState => ({
        goodsList: [...prevState.goodsList].sort(
          (item1, item2) => item1.length - item2.length
        ),
      }));
    };

    resetSort = () => {
      this.setState({
        goodsList: [...this.goods],
        lengthSelector: 1,
      });
    };

    selectLength = (event) => {
      const valueLength = event.target.value;

      this.setState({
        goodsList: this.goods.filter(
          item => item.length >= Number(valueLength)
        ),
        lengthSelector: valueLength,
      });
    };

    render() {
      const { goodsList, lengthSelector } = this.state;

      return (
        <div className="content">
          <div>
            <div className="ui buttons">
              <button
                type="button"
                onClick={this.reverseSort}
                className="ui button"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.alphabetSort}
                className="ui button"
              >
                Sort A-Z
              </button>

              <button
                type="button"
                onClick={this.lengthSort}
                className="ui button"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.resetSort}
                className="ui button"
              >
                Reset
              </button>
            </div>
            <select
              value={lengthSelector}
              onChange={this.selectLength}
              className="ui dropdown select"
            >
              <option className="item" value="1">1</option>
              <option className="item" value="2">2</option>
              <option className="item" value="3">3</option>
              <option className="item" value="4">4</option>
              <option className="item" value="5">5</option>
              <option className="item" value="6">6</option>
              <option className="item" value="7">7</option>
              <option className="item" value="8">8</option>
              <option className="item" value="9">9</option>
              <option className="item" value="10">10</option>
            </select>
          </div>

          <div />
          <div className="ui list">
            {
              goodsList.map(item => (
                <div key={`${item}${Math.random()}`} className="item">
                  {item}
                </div>
              ))
            }
          </div>
        </div>
      );
    }
}

GoodsList.propTypes = { goods: PropTypes.arrayOf(PropTypes.string).isRequired };

export default GoodsList;
