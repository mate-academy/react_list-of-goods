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
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <ol className="ui list">
        {goods.map(item => <li value="-" key={item}>{item}</li>)}
      </ol>
    </>
  );
}

export default Goods;
