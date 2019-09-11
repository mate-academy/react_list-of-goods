import React, { Component } from 'react';
import Button from './components/Button/Button';
import Goods from './components/Goods/Goods';

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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: true,
    };
    this.onClickStart = this.onClickStart.bind(this);
  }

  onClickStart() {
    this.setState({
      isStart: false,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.isStart
          ? (
            <Button
              text="Start"
              onClick={this.onClickStart}
            />
          )
          : <Goods goods={goodsFromServer} />}
      </div>
    );
  }
}
