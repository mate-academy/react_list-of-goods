import React from 'react'
import PropTypes from 'prop-types'

const GoodsList = ({
  state,
  handleReset,
  handleReverse,
  handleChange,
  handleSort,
}) => {
  const { currentGoods, selectValue } = state
  return (
    <section>
      <button
        type="button"
        className="btn"
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        type="button"
        className="btn"
        onClick={handleReverse}
      >
        Reverse
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => handleSort('alphabet')}
      >
        Sort by alphabet
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => handleSort('length')}
      >
        Sort by length
      </button>
      <select
        className="select-item"
        onChange={handleChange}
        value={selectValue}
      >
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
      <ul className="list">
        {
          currentGoods.map(good => (
            <li className="list-item">{good}</li>
          ))
        }
      </ul>
    </section>
  )
}

GoodsList.propTypes = {
  state: PropTypes.shape({
    currentGoods: PropTypes.arrayOf({}).isRequired,
    selectValue: PropTypes.number.isRequired,
  }).isRequired,
  handleReset: PropTypes.func.isRequired,
  handleReverse: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
}

export default GoodsList
