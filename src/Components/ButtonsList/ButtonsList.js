import React from 'react';
import PropTypes from 'prop-types';
import GoodsList from '../GoodsList/GoodsList';

class ButtonsList extends React.Component {
  state = {
    list: this.props.goodsList,
  };

  handleClick = () => {
    this.setState({ list: this.props.goodsList.reverse() });
  }

  handleSortLength = () => {
    // eslint-disable-next-line max-len
    const sortedByLength = [...this.props.goodsList].sort((a, b) => a.length - b.length);

    this.setState({ list: sortedByLength });
  }

  handleSortAlphabetically = () => {
    this.setState({ list: [...this.props.goodsList].sort() });
  }

  handleReset = () => {
    this.setState({ list: this.props.goodsList });
  }

  handleSelectChange = (itemId) => {
    const goodIndex = +itemId + 1;
    const items = [...this.state.list].slice(0, goodIndex);

    this.setState(prevState => ({ list: items }));
  }

  render() {
    const goodsArr = this.state.list;

    return (
      <>
        <button
          type="button"
          onClick={this.handleClick}
        >
        Reverse
        </button>

        <button
          type="button"
          onClick={this.handleSortLength}
        >
        Sort by length
        </button>

        <button
          type="button"
          onClick={this.handleSortAlphabetically}
        >
        Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.handleReset}
        >
        Reset
        </button>

        <select onChange={event => this.handleSelectChange(event.target.value)}>
          {goodsArr.map((item, index) => (
            <option
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              value={index}
            >
              {index + 1}
            </option>
          ))}
        </select>

        <GoodsList list={this.state.list} />
      </>
    );
  }
}

ButtonsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonsList;
