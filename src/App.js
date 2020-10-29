import React from 'react';
import './App.css';
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { ListOfGoods } from './components/ListOfGoods';

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
    list: goodsFromServer,
    isActive: false,
  }

  reverse = () => {
    this.setState(prevState => ({
      list: [...prevState.list].reverse(),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      list: goodsFromServer,
    }));
  }

  sortAlphabetical = () => {
    this.setState(prevState => ({
      list: [...prevState.list].sort(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      list: [...prevState.list].sort(
        (currentItem, nextItem) => currentItem.length - nextItem.length,
      ),
    }));
  }

  toggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    const buttonClassName = cn(
      'App__start-button',
      { App__none: this.state.isActive },
    );

    const contentClassName = cn(
      'App__content',
      { App__none: !this.state.isActive },
    );

    return (
      <div className="App">
        <Button
          variant="primary"
          onClick={this.toggleActive}
          className={buttonClassName}
        >
          Start
        </Button>
        <div
          className={contentClassName}
        >
          <ListOfGoods goods={this.state.list} />
          <div className="App__buttons">
            <Button
              variant="secondary"
              onClick={this.reverse}
            >
              Reverse
            </Button>

            <Button
              variant="secondary"
              onClick={this.reset}
            >
              Reset
            </Button>

            <Button
              variant="secondary"
              onClick={this.sortAlphabetical}
            >
              Sort alphabetically
            </Button>

            <Button
              variant="secondary"
              onClick={this.sortByLength}
            >
              Sort by length
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
