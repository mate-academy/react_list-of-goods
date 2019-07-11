import React from 'react';
import GoodList from './GoodsList';

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
    isLoaded: false,
    list: [],
    visibleList: [],
    listSize: '1',
  };

  handlerClick = () => {
    this.setState({
      list: [...goodsFromServer],
      visibleList: [...goodsFromServer],
      isLoaded: true,
    });
  };

  reverseClick = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.visibleList].reverse(),
    }));
  };

  sortAlphaClick = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.visibleList].sort(),
    }));
  };

  sortLengthClick = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.visibleList].sort(
        (a, b) => a.length - b.length
      ),
    }));
  };

  selectClick = (event) => {
    this.setState({
      listSize: event.target.value,
      visibleList: this.state.list.filter(
        prod => prod.length >= Number(event.target.value)
      ),
    });
  };

  resetClick = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.list],
      listSize: '1',
    }));
  };

  render() {
    return (
      <main className="main">
        {
          (!this.state.isLoaded)
            ? (
              <button
                onClick={this.handlerClick}
                type="button"
              >
                Start
              </button>
            )
            : (
              <>
                <div className="main__buttons">
                  <button
                    onClick={this.reverseClick}
                    type="button"
                  >
                    Reverse
                  </button>
                  <button
                    onClick={this.sortAlphaClick}
                    type="button"
                  >
                    By Alphabetically
                  </button>
                  <button
                    onClick={this.sortLengthClick}
                    type="button"
                  >
                    By length
                  </button>
                  <button
                    onClick={this.resetClick}
                    type="button"
                  >
                    Reset
                  </button>
                  <select
                    onChange={this.selectClick}
                    value={this.state.listSize}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <GoodList
                  list={this.state.visibleList}
                />
              </>
            )
        }
      </main>
    );
  }
}

export default App;
