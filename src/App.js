import React from 'react';
import ListOfGoods from './components/ListOfGoods/ListOfGoods';
import './app.css';
import { Button } from 'semantic-ui-react';

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
    list: [],
    loaded: false,
    visibleList: [],
  };

  handler = () => {
    this.setState({
      list: [...goodsFromServer],
      loaded: true,
      visibleList: [...goodsFromServer],
    });
  };

  reverseList = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.visibleList].reverse(),
    }));
  };

  sortAlphabetical = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.visibleList].sort(),
    }));
  };

  sortListLength = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.visibleList].sort((a, b) => a.length - b.length)
    }));
  };

  resetList = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.list],
    }));
  };

  render() {
    return (
      <div className="goods_block">
        {
          (!this.state.loaded ? (
            <button onClick={this.handler} class="ui purple inverted button">
                Start
            </button>
          ) : (
            <>
              <div className="buttons">
                <button onClick={this.reverseList} class="ui purple inverted button">
                    Reverse
                </button>
                <button onClick={this.sortAlphabetical} class="ui purple inverted button">
                    Sort A-Z
                </button>
                <button onClick={this.sortListLength} class="ui purple inverted button">
                    Sort by length
                </button>
                <button onClick={this.resetList} class="ui purple inverted button">
                    Reset
                </button>
              </div>
              <ListOfGoods list={this.state.visibleList} />
              </>
          )
          )
        }
      </div>
    );
  }
}

export default App;
