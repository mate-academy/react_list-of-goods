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
  }

  sortAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  leaveByLength = ({ target }) => {
    this.setState({
      goods: goodsFromServer
        .filter(product => product.length >= target.value),
    });
  }

  reset = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: goodsFromServer,
    }));
  }

  render() {
    const {
      isVisible,
      goods,
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
                  onClick={this.sortAlphabet}
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
                  className="btn__style"
                  type="button"
                  onClick={this.leaveByLength}
                >
                  {countSelect.map((_select, index) => (
                    <option
                      value={countSelect[index]}
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
