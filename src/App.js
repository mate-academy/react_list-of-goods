import React from 'react';

// import './App.css';
import { GoodsList } from './components/GoodsList';

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
    showGoods: false,
    goods: goodsFromServer,
    reversed: false,
    sortBy: null,
  };

  showGoodsList = () => {
    this.setState({
      showGoods: true,
    });
  };

  sort = (sortBy) => {
    this.setState({
      sortBy,
      reversed: false,
    });
  };

  reverse = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  };

  reset = () => {
    this.setState({
      sortBy: null,
      reversed: false,
    });
  };

  renderButton = (label, handler) => (
    <button
      type="button"
      onClick={handler}
    >
      { label }
    </button>
  );

  render() {
    const { showGoods, goods, reversed, sortBy } = this.state;

    const preparedGoods = [...goods];

    preparedGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'name':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (reversed) {
      preparedGoods.reverse();
    }

    return (
      <div className="App">
        {
          showGoods ? (
            <>
              <GoodsList goods={preparedGoods} />

              { this.renderButton('Reverse', this.reverse.bind(this)) }
              { this.renderButton('Sort', this.sort.bind(this, 'name')) }
              { this.renderButton(
                'Sort by length', this.sort.bind(this, 'length'),
              )}
              { this.renderButton('Reset', this.reset.bind(this)) }
            </>
          ) : (
            this.renderButton('Show Goods', this.showGoodsList.bind(this))
          )
        }
      </div>
    );
  }
}

export default App;
