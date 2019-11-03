import React from 'react';
import Goods from '../goods/Goods';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  render() {
    return (
      <>
        <div>
          <button onClick={this.props.doReverse}>Reverse</button>
          <button onClick={this.props.sortaAlphabetically}>Sort alphabetically</button>
          <button onClick={this.props.doReset}>Reset</button>
          <button onClick={this.props.sortByLength}>Sort by length</button>
          <select
            name="select"
            onChange={this.props.doSelect}
            value={this.props.selectedValue}
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
        <Goods goods={this.props.goods} />
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  doReverse: PropTypes.func.isRequired,
  sortaAlphabetically: PropTypes.func.isRequired,
  doReset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  doSelect: PropTypes.func.isRequired,
  selectedValue: PropTypes.func.isRequired,
};

export default GoodsList;
