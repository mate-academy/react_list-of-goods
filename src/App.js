import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList/GoodsList';

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
    sortedBy: '',
    isReversed: false,
    isVisible: false,
  }

  showList = () => {
    this.setState({ isVisible: true });
  }

  hideList = () => {
    this.setState({ isVisible: false });
  }

  nameSortList = () => {
    this.setState({ sortedBy: 'name' });
  }

  lengthSortList = () => {
    this.setState({ sortedBy: 'length' });
  }

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  resetList = () => {
    this.setState({
      sortedBy: '',
      isReversed: false,
    });
  }

  render() {
    const { goods, isVisible, sortedBy, isReversed } = this.state;
    const copyGoods = goods.slice();

    return (
      <div className="App">
        <h1>Goods</h1>

        {!isVisible
        && (
          <button
            type="button"
            className="startbtn"
            onClick={this.showList}
          >
            start
          </button>
        )
        }
        {isVisible
          && (
            <>
              <GoodsList
                goods={copyGoods}
                sortedBy={sortedBy}
                isReversed={isReversed}
              />

              <section className="section">
                Sort By
                <button
                  type="button"
                  onClick={this.nameSortList}
                  className="btn"
                >
                  Alphabet
                </button>

                <button
                  type="button"
                  onClick={this.lengthSortList}
                  className="btn"
                >
                  Length
                </button>
              </section>

              <section className="section">
                Addition
                <button
                  type="button"
                  onClick={this.reverseList}
                  className="btn"
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.resetList}
                  className="btn"
                >
                  Reset
                </button>
              </section>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
