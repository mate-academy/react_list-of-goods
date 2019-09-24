import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';

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
    showStartButton: true,
  };

  handleClick = () => {
    this.setState({
      showStartButton: false,
    });
  };

  render() {
    const preparedGoods = goodsFromServer.map((good, index) => (
      {
        id: index,
        content: good,
      }
    ));

    return (
      <div className="App">
        {this.state.showStartButton
          ? (
            <button type="button" onClick={this.handleClick}>
          Start
            </button>
          )
          : <GoodsList goods={preparedGoods} />
        }
      </div>
    );
  }
}

export default App;
