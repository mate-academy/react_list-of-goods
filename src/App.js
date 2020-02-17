import React from 'react';
import './App.css';
import { GoodList } from './components/GoodList/GoodList';
import { StartButton } from './components/StartButton/StartButton';
import { ReverseButton } from './components/ReverseButton/ReverseButton';
import { SortByLetter } from './components/SortByLetter/SortByLetter';
import { ResetButton } from './components/ResetButton/ResetButton';
import { SortByLengthButton } from
  './components/SortByLengthButton/SortByLengthButton';
import { Select } from './components/Select/Select';
import { ResetSelectionButton } from
  './components/ResetSelectionButton/ResetSelectionButton';

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

const preparedGoodsList = goodsFromServer.map((item, i) => ({
  title: item, id: i,
}));

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: preparedGoodsList,
      selected: 1,
      isStart: false,
    };
  }

  handlerStart = () => {
    this.setState(prevState => ({ isStart: !prevState.isStart }));
  }

  handlerButton = (orderedList) => {
    this.setState(() => ({ goods: orderedList }));
  }

  handlerSelect = (selectValue) => {
    const newList = preparedGoodsList
      .filter(item => item.title.length >= selectValue);

    this.setState(() => ({
      selected: selectValue, goods: newList,
    }));
  }

  render() {
    return this.state.isStart
      ? (
        <div className="App">
          <div className="App__list">
            <GoodList>{this.state.goods}</GoodList>
          </div>
          <div className="App__buttons">
            <ReverseButton handler={this.handlerButton}>
              {this.state.goods}
            </ReverseButton>
            <SortByLetter handler={this.handlerButton}>
              {this.state.goods}
            </SortByLetter>
            <ResetButton handler={this.handlerButton}>
              {this.state.goods}
            </ResetButton>
            <SortByLengthButton handler={this.handlerButton}>
              {this.state.goods}
            </SortByLengthButton>
            <Select selectedItem={this.state.selected}>
              {this.handlerSelect}
            </Select>
            <ResetSelectionButton>{this.handlerSelect}</ResetSelectionButton>
          </div>
        </div>
      )
      : (<StartButton>{this.handlerStart}</StartButton>);
  }
}
