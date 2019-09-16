import React from 'react';
import './Functionality.css';

class Functionality extends React.Component {
  render() {
    const {
      reverseClick,
      alphabetSort,
      lengthSort,
      resetClick,
      handleChange,
    } = this.props;

    return (
      <div className="functionalityBlock">
        <div className="yellow ui vertical buttons">
          <button type="button" onClick={reverseClick} className="ui button">
            Reverse
          </button>
          <button type="button" onClick={alphabetSort} className="ui button">
            Alphabet sort
          </button>
          <button type="button" onClick={lengthSort} className="ui button">
            Length sort
          </button>
        </div>
        <button
          type="button"
          onClick={resetClick}
          className="negative ui button"
        >
          Reset
        </button>
        <select
          name="length"
          id="lenghtChoose"
          onChange={handleChange}
          className="ui selection dropdown"
        >
          <option selected value="1">
            1
          </option>
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
    );
  }
}

export default Functionality;
