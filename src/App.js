import React from 'react';
import './App.css';
import { goodsFromServer } from './data';
import GoodsList from './components/GoodsList';
import Select from './components/Select';
import ButtonsBlock from './components/ButtonsBlock';

const formatedGoods = goods => (
  goods.map((item, index) => ({
    id: index, value: item,
  }))
);

class App extends React.Component {
  baseGoods = formatedGoods(goodsFromServer);

  state = {
    goods: [...this.baseGoods],
    isListShown: false,
    selected: 1,
  }

  showList = () => {
    this.setState({
      isListShown: true,
    });
  }

  reversList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((itemA, itemB) => (
        itemA.value.localeCompare(itemB.value)
      )),
    }));
  }

  reset = () => {
    this.setState(() => ({
      goods: [...this.baseGoods],
      selected: 1,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((itemA, itemB) => (
        itemA.value.length - itemB.value.length
      )),
    }));
  }

  handleSelect = (event) => {
    const selectedLength = Number(event.target.value);

    this.setState(() => ({
      goods: [...this.baseGoods].filter(item => (
        item.value.length >= selectedLength
      )),
      selected: selectedLength,
    }));
  }

  render() {
    const { isListShown, goods } = this.state;

    return (
      <div className="App">
        <header className="header">
          <button
            type="button"
            onClick={this.showList}
            hidden={isListShown}
          >
            Start
          </button>

          {isListShown && (
            <ButtonsBlock
              clickReverseList={this.reversList}
              clickSortList={this.sortList}
              clickSortByLength={this.sortByLength}
              clickReset={this.reset}
            />
          )}
        </header>

        {isListShown && <GoodsList items={goods} />}

        {isListShown && (
          <footer className="footer">
            <span>Select length of item</span>
            <Select
              selectedValue={this.state.selected}
              handleSelect={this.handleSelect}
            />
          </footer>
        )}
      </div>
    );
  }
}

export default App;
