import React from 'react';
import Usability from '../Usability/Usability';
import './Goods.css';

const Goods = ({
  goods,
  handleClickReverse,
  handleClickSort,
  handleClickSortByLength,
  handleClickReset,
  handleChange,
  minLength,
}) => (
  <>
    <h1 className="ui header">LIST OF GOODS</h1>
    <div className="goods">
      <Usability
        handleClickReverse={handleClickReverse}
        handleClickSort={handleClickSort}
        handleClickSortByLength={handleClickSortByLength}
        handleClickReset={handleClickReset}
        handleChangeSelect={handleChange}
        minLength={minLength}
      />
      <div className="ui inverted segment">
        <div className="ui inverted relaxed divided list">
          {goods.map(good => (
            <div className="item">
              <div className="content">
                <div className="header">{good}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Goods;
