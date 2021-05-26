import React from 'react';
import './App.css';
import ListOfGoods from './components/ListOfGoods';

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

class App extends React.PureComponent {
  state = {
    isVisible: false,
  }

  showGoodsList = () => {
    this.setState({
      isVisible: true,
    });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        {!isVisible && (
          <button
            type="button"
            onClick={this.showGoodsList}
          >
            Start
          </button>
        )}

        {isVisible && (
          <ListOfGoods goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
