import React from 'react';
import Buttons from '../Buttons/Buttons';
import './GoodsList.css';

class GoodsList extends React.Component {
  render() {
    const {
      Goods,
      selected,
      handleReverse,
      handleSort,
      handleSortLength,
      handleReset,
      handleChange,
    } = this.props;

    return (
      <>
        <Buttons
          selected={selected}
          handleReverse={handleReverse}
          handleSort={handleSort}
          handleSortLength={handleSortLength}
          handleReset={handleReset}
          handleChange={handleChange}
        />
        <ul className="ui list">
          {Goods.map(item => (
            <li className="item">{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default GoodsList;
