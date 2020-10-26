import React from 'react';
import './App.scss';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { GoodList } from './components/GoodList/GoodList';
import { ListButton } from './components/ListButton';

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

const preparedGoods = goodsFromServer.map((good, index) => ({
  title: good,
  index,
}));

class App extends React.Component {
  state = {
    showList: false,
    showStartButton: true,
    goods: [...preparedGoods],
    wordLength: 1,
  }

  startList = () => {
    this.setState({
      showList: true,
      showStartButton: false,
    });
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlph = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.title.localeCompare(b.title)),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...preparedGoods],
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.title.length - b.title.length),
    }));
  }

  selectLength = (target) => {
    this.setState(state => ({
      goods: [...preparedGoods].filter(
        good => good.title.length >= target.value,
      ),
      wordLength: target.value,
    }));
  }

  render() {
    const { goods, showStartButton, showList, wordLength } = this.state;

    return (
      <div className="App">
        {showStartButton && (
          <ListButton
            onClickFunc={this.startList}
            title="start"
          />
        )}
        {showList && (
          <div className="App__content">
            <div className="App__buttons">
              <ListButton onClickFunc={this.reverseList} title="reverse" />
              <ListButton
                onClickFunc={this.sortByAlph}
                title="sort alphabetically"
              />
              <ListButton onClickFunc={this.reset} title="reset" />
              <ListButton
                onClickFunc={this.sortByLength}
                title="sort by length"
              />

              <FormControl>
                <Select
                  className="App__select"
                  labelId="lengthSelector"
                  id="lengthSelector"
                  value={wordLength}
                  onChange={
                    event => this.selectLength(event.target)
                  }
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </div>
            <GoodList goods={goods} className="App__list" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
