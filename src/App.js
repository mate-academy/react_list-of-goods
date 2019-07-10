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
  };

  handlerClick = async() => {
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

  resetClick = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.list],
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
