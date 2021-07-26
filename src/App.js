import React from 'react';
import classNames from 'classnames';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    showGoods: false,
  }

  render() {
    return (
      <>
        <button
          type="button"
          className={classNames('btn btn-danger btn-start', {
            'd-none': this.state.showGoods === true,
          })}
          onClick={() => {
            this.setState(state => ({
              showGoods: !state.showGoods,
            }));
          }}
        >
          start
        </button>
        {this.state.showGoods
          ? <GoodsList goods={goodsFromServer} />
          : null
        }
      </>
    );
  }
}

export default App;
