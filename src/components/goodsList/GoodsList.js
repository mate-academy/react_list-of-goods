import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import Goods from '../good/Goods';

class GoodsList extends React.PureComponent {
  render() {
    const {
      goods,
      selectedOption,
      handleClickReverse,
      handleClickSort,
      handleClickReset,
      handleClickSortByLength,
      handleChangeSelect,
    } = this.props;

    return (
      <>
        <div className="wrapper-buttons">
          <Button
            type="button"
            className="button"
            onClick={handleClickReverse}
          >
            Reverse
          </Button>
          <Button
            type="button"
            className="button"
            onClick={handleClickSort}
          >
            Sort alphabetically
          </Button>
          <Button
            type="button"
            className="button"
            onClick={handleClickReset}
          >
            Reset
          </Button>
          <Button
            type="button"
            className="button"
            onClick={handleClickSortByLength}
          >
            Sort by length
          </Button>
          <select
            className="select"
            name="good-length"
            id="selectedLength"
            onChange={handleChangeSelect}
            value={selectedOption}
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
        <Goods goods={goods} />
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.func.isRequired,
  handleClickReverse: PropTypes.func.isRequired,
  handleClickSort: PropTypes.func.isRequired,
  handleClickReset: PropTypes.func.isRequired,
  handleClickSortByLength: PropTypes.func.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
};

export default GoodsList;
