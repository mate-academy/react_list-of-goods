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

const numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  visibleGoods: boolean,
  copyArrGoods: string[],
  secondCopyArr: string[],
  selectValue: number,
};

class App extends React.Component<{}, State> {
  state = {
    visibleGoods: false,
    copyArrGoods: [...goodsFromServer],
    secondCopyArr: [...goodsFromServer],
    selectValue: 1,
  };

  showListOFGoods = () => {
    this.setState({ visibleGoods: true });
  };

  reverseList = () => {
    this.setState((state) => ({
      copyArrGoods: state.copyArrGoods.reverse(),
    }));
  };

  sortList = (value: string) => {
    this.setState((state) => ({
      copyArrGoods: value === 'name'
        ? state.copyArrGoods.sort((a, b) => a.localeCompare(b))
        : state.copyArrGoods.sort((a, b) => a.length - b.length),
    }));
  };

  handleChange = (e:any) => {
    this.setState((state) => ({
      selectValue: e.target.value,
      copyArrGoods: state.secondCopyArr
        .filter(good => good.length <= e.target.value),
    }));
  };

  resetList = () => {
    this.setState(() => ({
      copyArrGoods: [...goodsFromServer],
      selectValue: 1,
    }));
  };

  render() {
    const { visibleGoods, copyArrGoods, selectValue } = this.state;

    return (
      <div className="App">
        { !visibleGoods && (
          <button
            type="button"
            onClick={this.showListOFGoods}
            className="button is-primary"
          >
            Start
          </button>
        )}

        { visibleGoods && (
          <div className="App__buttons">
            <button
              type="button"
              onClick={this.reverseList}
              className="button is-primary is-outlined"
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={() => (this.sortList('name'))}
              className="button is-link is-outlined"
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={() => (this.sortList(''))}
              className="button is-link is-outlined"
            >
              Sort by length
            </button>
            <div className="select is-success">
              <select
                name="select"
                onChange={(e) => (this.handleChange(e))}
                value={selectValue}
              >
                {numArr.map(item => (
                  <option
                    key={item}
                    value={item}
                  >
                    {'Filter by world length  '}
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={this.resetList}
              className="button is-danger is-outlined"
            >
              Reset
            </button>
          </div>
        )}

        { visibleGoods && (
          <div>
            <h1 className="App__title">
              Goods list:
            </h1>
            <ul>
              {copyArrGoods.map(good => (
                <li className="App__item" key={good}>{good}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
