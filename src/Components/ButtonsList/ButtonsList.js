import React from 'react';
import PropTypes from 'prop-types';
import GoodsList from '../GoodsList/GoodsList';

class ButtonsList extends React.Component {
    state = { list: this.props.goodsList };

    reverseClick = () => {
      this.setState({ list: this.props.goodsList.reverse() });
    }

    sortlength = () => {
      this.setState({ list: [...this.props.goodsList]
        .sort((a, b) => b.length - a.length) });
    }

    sortAlphb = () => {
      this.setState({ list: [...this.props.goodsList].sort() });
    }

    reset = () => {
      this.setState({ list: this.props.goodsList });
    }

    selectNum = (itemId) => {
      const goodIndex = +itemId + 1;
      // eslint-disable-next-line react/no-access-state-in-setstate
      const items = [...this.state.list].slice(0, goodIndex);

      this.setState({ list: items });
    }

    render() {
      return (
        <>
          <button
            type="button"
            onClick={this.reverseClick}
          >
        Reverse
          </button>

          <button
            type="button"
            onClick={this.sortlength}
          >
        Sort by length
          </button>

          <button
            type="button"
            onClick={this.sortAlphb}
          >
        Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.reset}
          >
        Reset
          </button>

          <select onChange={event => this.selectNum(event.target.value)}>
            {this.state.list.map((item, index) => (
              <option
                value={index}
                selected
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
