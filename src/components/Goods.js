import React from 'react';

function Goods(props) {
  const {
    reverse,
    sortAlph,
    reset,
    sortLength,
    showByLength,
    goods,
    selectedOption,
    initialValue,
  } = props;

  return (
    <>
      <button onClick={reverse} type="button" className="ui blue basic button start">
        Reverse
      </button>
      <button onClick={sortAlph} type="button" className="ui violet basic button">
      Sort alphabetically
      </button>
      <button onClick={reset} type="button" className="ui purple basic button">
        Reset
      </button>
      <button onClick={sortLength} type="button" className="ui pink basic button">
        Sort by length
      </button>
      <select onClick={showByLength} value={selectedOption} className="ui basic button green dropdown">
        {initialValue.map((item, index) => (
          <option key={index + 1} value={index + 1}>{index + 1}</option>))}
      </select>
      <ol className="ui list">
        {goods.map(item => <li value="-" key={item}>{item}</li>)}
      </ol>
    </>
  );
}

export default Goods;
