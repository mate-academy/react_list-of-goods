import React from 'react';
import Select from 'react-select';
import goodsPropTypes from './PropTypes/PropTypes';
import './List.css';

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
];

class List extends React.Component {
  state = {
    goods: [...this.props.goods],
    selectedOption: null,
  }

  onClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  onClickSort =() => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  onClickReset = () => {
    this.setState(prevState => ({
      goods: [...this.props.goods],
    }));
  }

  onClickSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  handleSelectChange = (selectedOption) => {
    this.setState({
      selectedOption,
      goods: [...this.props.goods]
        .filter(item => item.length >= selectedOption.value),

    });
  }

  render() {
    const { goods, selectedOption } = this.state;

    return (
      <>
        <div className="buttons-container">
          <button
            className="button"
            type="button"
            onClick={this.onClickReverse}
          >
            Reverse the order
          </button>
          <button
            className="button"
            type="button"
            onClick={this.onClickSort}
          >
            Alphabetical order
          </button>
          <button
            className="button"
            type="button"
            onClick={this.onClickSortByLength}
          >
            Sort by length
          </button>
          <button
            className="button"
            type="button"
            onClick={this.onClickReset}
          >
            RESET
          </button>
          <Select
            className="select"
            value={selectedOption}
            onChange={this.handleSelectChange}
            options={options}
          />
        </div>
        <ul>
          {goods.map(item => (
            <li
              key={item}
              className="list-item"
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

List.propTypes = goodsPropTypes;

export default List;
