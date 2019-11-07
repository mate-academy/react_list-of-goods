import React from 'react';
import Goods from '../goods/Goods';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  render() {
    let options = [];
    for(let i = 1; i <= 10; i++) {
      options.push(<option value={i.toString()}>{i}</option>);
    }
    return (
      <>
        <div>
          <ButtonPanel
            doReverse={this.props.doReverse}
            sortaAlphabetically={this.props.sortaAlphabetically}
            doReset={this.props.doReset}
            sortByLength={this.props.sortByLength}
          />

          <select
            name="select"
            onChange={this.props.doSelect}
            value={this.props.selectedValue}
          >

          {options}

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
