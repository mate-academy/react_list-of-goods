import React from 'react';
import { lengthSelectionShapes } from '../../PropsShapes/PropShapes';

export class LengthSelection extends React.PureComponent {
  render() {
    const generatedArray = Array.from(Array(10), (_, i) => i + 1);

    return (
      <select onChange={this.props.change} value={this.props.selected}>
        {
          generatedArray.map(arr => (
            <option key={arr} value={arr}>
              {arr}
            </option>
          ))
        }
      </select>
    );
  }
}

LengthSelection.propTypes = lengthSelectionShapes;
