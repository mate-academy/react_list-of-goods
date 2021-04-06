import React from 'react';

const GoodItem = ({ elements }) => (
  elements.map(element => (
    <li key={element}>{element}</li>
  ))
);

export default GoodItem;
