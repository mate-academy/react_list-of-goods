import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

const goodsFromServer = {
  a: [
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
  ],
  b: [
    'Cookies',
    'Parrots',
    'Bulbs',
    'Tables',
    'Chair',
  ],
};

class App extends React.Component {
  state = {
    isListVisible: false,
    currentKey: 'a',
  }

  startHandler = () => {
    this.setState({
      isListVisible: true,
    });
  }

  toggleGoodsHandler = () => {
    const { currentKey } = this.state;
    const nextKey = (currentKey === 'a') ? 'b' : 'a';

    this.setState({
      currentKey: nextKey,
    });
  }

  render() {
    const { isListVisible, currentKey } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <p>
          У мене є питання
          <br />
          {' '}
          От є в мене батьківський компонент і він може в якийсь момент
          передати інший масив у props. Я хочу щоб мій дитячий компонент
          в такому випадку теж змінив свій список. Як це реалізувати?
        </p>
        <button
          type="button"
          onClick={this.startHandler}
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.toggleGoodsHandler}
        >
          Toggle source goods
        </button>

        {isListVisible && (
          <GoodsList
            goods={goodsFromServer[currentKey]}
          />
        )}
      </div>
    );
  }
}

export default App;
