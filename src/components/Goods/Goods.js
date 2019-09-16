import React from 'react';
import Functionality from '../Functionality/Functionality';
import './Goods.css';

const Goods = ({
  goods,
  reverseClick,
  alphabetSort,
  lengthSort,
  resetClick,
  handleChange,
  optionState,
}) => (
  <>
    <h1 className="ui header">LIST OF GOODS</h1>
    <div className="goods">
      <Functionality
        reverseClick={reverseClick}
        alphabetSort={alphabetSort}
        lengthSort={lengthSort}
        resetClick={resetClick}
        handleChange={handleChange}
        optionState={optionState}
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
