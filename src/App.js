import React from 'react';
import GoodsList from './GoodsList';

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
  state = { showList: false }

  handleStartClick = () => {
    this.setState({ showList: true });
  }

  render() {
    const { showList } = this.state;

    return (
      <div className="App">
        <h1>Goods 1</h1>
        <GoodsList
          show={showList}
          handleClick={this.handleStartClick}
          goods={goodsFromServer}
        />
      </div>
    );
  }
}

export default App;
