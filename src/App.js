import React from 'react';
import './App.css';
// import { GoodsList } from './components/GoodsList';
import classNames from 'classnames';

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
    isVisible: false,
    goods: goodsFromServer,
    sortBy: '',
    reverse: false,
    selectedGoods: [],
  }

  addSelectedGoods = (goods) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: [...selectedGoods, goods],
    });
  }

  removeSelectedGoods = (goods) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter(el => el !== goods),
    });
  }

  deleteSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  start = () => {
    this.setState({ isVisible: true });
  }

  close = () => {
    this.setState({ isVisible: false });
  }

  reverse = () => {
    this.setState({ reverse: true });
  }

  sortAlf = () => {
    this.setState({ sortBy: 'alph' });
  }

  sortLeng = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      sortBy: '',
      reverse: false,
    });
  }

  render() {
    const { isVisible, goods, sortBy, reverse, selectedGoods } = this.state;
    const goodsVisible = [...goods];

    if (reverse) {
      goodsVisible.reverse();
    }

    goodsVisible.sort((a, b) => {
      switch (sortBy) {
        case 'alph':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    return (
      <>
        <div className="App">
          <h1 className="title">
            {`Selected goods: ${selectedGoods.join(', ')}`}
          </h1>
          {!isVisible ? (
            <button className="start" type="button" onClick={this.start}>
              Start
            </button>
          )
            : (
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
             ${selectedGoods.length}`}
                </p>
                <button
                  className="close-all"
                  type="button"
                  onClick={this.close}
                >
                  Close All
                </button>

                <ul className="list">
                  {goodsVisible.map(el => (
                    <li key={el} className="item">
                      <span className={`item-text, ${
                        selectedGoods.includes(el)
                          ? 'active' : ''}`}
                      >
                        {el}
                      </span>
                      <div className="buttons">
                        <button
                          type="button"
                          onClick={() => this.addSelectedGoods(el)}
                          className={classNames(`add`, {
                            addSelected: selectedGoods.includes(el) === true,
                          })}
                        >
                          Select
                        </button>
                        <button
                          type="button"
                          onClick={() => this.removeSelectedGoods(el)}
                          className="remove"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          {isVisible && (
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

      </>
    );
  }
}

export default App;
