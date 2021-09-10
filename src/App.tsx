import React from 'react';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

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
  isListVisible: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    isListVisible: false,
  };

  showContent = () => {
    this.setState({
      isListVisible: true,
    });
  };

  render() {
    const { isListVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        { !isListVisible && (
          <Button name="Start" action={this.showContent} active />
        )}

        { isListVisible && (
          <GoodsList goodsFromServer={goodsFromServer} />
        )}
      </div>
    );
  }
}
