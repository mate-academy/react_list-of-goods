import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const GoodList = ({ goodsArr }) => (
  <ul className="list-group">
    {goodsArr.map(el => (
      <li className="list-group-item" key={el}>{el}</li>
    ))
    }
  </ul>
);

GoodList.propTypes = {
  goodsArr: PropTypes.arrayOf.isRequired,
};

class App extends React.Component {
  state = {
    goodsArr: goodsFromServer,
    visible: false,
    chooseSelect: 1,
  }

  startClick = () => {
    this.setState(state => ({
      visible: true,
    }));
  }

  reverseClick = () => {
    this.setState(state => ({
      goodsArr: state.goodsArr.reverse(),
    }));
  }

  sortClick = () => {
    this.setState(state => ({
      goodsArr: [...state.goodsArr].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetClick = () => {
    this.setState({
      chooseSelect: 1,
      goodsArr: goodsFromServer,
    });
  }

  sortLengthClick = () => {
    this.setState(state => ({
      goodsArr: [...state.goodsArr].sort((a, b) => a.length - b.length),
    }));
  }

  selectNumber = (index) => {
    this.setState({
      chooseSelect: index,
      goodsArr: goodsFromServer.filter(el => el.length > index),
    });
  }

  render() {
    const limitLetter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="app">
        {!this.state.visible ? (
          <button
            type="button"
            onClick={this.startClick}
            className="btn btn-primary"
          >
            Start
          </button>
        ) : (
          <div>
            <div className="btn-panel">
              <button
                type="button"
                onClick={this.reverseClick}
                className="btn btn-danger"
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortClick}
                className="btn btn-primary"
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.resetClick}
                className="btn btn-success"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortLengthClick}
                className="btn btn-info"
              >
                Sort by length
              </button>
              <select
                value={this.state.chooseSelect}
                onChange={e => this.selectNumber(e.target.value)}
                className="btn btn-warning form-control"
              >
                {limitLetter.map(option => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <GoodList goodsArr={this.state.goodsArr} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
