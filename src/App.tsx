import classNames from 'classnames';
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

enum ShowedBy {
  Reversed = 'reversed',
  SortedAlph = 'sortedByAlph',
  SortedLngth = 'sortedByLen',
}

type State = {
  goods: string[],
  isGoodsShowed: boolean,
  lastChange: null | ShowedBy,
  lengthFrom: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isGoodsShowed: false,
    lastChange: null,
    lengthFrom: 1,
  };

  showList = () => {
    this.setState({ isGoodsShowed: true });
  };

  setGoodsBy = (showedBy: ShowedBy) => {
    this.setState(state => {
      switch (showedBy) {
        case ShowedBy.Reversed:
          return { goods: state.goods.reverse(), lastChange: ShowedBy.Reversed };

        case ShowedBy.SortedAlph:
          return {
            goods: state.goods.sort((prev, cur) => prev.localeCompare(cur)),
            lastChange: ShowedBy.SortedAlph,
          };

        case ShowedBy.SortedLngth:
          return {
            goods: state.goods.sort((prev, cur) => prev.length - cur.length),
            lastChange: ShowedBy.SortedLngth,
          };

        default:
          return { ...state };
      }
    });
  };

  resetState = () => {
    this.setState({ goods: [...goodsFromServer] });
  };

  setPrevLengthFrom = () => {
    this.setState(prevState => {
      return (prevState.lengthFrom === 1)
        ? { lengthFrom: 10 }
        : { lengthFrom: prevState.lengthFrom - 1 };
    });
  };

  setNextLengthFrom = () => {
    this.setState(prevState => {
      return (prevState.lengthFrom === 10)
        ? { lengthFrom: 1 }
        : { lengthFrom: prevState.lengthFrom + 1 };
    });
  };

  render() {
    const { goods, isGoodsShowed, lengthFrom } = this.state;
    const { setGoodsBy, setPrevLengthFrom, setNextLengthFrom } = this;
    const goodsByLength = goods.filter(good => good.length >= lengthFrom);

    return (
      <div className="App">
        <div className="screen-field">
          <h1 className="screen-field__title">Goods</h1>
          {isGoodsShowed ? (
            <ul className="screen-field__list">
              {goodsByLength.map(good => (
                <li key={good} className="screen-field__item">
                  {good}
                </li>
              ))}
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
            disabled={!isGoodsShowed}
            onClick={() => (setGoodsBy(ShowedBy.Reversed))}
            className="button"
          >
            Reverse
          </button>
          <button
            type="button"
            disabled={!isGoodsShowed}
            onClick={() => (setGoodsBy(ShowedBy.SortedAlph))}
            className="button"
          >
            Alphabet sort
          </button>
          <button
            type="button"
            disabled={!isGoodsShowed}
            onClick={() => (setGoodsBy(ShowedBy.SortedLngth))}
            className="button"
          >
            Length sort
          </button>
        </div>
        <div className="buttons-second-line">
          <button
            type="button"
            disabled={!isGoodsShowed}
            onClick={this.resetState}
            className="button"
          >
            Reset
          </button>
          <div className={classNames(
            'button button--spinner',
            'input-spinner',
            { 'button--disabled': !isGoodsShowed },
          )}
          >
            <button
              type="button"
              disabled={!isGoodsShowed}
              onClick={setPrevLengthFrom}
              className="input-spinner__button"
            >
              {'<'}
            </button>
            <span>{lengthFrom}</span>
            <button
              type="button"
              disabled={!isGoodsShowed}
              onClick={setNextLengthFrom}
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
