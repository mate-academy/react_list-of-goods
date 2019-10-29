import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ListOfGoods from './component/ListOfGoods';

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

export default class App extends Component {
  state = {
    goods: [...goodsFromServer],
    startButton: true,
    initialList: [...goodsFromServer],
    selectedOption: 1,
  }

  startApp = () => {
    this.setState(({prevState}) => {
      return {
        ...prevState,
        startButton: !this.state.startButton
      }
    })
  }

  reverseList = () => {
    this.setState(({prevState}) => {
      return {
        ...prevState,
        goods: this.state.goods.reverse()
      }
    })
  }

  sortAlphabetically = () => {
    this.setState(({prevState}) => {
      return {
        ...prevState,
        goods: this.state.goods.sort((a, b) => a.charCodeAt() - b.charCodeAt())
      }
    })
  }

  resetOrder = () => {
    this.setState(({prevState}) => {
      return {
        ...prevState,
        goods: [...this.state.initialList],
        selectedOption: 1
      }
    })
  }

  sortByLength = () => {
    this.setState(({prevState}) => {
      return {
        ...prevState,
        initialList: [...goodsFromServer],
        goods: this.state.goods.sort((a, b) => a.length - b.length)
      }
    })
  }

  selectItem = ({target}) => {
    const { value } = target;
    this.setState(({prevState}) => {
      return {
        ...prevState,
        selectedOption: value,
        goods: this.state.initialList.filter(item => item.length >= value)
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.startButton ?
        (<Button
        onClick={this.startApp}>Show list</Button>)
        : (<ListOfGoods goods={this.state.goods}
        reverseList={this.reverseList}
        sortAlphabetically={this.sortAlphabetically}
        resetOrder={this.resetOrder}
        sortByLength={this.sortByLength}
        selectItem={this.selectItem}
        selectedOption={this.state.selectedOption}/>)}
      </div>
    );
  }
}
