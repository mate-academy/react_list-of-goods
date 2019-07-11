import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  constructor({ goods }) {
    super();
    this.goods = goods;

    this.state = {
      sortGoods: [...this.goods],
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
    });
  }

  selectLength = () => {
    const valueLength = document.querySelector('.lengthSelector').value;

    this.setState({
      sortGoods: this.goods.filter(item => item.length >= Number(valueLength)),
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.reverseSort}>Reverse</button>
        <button type="button" onClick={this.alphabetSort}>Sort alphabetically</button>
        <button type="button" onClick={this.lengthSort}>Sort by length</button>
        <button type="button" onClick={this.resetSort}>Reset</button>
        <select className="lengthSelector" onChange={this.selectLength}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
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
