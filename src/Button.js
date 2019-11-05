import React from 'react';

function Button(props) {
  console.log(props.bottons);
  return props.bottons.map( (button, index)=> <button onClick={button.func}
                                                      key={index}
                                                      ype="button">{button.text}
                                              </button>)
}

export default Button;
