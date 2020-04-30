import React from 'react';
import './App.css';
import ListOfGoods from './components/ListOfGoods';

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
    selectedValue: '1',
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
      visibleList: [...prevState.visibleList]
        .sort((a, b) => a.length - b.length),
    }));
  };

  resetList = () => {
    this.setState(prevState => ({
      visibleList: [...prevState.list],
    }));
  };

  onSelectChange = ({ target }) => {
    const { value } = target;

    this.setState(() => ({
      selectedValue: value,
      visibleList: goodsFromServer
        .filter(good => good.length >= value),
    }));
  };

  render() {
    return (
      <div className="goods_block">
        {
          (!this.state.loaded ? (
            <button onClick={this.handler} type="button">
              Start
            </button>
          ) : (
            <div>
              <button onClick={this.reverseList} type="button">
                Reverse
              </button>
              <button onClick={this.sortAlphabetical} type="button">
                Sort A-Z
              </button>
              <button onClick={this.sortListLength} type="button">
                Sort by length
              </button>
              <button onClick={this.resetList} type="button">
                Reset
              </button>

              <select
                value={this.state.selectedValue}
                onChange={event => this.onSelectChange(event)}
              >
                {[...Array(10).keys()].map(i => i + 1)
                  .map(item => <option value={item} key={item}>{item}</option>)}
              </select>

              <ListOfGoods list={this.state.visibleList} />
            </div>
          )
          )
        }
      </div>
    );
  }
}

export default App;
