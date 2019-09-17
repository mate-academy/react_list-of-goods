import React from 'react';
import './GoodsList.css';
import goodsPropTypes from '../../proptypes/proptypes';

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
          <button
            type="button"
            className="button"
            onClick={handleClickReverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className="button"
            onClick={handleClickSort}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="button"
            onClick={handleClickReset}
          >
            Reset
          </button>
          <button
            type="button"
            className="button"
            onClick={handleClickSortByLength}
          >
            Sort by length
          </button>
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
