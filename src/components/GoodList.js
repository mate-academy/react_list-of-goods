import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

class GoodList extends React.Component {
  state = {
    date: this.props.goodsFromServer,
    show: false,
  };

  show = () => {
    this.setState({
      show: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      date: [...state.date].reverse(),
    }));
  }

  sortByAlphabetically = () => {
    this.setState(state => ({
      date: [...state.date].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      date: this.props.goodsFromServer,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      date: [...state.date].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { date, show } = this.state;

    return (
      <>
        {!show
        && (
          <button
            className="ui button"
            type="button"
            onClick={this.show}
          >
            Start
          </button>
        )}
        {show
        && (
          <ul className="ui list">
            <Options
              reverse={this.reverse}
              sortByAlphabetically={this.sortByAlphabetically}
              reset={this.reset}
              sortByLength={this.sortByLength}
            />
            {date.map(good => (
              <li key={good} className="ui bulleted list">
                {good}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

GoodList.propTypes = {
  goodsFromServer: PropTypes.arrayOf.isRequired,
  // show: PropTypes.bool.isRequired,
};

export default GoodList;
