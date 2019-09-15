import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const buttonId = event.target.id;
    const buttonValue = event.target.value;

    this.props.handleStateOfList(buttonId, buttonValue);
  }

  render() {
    return (
      <>
        <button
          id="reverse"
          type="button"
          className="btn btn-primary btn-lg place"
          onClick={this.handleClick}
        >
          Reverse
        </button>
        <button
          id="sort-alphabetically"
          type="button"
          className="btn btn-primary btn-lg place"
          onClick={this.handleClick}
        >
          Sort alphabetically
        </button>
        <button
          id="sort-by-length"
          type="button"
          className="btn btn-primary btn-lg place"
          onClick={this.handleClick}
        >
          Sort by length
        </button>
        <select
          id="select"
          className="btn btn-primary btn-lg place"
          onClick={this.handleClick}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .map(item => (this.props.defaultSelect === item
              ? <option selected value={item}>{item}</option>
              : <option value={item}>{item}</option>))}
        </select>
        <button
          id="reset"
          type="button"
          className="btn btn-primary btn-lg place"
          onClick={this.handleClick}
        >
          Reset
        </button>
      </>
    );
  }
}

Buttons.propTypes = {
  defaultSelect: PropTypes.number.isRequired,
  handleStateOfList: PropTypes.func.isRequired,
};

export default Buttons;
