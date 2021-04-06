import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { GoodList } from './components/GoodList';

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
].map(item => ({
  id: uuidv4(),
  nameGoods: item,
}
));

export class App extends React.Component {
  state = {
    goodsList: goodsFromServer,
    mainButton: true,
    buttonSort: true,
    selectDefault: 1,
  }

  mainButtonClick = () => (
    this.setState(prev => ({
      mainButton: !prev.mainButton,
    }))
  )

  buttonReverse = () => (
    this.setState(prev => ({
      goodsList: [...prev.goodsList].reverse(),
    }))
  )

  buttonSort= () => (
    this.setState(prev => ({
      goodsList: [...prev.goodsList].sort((goodA, goodB) => (
        (prev.buttonSort)
          ? goodA.nameGoods.localeCompare(goodB.nameGoods)
          : goodB.nameGoods.localeCompare(goodA.nameGoods)
      )),
      buttonSort: !prev.buttonSort,
    }))
  )

  buttonReset = () => (
    this.setState({
      goodsList: goodsFromServer,
    })
  )

  buttonSortByLength = () => (
    this.setState(prev => ({
      goodsList: [...prev.goodsList].sort((goodA, goodB) => (
        (prev.buttonSort)
          ? goodA.nameGoods.length - goodB.nameGoods.length
          : goodB.nameGoods.length - goodA.nameGoods.length
      )),
      buttonSort: !prev.buttonSort,
    }))
  )

  buttonSelect = (event) => {
    const length = event.target.value;

    this.setState({
      selectDefault: length,
      goodsList: [...goodsFromServer]
        .filter(e => e.nameGoods.length >= +length),
    });
  }

  render() {
    const { goodsList, mainButton, selectDefault } = this.state;

    return (
      <div>
        <button type="button" onClick={this.mainButtonClick}>
          {(mainButton) ? 'start' : 'close'}
        </button>
        <GoodList
          goodsList={goodsList}
          mainButton={mainButton}
          buttonReverse={this.buttonReverse}
          buttonSort={this.buttonSort}
          buttonReset={this.buttonReset}
          buttonSortByLength={this.buttonSortByLength}
          buttonSelect={this.buttonSelect}
          selectDefault={selectDefault}
        />
      </div>
    );
  }
}
