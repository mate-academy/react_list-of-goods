import React from 'react';
import { ListOfGoods } from './Components/ListOfGoods';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  listOfGoods: string[];
  isVisible: boolean;
  sortDirection: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    listOfGoods: [...goodsFromServer],
    isVisible: false,
    sortDirection: false,
  };

  start = () => {
    this.setState((currentState) => ({
      isVisible: !currentState.isVisible,
    }));
  };

  reverseList = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.reverse(),
    }));
  };

  resetList = () => {
    this.setState({
      listOfGoods: [...goodsFromServer],
    });
  };

  sortAlphabet = () => {
    this.setState((currentState) => ({
      sortDirection: !currentState.sortDirection,
      listOfGoods: [...currentState.listOfGoods].sort((a, b) => (
        currentState.sortDirection
          ? a.localeCompare(b)
          : b.localeCompare(a)
      )),
    }));
  };

  sortByLength = () => {
    this.setState((currentState) => ({
      sortDirection: !currentState.sortDirection,
      listOfGoods: [...currentState.listOfGoods].sort((a, b) => (
        currentState.sortDirection
          ? a.length - b.length
          : b.length - a.length
      )),
    }));
  };

  render() {
    const { listOfGoods } = this.state;

    return (
      <div className="App">
        {this.state.isVisible ? (
          <ListOfGoods
            goods={listOfGoods}
            reverseList={this.reverseList}
            resetList={this.resetList}
            sortAlphabet={this.sortAlphabet}
            sortByLength={this.sortByLength}
          />
        ) : (
          <button
            className="btn btn-success btn-lg"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}
