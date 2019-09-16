import React from 'react';
import './Buttons.css';

import Button from '../Button/Button';

class Buttons extends React.Component {
  render() {
    const {
      handleReverse,
      handleSort,
      handleSortLength,
      handleReset,
      handleChange,
      currentSelect
    } = this.props;

    return (
      <>
        <div className="btn-group" role="group" aria-label="Basic example">
          <Button className="btn btn-secondary" onClick={handleReverse} value={currentSelect}>
            Reverse
          </Button>
          <Button className="btn btn-secondary" onClick={handleSort}>
            Sort alphabetically
          </Button>
          <Button className="btn btn-secondary" onClick={handleSortLength}>
            Sort by length
          </Button>
          <Button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
        <div className="selects">
          <select name="length" id="selectedLength" onChange={handleChange} value={currentSelect}>
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
      </>
    );
  }
}

export default Buttons;
