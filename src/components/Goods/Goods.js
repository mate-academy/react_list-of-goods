import React from 'react';
import './Goods.css';

import Buttons from '../Buttons/Buttons';
// import Button from "../Button/Button";

class Goods extends React.Component {
  render() {
    const {
      goods,
      handleReverse,
      handleSort,
      handleSortLength,
      handleReset,
      handleChange,
    } = this.props;

    return (
      <>
        <ul className="list-group list-group-flush">
          {goods.map((elem, i) => (
            <li className="list-group-item" key={i}>
              {elem}
            </li>
          ))}
        </ul>
        <Buttons
          handleReverse={handleReverse}
          handleSort={handleSort}
          handleSortLength={handleSortLength}
          handleReset={handleReset}
          handleChange={handleChange}
        />
      </>
    );
  }
}

export default Goods;
