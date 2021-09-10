import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';
import { StartButton } from './components/StartButton';

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
  goods: string[];
  isReversed: boolean;
  sortBy: string;
  isListVisible: boolean;
  limitedLength: number;
};

class App extends React.PureComponent<{}, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: '',
    isListVisible: false,
    limitedLength: 1,
  };

  reverse = () => {
    this.setState(currentState => ({
      isReversed: !currentState.isReversed,
    }));
  };

  getSortedBy = (name: string) => {
    this.setState({ sortBy: name });
  };

  sorted = (g1 :string, g2: string) => {
    const { sortBy } = this.state;

    switch (sortBy) {
      case 'length':
        return g1.length - g2.length;
      case 'alphabet':
        return g1.localeCompare(g2);
      default:
        return 0;
    }
  };

  filtered = (good: string) => {
    const { limitedLength } = this.state;

    return good.length >= limitedLength;
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
      goods: goodsFromServer,
      isListVisible: true,
      limitedLength: 1,
    });
  };

  renderedList = () => {
    this.setState(currentState => ({ isListVisible: !currentState.isListVisible }));
  };

  viewLimitedList = () => {
    this.setState(currentState => (
      {
        limitedLength: currentState.limitedLength,
      }
    ));
  };

  changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target.value;

    // eslint-disable-next-line no-console
    console.log(target);

    this.setState({ limitedLength: +target });
  };

  render() {
    const {
      goods,
      isReversed,
      isListVisible,
    } = this.state;

    // eslint-disable-next-line no-console
    console.log('App');

    const visibleGoods = [...goods].filter(this.filtered);

    visibleGoods.sort(this.sorted);

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App d-flex justify-content-center align-items-center">
        <div>
          <h1>Goods</h1>
          {!isListVisible && <StartButton method={this.renderedList} />}

          {isListVisible && (
            <span>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => (this.getSortedBy('alphabet'))}
              >
                Sort Alphabetically
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => (this.getSortedBy('length'))}
              >
                Sort by length
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={this.reset}
              >
                Reset
              </button>
            </span>
          )}

          {isListVisible && <GoodsList goods={visibleGoods} />}

          {isListVisible && (
            <select
              name="goodsLength"
              className="btn btn-outline-secondary btn-block col-12"
              onChange={this.changeHandler}
              defaultValue="1"
            >
              {goods.map(item => (
                <option
                  value={goods.indexOf(item) + 1}
                  key={item}
                >
                  {goods.indexOf(item) + 1}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    );
  }
}

export default App;
