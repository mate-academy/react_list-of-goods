import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Content } from './components/Content/Content';

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
    isContentHidden: true,
  }

  toggleList = () => {
    this.setState(state => ({
      isContentHidden: !state.isContentHidden,
    }));
  }

  render() {
    const {
      isContentHidden,
    } = this.state;

    return (
      <div className="app">
        <h1>Goods</h1>
        {isContentHidden
          ? <Button name="Start" onClick={this.toggleList} />
          : <Content goods={goodsFromServer} />
        }
      </div>
    );
  }
}

export default App;
