import React from 'react';
import PropTypes from 'prop-types';
import { GoodItem } from './GoodItem';
import { Select } from './Select';

export class GoodsList extends React.Component {
  state = {
    // resetGoods: [...this.props.initialGoods], // TODO: move to constants
    currentGoods: this.props.initialGoods,
    selectValue: 1,
  };

  options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  handleReverseButton = () => (
    this.setState(prevState => ({
      currentGoods: [...prevState.currentGoods]
        .reverse(),
    }))
  );

  handleSortButton = () => (
    this.setState(prevState => ({
      currentGoods: [...prevState.currentGoods]
        .sort((a, b) => (
          a.localeCompare(b)
        )),
    }))
  );

  handleResetButton = () => (
    this.setState({
      currentGoods: this.props.initialGoods,
      selectValue: 1,
    })
  );

  handleSortLButton = () => (
    this.setState(prevState => ({
      currentGoods: [...prevState.currentGoods]
        .sort((a, b) => (a.length - b.length)),
    }))
  );

  handleSelectChanged = val => (
    this.setState({
      currentGoods: this.props.initialGoods
        .filter(item => item.length >= val),
      selectValue: val,
    })
  )

  render() {
    return (
      <>
        <button
          type="button"
          onClick={this.handleReverseButton}
        >
          Reverse
        </button>
        <br />
        <button
          type="button"
          onClick={this.handleSortButton}
        >
          Sort alphabetically
        </button>
        <br />
        <button
          type="button"
          onClick={this.handleResetButton}
        >
          Reset
        </button>
        <br />
        <button
          type="button"
          onClick={this.handleSortLButton}
        >
          Sort by length
        </button>
        <br />
        <Select
          optionsNumbers={this.options}
          setValue={this.state.selectValue}
          onSelect={this.handleSelectChanged}
        />
        <br />
        <ul>
          {this.state.currentGoods.map(good => (
            <GoodItem
              key={good}
              good={good}
            />
          ))}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  initialGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
