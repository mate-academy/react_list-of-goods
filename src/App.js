import React, { PureComponent } from 'react';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';
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

class App extends PureComponent {
  state = {
    isVisible: true,
  }

  toStart = () => {
    this.setState(preveState => ({
      isVisible: !preveState.isVisible,
    }));
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          List of goods
        </h1>
        {isVisible
          ? (
            <GoodsList goods={goodsFromServer} />
          )
          : (
            <Button
              text="Start"
              onClick={() => this.toStart()}
              className="button isCenter is-success"
            />
          )
        }
      </div>
    );
  }
}

export default App;
