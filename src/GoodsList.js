import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    namesList: [...this.props.items],
  };

  reverse = () => {
    this.setState(() => ({
      namesList: [...this.props.items].reverse(),
    }));
  }

  sort = () => {
    this.setState(() => ({
      namesList: [...this.props.items].sort((a, b) => (a < b ? -1 : 1)),
    }));
  }

  reset = () => {
    this.setState(() => ({
      namesList: [...this.props.items],
    }));
  }

  sortByLength = () => {
    this.setState(() => ({
      namesList: [...this.props.items].sort((a, b) => a.length - b.length),
    }));
  }

  selectLength = (items) => {
    this.setState(() => ({
      namesList: this.props.items.filter(item => items <= item.length),
    }));
  }

  render() {
    const arrOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <>
        <ol>
          {this.state.namesList.map(item => (
            <li>
              {item}
            </li>
          ))}
        </ol>

        <button type="button" onClick={this.reverse}>Reverse</button>
        <button type="button" onClick={this.sort}>Sort</button>
        <button type="button" onClick={this.reset}>Reset</button>
        <button type="button" onClick={this.sortByLength}>
          Sort by length
        </button>

        <select
          name="select"
          value={this.count}
          onChange={e => this.selectLength(e.target.value)}
        >
          {
            arrOptions.map(item => (
              <option value={item}>
                {
                  item}
              </option>
            ))}
        </select>

      </>
    );
  }
}

GoodsList.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};

export default GoodsList;
