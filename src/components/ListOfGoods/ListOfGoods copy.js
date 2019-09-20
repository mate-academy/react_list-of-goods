import React from 'react';
import PropTypes from 'prop-types';
import './ListOfGoods.css';

class ListOfGoods extends React.PureComponent {
  state = {
    list: [...this.props.goods],
    nativeList: [...this.props.goods],
    // eslint-disable-next-line react/no-unused-state
    selectedOption: 1,
  }

  reset = () => (
    this.setState(prevState => (
      {
        list: [...prevState.nativeList],
      }
    ))
  )

  reverseList = () => (
    this.setState(prevState => (
      {
        list: [...prevState.list].reverse(),
      }
    ))
  );

  abcList = () => (
    this.setState(prevState => (
      {
        list: [...prevState.list].sort(),
      }
    ))
  );

  listLength = () => (
    this.setState(prevState => (
      {
        list: [...prevState.list].sort((a, b) => a.length - b.length),
      }
    ))
  )

  handleSelect = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      // eslint-disable-next-line react/no-unused-state
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
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              type="button"
              className="button-actions"
              onClick={this.abcList}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="button-actions"
              onClick={this.listLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              className="button-actions"
              onClick={this.reset}
            >
              Reset
            </button>
            <select
              className="select"
              name="good-length"
              id="selectedLength"
              onChange={this.handleSelect}
              value={this.selectedOption}
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
