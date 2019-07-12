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
    listOfGoods: [],
    visibleListOfGoods: [],
    selectedItemFromGoods: '1',
  };

  handlerClick = () => {
    this.setState({
      listOfGoods: [...goodsFromServer],
      visibleListOfGoods: [...goodsFromServer],
      isLoaded: true,
    });
  };

  reverseClick = () => {
    this.setState(prevState => ({
      visibleListOfGoods: [...prevState.visibleListOfGoods].reverse(),
    }));
  };

  sortAlphaClick = () => {
    this.setState(prevState => ({
      visibleListOfGoods: [...prevState.visibleListOfGoods].sort(),
    }));
  };

  sortLengthClick = () => {
    this.setState(prevState => ({
      visibleListOfGoods: [...prevState.visibleListOfGoods].sort(
        (a, b) => a.length - b.length
      ),
    }));
  };

  selectClick = (changeValue) => {
    this.setState(prevState => ({
      selectedItemFromGoods: changeValue,
      visibleListOfGoods: prevState.listOfGoods.filter(
        product => product.length >= Number(changeValue)
      ),
    }));
  };

  resetClick = () => {
    this.setState(prevState => ({
      visibleListOfGoods: [...prevState.listOfGoods],
      selectedItemFromGoods: '1',
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
                    onChange={(event) => {
                      this.selectClick(event.target.value);
                    }}
                    value={this.state.selectedItemFromGoods}
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
                  list={this.state.visibleListOfGoods}
                />
              </>
            )
        }
      </main>
    );
  }
}

export default App;
