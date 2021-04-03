import React from 'react';
import './App.scss';
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
    selectDefault: 1,
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
      selectDefault: 1,
    }));
  }

  render() {
    const {
      isVisible,
      goods,
      selectDefault,
    } = this.state;

    const maxLengthWord = goodsFromServer
      .sort((a, b) => b.length - a.length)[0]
      .length + 1;

    const countSelect = new Array(maxLengthWord)
      .fill(1)
      .map((num, index) => index + 1);

    return (
      <div className="app">
        <section className="title">
          <h1 className="title__text">
            {`Goods: ${goodsFromServer.length}`}
          </h1>
          {!isVisible ? (
            <button
              type="button"
              className="title__btn"
              onClick={() => {
                this.setState({ isVisible: true });
              }}
            >
              Start
            </button>
          ) : (
            <button
              type="button"
              className="title__btn"
              onClick={() => {
                this.setState({ isVisible: false });
              }}
            >
              Close all
            </button>
          )}
        </section>
        {isVisible && (
          <>
            <section className="inner">
              <article className="inner__btn btn">
                <button
                  className="btn__style"
                  type="button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  className="btn__style"
                  type="button"
                  onClick={this.sortByAlphabet}
                >
                  Sort
                </button>
                <button
                  className="btn__style"
                  type="button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
                <button
                  className="btn__style"
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>
                <select
                  value={selectDefault}
                  className="btn__style"
                  onChange={this.leaveByLength}
                >
                  {countSelect.map((_select, index) => (
                    <option
                      value={index + 1}
                      key={countSelect[index]}
                    >
                      {index + 1}
                    </option>
                  ))}
                </select>
              </article>
              <article className="inner__products products">
                <GoodsList
                  goods={goods}
                />
              </article>
            </section>
          </>
        )}
      </div>
    );
  }
}

export default App;
