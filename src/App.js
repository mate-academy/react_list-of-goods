import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
// import classNames from 'classnames';

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
    isVisiblePage: false,
    goods: goodsFromServer,
    sortBy: '',
    opposite: false,
    selectedGoods: [],
  }

  addSelectedGoods = (goods) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, goods],
    }));
  }

  removeSelectedGoods = (goods) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(arr => arr !== goods),
    }));
  }

  deleteSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  start = () => {
    this.setState({ isVisiblePage: true });
  }

  close = () => {
    this.setState({ isVisiblePage: false });
  }

  sortAlf = () => {
    this.setState({ sortBy: 'alph' });
  }

  sortLeng = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  reverse = () => {
    this.setState({ opposite: true });
  }

  reset = () => {
    this.setState({
      sortBy: '',
      opposite: false,
    });
  }

  render() {
    const { isVisiblePage,
      goods,
      sortBy,
      opposite,
      selectedGoods } = this.state;
    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alph':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (opposite) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">
          {`Selected goods: ${selectedGoods.join(', ')}`}
        </h1>
        {!isVisiblePage ? (
          <button className="start" type="button" onClick={this.start}>
            Start
          </button>

        ) : (
          <>
            {selectedGoods.length !== 0 && (
              <button
                type="button"
                className="cross"
                onClick={this.deleteSelectedGoods}
              >
                Х
              </button>
            )}

            <p className="selected">
              {`Selected: 
                ${selectedGoods.length}`
              }
            </p>

            <button
              className="close-all"
              type="button"
              onClick={this.close}
            >
              Close All
            </button>

            <GoodsList
              visibleGoods={visibleGoods}
              selectedGoods={selectedGoods}
              addSelectedGoods={this.addSelectedGoods}
              removeSelectedGoods={this.removeSelectedGoods}
            />
          </>
        )}
        {isVisiblePage && (
          <>
            <button
              className="m-btn modify-btn"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              className="m-btn
              modify-btn"
              type="button"
              onClick={this.sortAlf}
            >
              Sort A-Z
            </button>
            <button
              className="m-btn modify-btn"
              type="button"
              onClick={this.sortLeng}
            >
              Sort by length
            </button>
            <button
              className="m-btn modify-btn"
              type="button"
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
