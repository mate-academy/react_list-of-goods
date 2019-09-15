import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';
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

class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    isStartActive: true,
  }

  handleStartClick = () => {
    this.setState({
      isStartActive: false,
    });
  }

  render() {
    const { goods, isStartActive } = this.state;

    return (
      <div className="container">
        <button
          type="button"
          onClick={this.handleStartClick}
          className={
            isStartActive
              ? 'button-start'
              : 'button--inactive'
          }
        >
          Start
        </button>
        {!isStartActive && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
