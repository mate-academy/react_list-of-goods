import React from 'react';

function ButtonPanel(props) {
  return (
  <>
    <button onClick={props.doReverse}>Reverse</button>
    <button onClick={props.sortaAlphabetically}>Sort alphabetically</button>
    <button onClick={props.doReset}>Reset</button>
    <button onClick={props.sortByLength}>Sort by length</button>
  </>
  );
}

export default ButtonPanel;
