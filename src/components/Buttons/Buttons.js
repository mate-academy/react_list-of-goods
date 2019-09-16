import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {
  render() {
    const {
      handleReverse,
      handleSort,
      handleSortLength,
      handleReset,
      handleChange,
      selected,
    } = this.props;

    return (
      <>
        <div className="buttons">
          <button className="ui secondary button" onClick={handleReverse}>
            Reverse
          </button>
          <button className="ui secondary button" onClick={handleSort}>
            Sort
          </button>
          <button className="ui secondary button" onClick={handleSortLength}>
            Sort length
          </button>
          <button className="ui secondary button" onClick={handleReset}>
            Reset
          </button>
          <div className="selects">
            <select
              name="length"
              id="selectedLength"
              onChange={handleChange}
              value={selected}
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
        </div>
      </>
    );
  }
}

export default Buttons;
