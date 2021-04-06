import React from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import { GoodsList } from './components/GoodsList/GoodsList';

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
    goods: goodsFromServer,
    isVisible: false,
    selectDefault: '1',
    sortAlphabet: true,
    sortLength: true,
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((goodA, goodB) => (
        prevState.sortAlphabet
          ? goodA.localeCompare(goodB)
          : goodB.localeCompare(goodA)
      )),
      sortAlphabet: !prevState.sortAlphabet,
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((goodA, goodB) => (
        prevState.sortLength
          ? goodA.length - goodB.length
          : goodB.length - goodA.length
      )),
      sortLength: !prevState.sortLength,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  leaveByLength = ({ target }) => {
    this.setState({
      selectDefault: target.value,
      goods: goodsFromServer
        .filter(product => product.length >= target.value),
    });
  }

  reset = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: goodsFromServer,
      selectDefault: '1',
    }));
  }

  render() {
    const {
      isVisible,
      goods,
      selectDefault,
    } = this.state;

    return (
      <div className="app">
        <section className="title">
          <h1 className="title__text">
            {`Goods: ${goodsFromServer.length}`}
          </h1>
          <button
            type="button"
            className="title__btn"
            onClick={() => {
              this.setState({ isVisible: !isVisible });
            }}
          >
            {isVisible ? 'Close all' : 'Start'}
          </button>
        </section>
        {isVisible && (
          <section className="inner">
            <article className="inner__btn btn">
              <Button
                reverse={this.reverse}
                sortByAlphabet={this.sortByAlphabet}
                sortByLength={this.sortByLength}
                reset={this.reset}
                leaveByLength={this.leaveByLength}
                goodsFromServer={goodsFromServer}
                selectDefault={selectDefault}
              />
            </article>
            <article className="inner__products products">
              <GoodsList
                goods={goods}
              />
            </article>
          </section>
        )}
      </div>
    );
  }
}

export default App;
