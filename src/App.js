import React, { Component } from 'react';
import { GoodsList } from './components/GoodsList';
import { ButtonShowList } from './components/Buttons/ButtonShowList';
import { ButtonReverseList }
  from './components/Buttons/ButtonReverseList.';
import { ButtonSortAlphabetically }
  from './components/Buttons/ButtonSortAlphabetically';
import { ButtonResetList } from './components/Buttons/ButtonResetList';
import { ButtonSortByLength }
  from './components/Buttons/ButtonSortByLength';

import './App.css';

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

export class App extends Component {
  state = {
    isShown: false,
    initialGoods: goodsFromServer,
    isReverse: false,
    sortBy: '',
  };

  showListHandler = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  reverseListHandler = () => {
    this.setState(prevState => ({
      isReverse: !prevState.isReverse,
    }));
  }

  sortListAlphabeticallyHandler = () => this.setState({
    sortBy: 'alphabetically',
    isReverse: false,
  })

  sortListByLengthHandler = () => this.setState({
    sortBy: 'length',
    isReverse: false,
  })

  resetListHandler = () => this.setState({
    isReverse: false,
    sortBy: '',
  })

  render() {
    const {
      showListHandler,
      reverseListHandler,
      sortListAlphabeticallyHandler,
      resetListHandler,
      sortListByLengthHandler,
    } = this;

    const { isShown, isReverse, initialGoods, sortBy } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <p>
          {
            `Available choice from: ${goodsFromServer.length}`
          }
        </p>
        {isShown || <ButtonShowList handler={showListHandler} />}
        <ButtonReverseList handler={reverseListHandler} />
        <ButtonSortAlphabetically handler={sortListAlphabeticallyHandler} />
        <ButtonResetList handler={resetListHandler} />
        <ButtonSortByLength handler={sortListByLengthHandler} />
        {isShown && (
          <GoodsList
            isReverse={isReverse}
            sortBy={sortBy}
            initialGoods={initialGoods}
          />
        )}
      </div>
    );
  }
}
