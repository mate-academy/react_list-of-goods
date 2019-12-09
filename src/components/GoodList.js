import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

class GoodList extends React.Component {
  state = {
    isShow: false,
    goods: [...this.props.goods],
  }

  reset = () => {
    this.setState(state => ({ goods: [...this.props.goods] }));
  };

  filterLength = (event) => {
    this.setState({
      goods: [...this.props.goods]
        .filter(word => word.length >= event.target.value),
    });
  }

  sortLength() {
    this.setState(state => (
      { ...state.goods.sort((a, b) => a.length - b.length) }));
  }

  sortAlphabetically() {
    this.setState(state => (
      { ...state.goods.sort((a, b) => a.localeCompare(b)) }));
  }

  reverse() {
    this.setState(state => (
      { ...state.goods.reverse() }));
  }

  render() {
    const { isShow, goods } = this.state;

    return (
      <section className="goodsList">
        <div className="buttons">
          <button
            className="button button-start"
            type="button"
            style={isShow === true ? { display: 'none' } : { display: '' }}
            onClick={() => {
              this.setState({ isShow: true });
            }}
          >
            {'start'}
          </button>
          <button
            className="button button-reverse"
            type="button"
            style={isShow === false ? { display: 'none' } : { display: '' }}
            onClick={() => {
              this.reverse();
            }}
          >
            {'reverse'}
          </button>
          <button
            className="button button-sort-alphabet"
            type="button"
            style={isShow === false ? { display: 'none' } : { display: '' }}
            onClick={() => {
              this.sortAlphabetically();
            }}
          >
            {'Sort alphabetically'}
          </button>
          <button
            className="button button-reset"
            type="button"
            style={isShow === false ? { display: 'none' } : { display: '' }}
            onClick={this.reset}
          >
            {'reset'}
          </button>
          <button
            className="button button-sort-length"
            type="button"
            style={isShow === false ? { display: 'none' } : { display: '' }}
            onClick={() => {
              this.sortLength();
            }}
          >
            {'Sort by lengths'}
          </button>
        </div>
        <Select
          goods={goods}
          isShow={isShow}
          filter={this.filterLength}
        />
        <ul
          className="goods"
          style={isShow === false ? { display: 'none' } : { display: '' }}
        >
          { goods.map(good => (<li key={good} className="good">{good}</li>)) }
        </ul>
      </section>
    );
  }
}

GoodList.propTypes = {
  goods: PropTypes
    .arrayOf(PropTypes.oneOfType).isRequired,
};

export default GoodList;
