import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList';

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

interface State {
  goods: string[],
  isShown: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isShown: false,
  };

  showGoods = (
    { currentTarget }: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const target = currentTarget;

    target.style.display = 'none';
    this.setState({ isShown: true });
  };

  render() {
    const { isShown, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className="btn"
          type="button"
          onClick={(event) => this.showGoods(event)}
        >
          Start
        </button>
        {isShown && <GoodList goods={goods} />}
      </div>
    );
  }
}

export default App;
