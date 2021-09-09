import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.scss';

import { GoodsList } from './components/GoodsList';

const goodsFromServer: string[] = [
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

interface State {
  isListVisible: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    isListVisible: true,
  };

  seeTheListOfGoods = () => {
    this.setState({ isListVisible: false });
  };

  render() {
    const { isListVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {!isListVisible
          ? (
            <GoodsList goods={goodsFromServer} />
          )
          : (
            <Button
              type="button"
              variant="info"
              className="App__button"
              onClick={this.seeTheListOfGoods}
            >
              Start
            </Button>
          )}
      </div>
    );
  }
}

export default App;
