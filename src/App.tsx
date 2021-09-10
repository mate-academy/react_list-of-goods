import React from 'react';
import './App.css';
import { ListOfGoods } from './components/ListOfGoods ';
import { Button } from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  isVisibleList: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    isVisibleList: false,
  };

  showList = () => {
    this.setState({ isVisibleList: true });
  };

  render() {
    return (
      <div className="card">
        <h1>
          Goods
        </h1>

        {this.state.isVisibleList
          ? <ListOfGoods goods={goodsFromServer} />
          : (
            <Button callback={this.showList} name="start" />
          )}
      </div>
    );
  }
}

export default App;
