import React from 'react';
import './Buttons.css';
import { ButtonsShape } from '../../shapes';

export const Buttons = props => (
  <div className="btn-group">
    {Object.entries(props).map(name => (
      <button
        key={name}
        onClick={name[1]}
        type="button"
        className="btn btn-info"
      >
        {name[0].replace(/sort/ig, '')}
      </button>
    ))
    }
  </div>
);

Buttons.propTypes = ButtonsShape.isRequired;
