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
    const { list, selected } = this.props;

    return (
      <select className="select" onChange={this.handleClick}>
        {list.map(item => (
          <option
            value={item.val}
            selected={item.val === selected}
          >
            {item.name}
          </option>
        ))}
      </select>
    );
  }
}

Select.propTypes = SelectTypes;
