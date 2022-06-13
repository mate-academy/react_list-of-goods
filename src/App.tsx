import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

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

interface State {
  isClicked: boolean;
  goodsList: string[];
}

class App extends React.Component<{}, State> {
  state = {
    isClicked: false,
    goodsList: [...goodsFromServer],
  };

  renderList = (goods: string[]) => {
    return goods.map(goodItem => (
      <li key={goodItem}>
        {
          goodItem
        }
      </li>
    ));
  };

  showList = (goods: string[]) => {
    if (this.state.isClicked) {
      return this.renderList(goods);
    }

    return null;
  };

  reverse = (goods: string[]) => {
    this.setState({
      goodsList: [...goods].reverse(),
    });

    return this.renderList(this.state.goodsList);
  };

  sortAlphabetically = (goods: string[]) => {
    this.setState({
      goodsList: [...goods].sort((goodItem1: string, goodItem2: string) => (
        goodItem1.localeCompare(goodItem2)
      )),
    });

    return this.renderList(this.state.goodsList);
  };

  reset = () => {
    this.setState({
      goodsList: goodsFromServer,
    });

    return this.renderList(this.state.goodsList);
  };

  sortByLength = (goods: string[]) => {
    const sortedGoods = [...goods].sort((goodItem1, goodItem2) => (
      goodItem1.length - goodItem2.length
    ));

    this.setState({
      goodsList: sortedGoods,
    });

    return this.renderList(sortedGoods);
  };

  render() {
    const showOrHideButton = this.state.isClicked
      ? null
      : (
        <button
          type="button"
          onClick={
            () => {
              this.setState({
                isClicked: true,
              });
            }
          }
        >
          Start
        </button>
      );

    return (
      <div className="App">
        <h1>Goods</h1>
        {showOrHideButton}
        <ul>
          {
            this.showList(this.state.goodsList)
          }
        </ul>
        <hr />
        <article className="button button-group">
          <button
            className="button is-link"
            type="button"
            onClick={() => {
              this.reverse(this.state.goodsList);
            }}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={() => {
              this.sortAlphabetically(this.state.goodsList);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={() => {
              this.reset();
            }}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={() => {
              this.sortByLength(this.state.goodsList);
            }}
          >
            Sort by length
          </button>
        </article>
      </div>
    );
  }
}

export default App;
