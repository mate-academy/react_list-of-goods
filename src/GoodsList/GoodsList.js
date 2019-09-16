import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Goods from '../Goods/Goods';

class GoodsList extends React.Component {
  static propTypes = {
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = {
    goods: [...this.props.goods],
    orderBy: 'ASC',
    initialSelectedValue: '1',
    selectedValue: null,
    selectOptions: [...new Array(10)],
  };

  reverseList = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  };

  orderByAlphabetically = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => a.localeCompare(b)),
    }));
  };

  orderByLength = () => {
    this.setState(prevState => ({
      orderBy: (prevState.orderBy === 'DESC' ? 'ASC' : 'DESC'),
    }));
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => (
        prevState.orderBy === 'ASC'
          ? a.length - b.length
          : b.length - a.length
      )),
    }));
  };

  resetToInitialOrder = () => {
    this.setState(prevState => ({
      selectedValue: prevState.initialSelectedValue,
      goods: [...this.props.goods],
    }));
  };

  filterByGoodsLength = (event) => {
    this.setState({
      selectedValue: event.target.selectedValue,
      goods: [...this.props.goods].filter(
        item => item.length >= event.target.value
      ),
    });
  };

  render() {
    const { goods, selectedValue, selectOptions } = this.state;

    return (
      <div>
        <div className="btn-group mb-2">
          <Button
            onClick={this.reverseList}
            variant="dark"
          >
            Reverse
          </Button>
          <Button
            onClick={this.orderByAlphabetically}
            variant="dark"
          >
            Sort alphabetically
          </Button>
          <Button
            onClick={this.orderByLength}
            variant="dark"
          >
            Sort by length
          </Button>
          <Button
            onClick={this.resetToInitialOrder}
            variant="dark"
          >
            Reset
          </Button>
          <select
            className="btn btn-info"
            value={selectedValue}
            onChange={this.filterByGoodsLength}
          >
            {selectOptions.map((item, index) => (
              <option key={item} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        <ul className="list-group">
          <Goods goods={goods} />
        </ul>
      </div>
    );
  }
}

export default GoodsList;
