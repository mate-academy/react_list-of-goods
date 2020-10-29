import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

class GoodsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { list: [...props.list] };
  }

  reversedList = () => {
    this.setState(prevState => ({
      list: prevState.list.reverse(),
    }));
  }

  sortByAlphabetically = () => {
    this.setState(prevState => ({
      list: prevState.list.sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState(
      {
        list: [...this.props.list],
      },
    );
  }

  sortByLength = () => {
    this.setState(prevState => ({
      list: prevState.list.sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { list } = this.state;

    return (
      <div className="list">
        <button
          className="list__button"
          type="button"
          onClick={this.reversedList}
        >
          Reverse
        </button>

        <button
          className="list__button"
          type="button"
          onClick={this.sortByAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          className="list__button"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <button
          className="list__button"
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <h1 className="list__name">Goods</h1>
        <ul className="list__goods">
          {list.map(item => <li className="list__item" key={item}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
