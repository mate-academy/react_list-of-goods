import React from 'react';
import './App.css';
import classNames from 'classnames';
import { GoodsList } from './GoodsList';

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
    goodsVisibility: false,
  }

  start = () => {
    this.setState({ goodsVisibility: true });
  }

  reverseList = () => {

  };

  render() {
    const { goodsVisibility } = this.state;

    return (
      <div className="App">
        <button
          type="submit"
          className={classNames('button', {
            button_invisible: goodsVisibility,
          })}
          onClick={this.start}
        >
          Start
        </button>
        {goodsVisibility && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
