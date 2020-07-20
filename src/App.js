import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import GoodsList from './components/GoodsList';

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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    show: false,
  }

  start = () => {
    this.setState(prev => ({
      show: !prev.show,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className="btn btn-danger"
          type="button"
          onClick={this.start}
          style={!this.state.show
            ? { display: 'initial' }
            : { display: 'none' }
          }
        >
          Start
        </button>
        <div>
          {!this.state.show ? '' : <GoodsList goods={this.state.goods} />}
        </div>
      </div>
    );
  }
}

export default App;

GoodsList.propTypes = {
  goods: PropTypes.instanceOf(Array).isRequired,
};
