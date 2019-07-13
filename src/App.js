import React from 'react';
import ListOfGoods from './ListOfGoods';

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
  constructor() {
    super();

    this.state = {
      loadBtn: false,
    };
  }

  handleClick = () => this.setState(() => (
    { loadBtn: true }
  ));

  render() {
    return (
      <div className="App">
        <h1>List of Goods</h1>
        {this.state.loadBtn
          ? <ListOfGoods goods={goodsFromServer} />
          : (<button onClick={this.handleClick}>!!! Load !!!</button>)
        }
      </div>
    );
  }
}

export default App;
