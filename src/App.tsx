import React from 'react';
import classNames from 'classnames';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { SelectOptions } from './components/SelectOptions';

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

type State = {
  isReversed: boolean,
  sortBy: string,
  selectValue: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortBy: '',
    selectValue: 1,
  };

  sortAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetList = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      selectValue: 1,
    });
  };

  selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectValue: +event.target.value,
    });
  };

  render() {
    const {
      isReversed,
      sortBy,
      selectValue,
    } = this.state;

    const visibleGoods = goodsFromServer.filter(
      good => good.length >= selectValue,
    );

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <div className="App__container">
          <div className="buttons">
            <button
              className={classNames('button', { active: isReversed })}
              type="button"
              onClick={this.reverseList}
            >
              Reverse list
            </button>
            <button
              className={classNames(
                'button',
                sortBy === 'alphabet' ? 'active' : '',
              )}
              type="button"
              onClick={this.sortAlphabet}
            >
              Sort by name
            </button>
            <button
              className={classNames(
                'button',
                sortBy === 'length' ? 'active' : '',
              )}
              type="button"
              onClick={this.sortLength}
            >
              Sort by length
            </button>
            <button
              className="button reset"
              type="button"
              onClick={this.resetList}
            >
              Reset
            </button>
            <button className="button" type="button">
              <label htmlFor="selectList">
                {'Select: '}
                <select
                  id="selectList"
                  onChange={this.selectChange}
                  value={selectValue}
                >
                  <SelectOptions />
                </select>
              </label>
            </button>
          </div>
          <GoodsList goods={visibleGoods} />
        </div>
      </div>
    );
  }
}

export default App;
