import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

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

const App = () => (
  <div className="App">
    <h1>Goods</h1>
    <GoodsList goods={goodsFromServer} />
  </div>
);

// @@@@  ########################   @@@@

class GoodsList extends React.Component {
  state = {
    listIsHidden: true,
    goods: this.props.goods,
  }

  changeListVisibility = () => {
    this.setState({
      listIsHidden: false,
    });
  }

  showListReversed = () => {
    this.setState(prevValue => ({
      goods: prevValue.goods.reverse(),
    }));
  }

  render() {
    const { goods, listIsHidden } = this.state;

    return (
      <div>
        <button
          hidden={!listIsHidden}
          type="button"
          onClick={this.changeListVisibility}
        >
          Start
        </button>

        <div hidden={listIsHidden}>
          <ul>
            {goods.map(good => (
              <li key={good}>{good}</li>
            ))}
          </ul>
          <div className="btns-section">
            <button
              type="button"
              onClick={this.showListReversed}
            >
              REVERSE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
