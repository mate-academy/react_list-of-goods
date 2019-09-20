import React from 'react';
import PropTypes from 'prop-types';
import './ListOfGoods.css';

class ListOfGoods extends React.PureComponent {
  state = {
    list: [...this.props.goods],
    nativeList: [...this.props.goods],
    selectedOption: 1,
  }

  handleReset = () => (
    this.setState(prevState => (
      { list: [...prevState.nativeList] }
    ))
  )

  handleReverseList = () => (
    this.setState(prevState => (
      { list: [...prevState.list].reverse() }
    ))
  );

  handleAlphabeticallyOrder = () => (
    this.setState(prevState => (
      { list: [...prevState.list].sort() }
    ))
  );

  handleByLength = () => (
    this.setState(prevState => (
      { list: [...prevState.list].sort((a, b) => a.length - b.length) }
    ))
  )

  handleSelect = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      selectedOption: value,
      list: [...prevState.list]
        .filter(elem => elem.length >= value),
    }));
  }

  render() {
    return (
      <>
        <h1 align="center" className="title">List of Goods</h1>
        <div className="list">
          <div className="actions">
            <button
              type="button"
              className="button-actions"
              onClick={this.handleReverseList}
            >
              Reverse
            </button>
            <button
              type="button"
              className="button-actions"
              onClick={this.handleAlphabeticallyOrder}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="button-actions"
              onClick={this.handleByLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              className="button-actions"
              onClick={this.handleReset}
            >
              Reset
            </button>
            <select
              className="select"
              name="good-length"
              id="selectedLength"
              onChange={this.handleSelect}
              value={this.state.selectedOption}
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
          </div>

          <ul className="list-goods">
            {this.state.list.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </>
    );
  }
}

ListOfGoods.propTypes = {
  selectedOption: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.string),
}.isRequaired;

export default ListOfGoods;
