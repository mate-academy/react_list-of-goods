import React from 'react';
import './App.css';

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
  goodsArr: string[],
  showList: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    goodsArr: goodsFromServer,
    showList: false,
    isReversed: false,
    sortBy: '',
  };

  showListed = () => {
    this.setState((prevState) => (
      { showList: !prevState.showList }
    ));
  };

  sortAbc = () => {
    this.setState({ sortBy: 'abc' });
  };

  sortLength = () => {
    this.setState({ sortBy: 'length' });
  };

  revers = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      goodsArr,
      showList,
      isReversed,
      sortBy,
    } = this.state;
    const visibleGoods = [...goodsArr];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'abc':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
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
        {!showList && (
          <button
            type="button"
            className="button"
            onClick={this.showListed}
          >
            Start
          </button>
        )}
        {showList && (
          <>
            <ul className="list">
              {visibleGoods.map((item) => (
                <li key={item} className="list-item">{item}</li>
              ))}
            </ul>

            <button
              type="button"
              className="button"
              onClick={this.revers}
            >
              Reverse
            </button>
            <button
              type="button"
              className="button"
              onClick={this.sortAbc}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="button"
              onClick={this.sortLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              className="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
