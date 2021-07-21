import React from 'react';
import { RenderGoods } from './RenderGoods';
import { ButtonStart } from './ButtonStart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    isStart: false,
  }

  renderListOfGoods = () => {
    this.setState({ isStart: true });
  };

  render() {
    return (
      <div className="App">
        {this.state.isStart
          ? <RenderGoods goodsFromServer={goodsFromServer} />
          : <ButtonStart renderListOfGoods={this.renderListOfGoods} />}
      </div>
    );
  }
}

export default App;
