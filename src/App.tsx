import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Button } from './Button';
import { MainContent } from './MainContent';

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
  showMainBlock: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    showMainBlock: false,
  };

  showContent = () => {
    this.setState({
      showMainBlock: true,
    });
  };

  render() {
    const { showMainBlock } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        { !showMainBlock && <Button name="Start" action={this.showContent} active />}
        { showMainBlock && (
          <MainContent goodsFromServer={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
