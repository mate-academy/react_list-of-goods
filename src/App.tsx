import * as React from 'react';
import './App.css';
import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';

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

type State = {
  goods: string[],
  goodsIsVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    goodsIsVisible: false,
  };

  showGoods = () => {
    this.setState(state => ({
      goodsIsVisible: !state.goodsIsVisible,
    }));
  };

  render() {
    const { goods, goodsIsVisible } = this.state;

    return (
      <div className="App">
        <div className="title">
          Goods
        </div>
        <button type="button" className={goodsIsVisible ? 'startButton' : 'startButton startButton--notStarted'} onClick={this.showGoods}>{goodsIsVisible ? 'stop' : 'start'}</button>

        {goodsIsVisible
          ? <ListOfGoods list={goods} />
          : ''}
      </div>
    );
  }
}

export default App;
