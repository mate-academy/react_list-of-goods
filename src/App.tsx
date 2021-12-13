import React from 'react';
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

interface Good {
  good: string,
  visible: boolean,
}

type State = {
  goods: Good[],
  goodsShowed: boolean,
  lengthFrom: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer.map(good => ({ good, visible: true })),
    goodsShowed: false,
    lengthFrom: 1,
  };

  showList = () => {
    this.setState({ goodsShowed: true });
  };

  setReversedList = () => {
    this.setState(prevState => ({ goods: prevState.goods.reverse() }));
  };

  setSortedAlphList = () => {
    this.setState(prevState => (
      { goods: prevState.goods.sort((prev, cur) => prev.good.localeCompare(cur.good)) }
    ));
  };

  resetState = () => {
    this.setState({ goods: goodsFromServer.map(good => ({ good, visible: true })), lengthFrom: 1 });
  };

  setSortedLngthList = () => {
    this.setState(prevState => (
      { goods: prevState.goods.sort((prev, cur) => prev.good.length - cur.good.length) }
    ));
  };

  setPrevLengthFrom = () => {
    this.setState(prevState => {
      return (prevState.lengthFrom === 1)
        ? { lengthFrom: 10 }
        : { lengthFrom: prevState.lengthFrom - 1 };
    });

    this.setSuitableList();
  };

  setNextLengthFrom = () => {
    this.setState(prevState => {
      return (prevState.lengthFrom === 10)
        ? { lengthFrom: 1 }
        : { lengthFrom: prevState.lengthFrom + 1 };
    });

    this.setSuitableList();
  };

  setSuitableList = () => {
    this.setState(prevState => {
      const { lengthFrom: len, goods: prGoods } = prevState;
      const newGoodsList = prGoods.map(goodObj => {
        const { good } = goodObj;

        return goodObj.good.length < len
          ? { good, visible: false }
          : { good, visible: true };
      });

      return ({ goods: newGoodsList });
    });
  };

  render() {
    const { goods, goodsShowed, lengthFrom } = this.state;

    return (
      <div className="App">
        <div className="screen-field">
          <h1 className="screen-field__title">Goods</h1>
          {goodsShowed ? (
            <ul className="screen-field__list">
              {goods.map(goodObj => (
                goodObj.visible && (
                  <li key={goodObj.good} className="screen-field__item">
                    {goodObj.good}
                  </li>
                )))}
            </ul>
          ) : (
            <button
              type="button"
              onClick={this.showList}
              className="button screen-field__button"
            >
              Start
            </button>
          )}
        </div>

        <div className="buttons-first-line">
          <button
            type="button"
            onClick={this.setReversedList}
            className="button"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.setSortedAlphList}
            className="button"
          >
            Alphabet sort
          </button>
          <button
            type="button"
            onClick={this.setSortedLngthList}
            className="button"
          >
            Length sort
          </button>
        </div>
        <div className="buttons-second-line">
          <button
            type="button"
            onClick={this.resetState}
            className="button"
          >
            Reset
          </button>
          <div className="button button--spinner input-spinner">
            <button
              type="button"
              onClick={this.setPrevLengthFrom}
              className="input-spinner__button"
            >
              {'<'}
            </button>
            <span>{lengthFrom}</span>
            <button
              type="button"
              onClick={this.setNextLengthFrom}
              className="input-spinner__button"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
