import React from 'react';

function Button(props) {
  return props.bottons.map((button, index) => (
    <button onClick={button.func} key={index + button.text} type="button">
      {button.text}
    </button>
  ));
}

export default Button;
