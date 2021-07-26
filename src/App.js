import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Button } from 'react-bootstrap';
import GoodList from './components/GoodList/GoodList';

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

class App extends Component {
  state={
    isListGenerate: false,
  }

  listGenerateHandler() {
    this.setState({
      isListGenerate: true,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        { this.state.isListGenerate || (
          <Button
            onClick={() => this.listGenerateHandler()}
          >
            Generate List
          </Button>
        )
        }
        { this.state.isListGenerate
          && <GoodList goodsList={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
