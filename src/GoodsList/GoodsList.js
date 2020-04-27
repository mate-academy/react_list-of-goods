import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    hideList: true,
    initialGoodsList: [...this.props.goodsList],
    goodsList: [...this.props.goodsList],
  }

  showList = () => {
    this.setState({
      hideList: false,
    });
  }

  reverseList = () => {
    this.state.goodsList.reverse();
    this.setState({});
  }

  alphabetically = () => {
    this.state.goodsList.sort((a, b) => (
      a.localeCompare(b)
    ));
    this.setState({});
  }

  resetList = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.initialGoodsList],
    }));
  }

  sortByLength = () => {
    this.state.goodsList.sort((a, b) => (
      a.length - b.length
    ));
    this.setState({});
  }

  filterByLength = (e) => {
    e.preventDefault();

    const length = document.getElementById('filterByLength').value;

    this.setState({
      initialGoodsList: this.props.goodsList.filter(good => (
        good.length >= length
      )),
    });

    this.setState(prevState => ({
      goodsList: [...prevState.initialGoodsList],
    }));
  }

  render() {
    const { goodsList } = this.state;
    const { hideList } = this.state;

    return (
      <div>
        {hideList && (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}
        {!hideList && (
          <>
            <ul>
              {goodsList.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.alphabetically}
            >
              Alphabetically
            </button>
            <button
              type="button"
              onClick={this.resetList}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <br />
            <form onSubmit={this.filterByLength}>
              <input
                id="filterByLength"
                type="number"
                min="1"
                max="10"
                defaultValue="1"
                required
              />
              <button type="button">
                Filter by length
              </button>
            </form>
          </>
        )}
      </div>
    );
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
