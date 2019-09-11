import React, { Component } from 'react';
import './Select.scss';
import { SelectTypes } from '../../constants/proptypes';

export default class Select extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onChange(e);
  }

  render() {
    const { rows, selected } = this.props;

    return (
      <select onChange={this.handleClick}>
        {[...Array(rows).keys()]
          .map(item => (
            <option
              value={item + 1}
              selected={item === (selected - 1)}
            >
              {item + 1}
            </option>
          ))}
      </select>
    );
  }
}

Select.propTypes = SelectTypes;
