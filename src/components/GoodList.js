import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Filter from './Filter';

class GoodList extends React.Component {
  state = {
    isShow: false,
    goods: [...this.props.goods],
  }

  start = () => {
    this.setState({ isShow: true });
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

  sortLength = () => {
    this.setState(state => (
      { ...state.goods.sort((a, b) => a.length - b.length) }));
  }

  sortAlphabetically = () => {
    this.setState(state => (
      { ...state.goods.sort((a, b) => a.localeCompare(b)) }));
  }

  reverse = () => {
    this.setState(state => (
      { ...state.goods.reverse() }));
  }

  render() {
    const { isShow, goods } = this.state;

    return (
      <>
        { !isShow
          ? (
            <button type="button" onClick={this.start}>
              start
            </button>
          )
          : (
            <>
              <div className="buttons">
                <Filter callback={this.reverse} title="reverse" />
                <Filter
                  callback={this.sortAlphabetically}
                  title="sortAlphabetically"
                />
                <Filter callback={this.reset} title="reset" />
                <Filter callback={this.sortLength} title="sort by lengths" />
              </div>
              <Select goods={goods} filter={this.filterLength} />
              <ul className="goods">
                { goods.map(good => (
                  <li key={good} className="good">{good}</li>)) }
              </ul>
            </>
          )
        }
      </>
    );
  }
}

GoodList.propTypes = {
  goods: PropTypes
    .arrayOf(PropTypes.oneOfType).isRequired,
};

export default GoodList;
