import React from 'react';
import classNames from 'classnames';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
  visibility: boolean;
  sortBy: string,
  isReversed: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    visibility: false,
    sortBy: '',
    isReversed: false,
  };

  showPage = () => {
    this.setState({
      visibility: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlph = () => {
    this.setState({
      sortBy: 'alph',
    });
  };

  sortByLeng = () => {
    this.setState({
      sortBy: 'leng',
    });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  listOfGoods = (goods: string[]) => {
    const {
      isReversed, sortBy,
    } = this.state;

    let goodsCopy = [...goods];

    switch (sortBy) {
      case 'alph':
        goodsCopy.sort((g1, g2) => g1.localeCompare(g2));
        break;

      case 'leng':
        goodsCopy.sort((g1, g2) => g1.length - g2.length);
        break;

      default:
        goodsCopy = [...goods];
    }

    if (isReversed) {
      goodsCopy.reverse();
    }

    return goodsCopy;
  };

  render() {
    return (
      <div className="App">
        <button
          type="button"
          onClick={this.showPage}
          className={classNames('start', this.state.visibility && 'hidden')}
        >
          Start
        </button>
        <section className={classNames(!this.state.visibility && 'hidden')}>
          <div className="buttons">
            <button type="button" onClick={this.reverse}>Reverse</button>
            <button type="button" onClick={this.sortByAlph}>Sort alphabetically</button>
            <button type="button" onClick={this.sortByLeng}>Sort by length</button>
            <button className="reset" type="button" onClick={this.reset}>Reset</button>
          </div>
          <GoodsList goods={this.listOfGoods(goodsFromServer)} />
        </section>
      </div>
    );
  }
}

export default App;
