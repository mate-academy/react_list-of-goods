import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';
import { ButtonToggle } from './components/ButtonToggle/ButtonToggle';

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
    display: '',
    height: 0,
  }

  toggleButton = () => {
    this.setState(prevState => ({
      display: `${prevState.display}none`,
      height: `${prevState.height + 650}px`,
    }));
  }

  render() {
    const { display, height } = this.state;

    return (
      <div className="App">
        <header className="header">
          <h1>Goods List</h1>
        </header>
        <section className="main">
          <ButtonToggle toggleButton={this.toggleButton} display={display} />
          <GoodsList goods={goodsFromServer} height={height} />
        </section>
      </div>
    );
  }
}

export default App;
