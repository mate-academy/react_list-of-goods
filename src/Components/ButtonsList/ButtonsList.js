import React from 'react';
import PropTypes from 'prop-types';
import GoodsList from '../GoodsList/GoodsList';

class ButtonsList extends React.Component {
  state = {
    list: this.props.goodsList,
    lengthToggle: true,
    sortAlphabetically: true,
  };

  handleClick = () => {
    this.setState({ list: this.props.goodsList.reverse() });
  }

  handleSortLength = () => {
    const { lengthToggle } = this.state;

    this.handleSortLengthFirst = () => {
      const sortedByLength = [...this.props.goodsList]
        .sort((a, b) => a.length - b.length);

      this.setState({
        list: sortedByLength,
        lengthToggle: false,
      });
    };

    this.handleSortLengthSecond = () => {
      const sortedByLengthBack = [...this.props.goodsList]
        .sort((a, b) => b.length - a.length);

      this.setState({
        list: sortedByLengthBack,
        lengthToggle: true,
      });
    };

    lengthToggle ? this.handleSortLengthFirst() : this.handleSortLengthSecond();
  }

  handleSortAlphabetically = () => {
    const { sortAlphabetically } = this.state;

    this.sortAlphabeticallyFirst = () => {
      this.setState({
        list: [...this.props.goodsList].sort(),
        sortAlphabetically: false,
      });
    };

    this.sortAlphabeticallyReverse = () => {
      this.setState({
        list: [...this.props.goodsList].sort().reverse(),
        sortAlphabetically: true,
      });
    };

    sortAlphabetically
      ? this.sortAlphabeticallyFirst()
      : this.sortAlphabeticallyReverse();
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
    const { list } = this.state;

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
          {list.map((item, index) => (
            <option
              key={item}
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
