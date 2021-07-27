import React from 'react';
import './App.css';
import { Button } from './components/Button';
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
    isListVisible: false,
  }

  changeListVisibility = () => (
    this.setState({ isListVisible: true })
  );

  render() {
    const { isListVisible } = this.state;

    return (
      <div className="App">
        { isListVisible
          ? <GoodsList goods={goodsFromServer} />
          : (
            <Button
              type="button"
              onClick={this.changeListVisibility}
              className="hide"
              name="Start"
            />
          )
        }
      </div>
    );
  }
}

export default App;
