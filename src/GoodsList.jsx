import React from 'react';

import PropTypes from 'prop-types';

class GoodsList extends React.PureComponent {
  state = {
    goods: [...this.props.vegetables],
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        {goods.map(item => (
          <li key={item}>
            {item}
          </li>
        ))}

        <button
          type="button"
          onClick={() => {
            this.setState({ goods: [...goods].reverse() });
          }}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ goods: [...goods].sort() });
          }}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ goods: [...this.props.vegetables] });
          }}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ goods: [...goods]
              .sort((a, b) => a.length - b.length) });
          }}

        >
          Sort by length
        </button>
      </>
    );
  }
}

GoodsList.propTypes = {
  vegetables: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
