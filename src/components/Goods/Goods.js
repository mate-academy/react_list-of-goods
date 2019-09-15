/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsList: [...props.goods],
    };
  }

  render() {
    console.log(this.state);

    return <h1>Hello</h1>;
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
};

export default Goods;
