import React from 'react';
import './App.css'

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
    goods: [],
    goodsCopy: [],
  }

  handleOnClick = () => {
    this.setState({
      goods: [...goodsFromServer],
      goodsCopy: [...goodsFromServer],
      isLoaded: true,
    });
  }
  reverseGoods = () => {
    this.setState(prevState => ({
      goodsCopy: prevState.goodsCopy.reverse(),
    }
    ));
  }

  sortAlphabetical = () => {
    this.setState(prevState => ({
      goodsCopy: prevState.goodsCopy.sort(
        (a, b) => a.localeCompare(b)
      ),
    }
    ));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goodsCopy: prevState.goodsCopy.sort(
        (a, b) => b.length - a.length
      ),
    }
    ));
  }

  resetGoods = () => {
    this.setState(prevState => ({
      goodsCopy: prevState.goods,
    }
    ));
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoaded && (
          <button className='btn' type='button'
            onClick={this.handleOnClick}>Load</button>
        )}
        {this.state.isLoaded && (
          <div>
              <button className='btn' type='button'
              onClick={this.reverseGoods}>reverse</button>

              <button className='btn' type='button'
              onClick={this.sortAlphabetical}>alphabetical</button>

              <button className='btn btr' type='button'
              onClick={this.resetGoods}>reset</button>

              <button className='btn' type='button'
              onClick={this.sortByLength}>by length</button>

            {this.state.goodsCopy.map(good => (
              <li key={good}>{good}</li>
            ))}

          </div>
        )}
      </div>
    )
  }
}

export default App;
