import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateOfList = props.handleStateOfList;
  }

  handleClick = ({ target }) => {
    const { id, value } = target;

    this.handleStateOfList(id, value);
  }

  render() {
    const { handleClick } = this;
    const { defaultSelect } = this.props;

    return (
      <>
        <button
          id="reverse"
          type="button"
          className="btn btn-primary btn-lg place"
          onClick={handleClick}
        >
          Reverse
        </button>
        <button
          id="sort-alphabetically"
          type="button"
          className="btn btn-primary btn-lg place"
          onClick={handleClick}
        >
          Sort alphabetically
        </button>
        <button
          id="sort-by-length"
          type="button"
          className="btn btn-primary btn-lg place"
          onClick={handleClick}
        >
          Sort by length
        </button>
        <select
          id="select"
          className="btn btn-primary btn-lg place"
          onClick={handleClick}
          defaultValue={defaultSelect}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .map(item => <option value={item} key={item}>{item}</option>)}
        </select>
        <button
          id="reset"
          type="button"
          className="btn btn-primary btn-lg place"
          onClick={handleClick}
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
