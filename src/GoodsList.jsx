import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    sortBy: '',
    reversed: false,
  }

  render() {
    const { goods } = this.props;
    const { sortBy, reversed } = this.state;
    const goodsToRender = [...goods];

    goodsToRender.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (reversed) {
      goodsToRender.reverse();
    }

    return (
      <div>
        <ul>
          {goodsToRender.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => this.setState(state => ({
            reversed: !state.reversed,
          }))}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => this.setState({ sortBy: 'alphabet' })}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={() => this.setState({
            sortBy: '',
            reversed: false,
          })}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => this.setState({ sortBy: 'length' })}
        >
          Sort by lenght
        </button>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
