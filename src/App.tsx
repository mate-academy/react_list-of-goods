import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

const goodsFromServer: string[] = [
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

const visibleGoods = [...goodsFromServer];

type State = {
  showList: boolean,
  goodsList: string[],
};

class App extends React.Component<{}, State> {
  state = {
    showList: false,
    goodsList: visibleGoods,
  };

  showGoodsList = () => {
    this.setState({
      showList: true,
    });
  };

  render() {
    const { goodsList } = this.state;

    return (
      <div className="App container box is-centered has-text-centered">
        <h1 className="title">Goods</h1>
        {this.state.showList
          ? <GoodsList goods={goodsList} />
          : (
            <button
              type="button"
              onClick={this.showGoodsList}
              className="button is-light is-medium"
            >
              Show
            </button>
          )}
      </div>
    );
  }
}

export default App;
