import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  constructor({ goods }) {
    super();
    this.goods = goods;

    this.state = {
      sortGoods: [...this.goods],
      lengthSelector: 1,
    };
  }

  reverseSort = () => {
    this.setState(prevState => ({
      sortGoods: prevState.sortGoods.reverse(),
    }));
  }

  alphabetSort = () => {
    this.setState(prevState => ({
      sortGoods: prevState.sortGoods.sort((item1, item2) => item1.localeCompare(item2)),
    }));
  }

  lengthSort = () => {
    this.setState(prevState => ({
      sortGoods: prevState.sortGoods.sort((item1, item2) => item1.length - item2.length),
    }));
  }

  resetSort = () => {
    this.setState({
      sortGoods: [...this.goods],
      lengthSelector: 1,
    });
  }

  selectLength = (event) => {
    const valueLength = event.target.value;

    this.setState({
      sortGoods: this.goods.filter(item => item.length >= Number(valueLength)),
      lengthSelector: valueLength,
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.reverseSort}>Reverse</button>
        <button type="button" onClick={this.alphabetSort}>Sort alphabetically</button>
        <button type="button" onClick={this.lengthSort}>Sort by length</button>
        <button type="button" onClick={this.resetSort}>Reset</button>
        <select className="lengthSelector" onChange={this.selectLength} value={this.state.lengthSelector}>
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
        <ul>
          {
            this.state.sortGoods.map((item, currentIndex) => (
              <li key={`${item}${currentIndex + 10}`}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
