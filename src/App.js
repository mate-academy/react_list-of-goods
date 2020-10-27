import React, { Component } from 'react';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import List from './components/List/List';
import CustomSelect from './components/CustomSelect/CustomSelect';

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

class App extends Component {
  state = {
    isStartBtnVisible: true,
    list: goodsFromServer,
    wordsLength: 1,
  }

  showContent = () => {
    this.setState({
      isStartBtnVisible: false,
    });
  }

  reverseList = () => {
    this.setState(state => ({
      list: [...state.list].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      list: [...state.list].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      list: [...state.list].sort((a, b) => a.length - b.length),
    }));
  }

  resetOrder = () => {
    this.setState(state => ({
      list: goodsFromServer,
      wordsLength: 1,
    }));
  }

  filterByWordLength = (target) => {
    this.setState(state => ({
      list: goodsFromServer.filter(item => item.length >= target.value),
      wordsLength: target.value,
    }));
  }

  render() {
    const { list, isStartBtnVisible, wordsLength } = this.state;
    const { showContent,
      reverseList,
      sortByAlphabet,
      resetOrder,
      sortByLength,
      filterByWordLength } = this;

    return (
      <div className="App">
        {isStartBtnVisible ? (
          <CustomButton title="Start" func={showContent} />)
          : (
            <>
              <div>
                <CustomButton title="Reverse" func={reverseList} />
                <CustomButton title="By Alphabet" func={sortByAlphabet} />
                <CustomButton title="By Length" func={sortByLength} />
                <CustomSelect length={wordsLength} func={filterByWordLength} />
                <CustomButton title="Reset" func={resetOrder} />
              </div>
              <div>
                <List list={list} />
              </div>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
