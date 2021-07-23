import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Select from './components/Select/Select';
import ImplementedList from './components/ImplementedList/ImplementedList';
import { Controls } from './components/Controls/Controls';

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
  state={
    list: goodsFromServer,
    isVisible: false,
    isReversed: false,
    isSortedAlphabetically: false,
    isSortedByLength: false,
    value: 1,
  }

  showOrHideList = () => {
    this.setState(prevState => (
      {
        isVisible: !prevState.isVisible,
      }));
  }

  reversList = () => {
    this.setState(prevState => (
      {
        isReversed: !prevState.isReversed,
      }
    ));
  }

  sortAlphabeticallyList = () => {
    this.setState(prevState => (
      {
        isSortedAlphabetically: !prevState.isSortedAlphabetically,
      }
    ));
  }

  resetList = () => {
    this.setState(prevState => (
      {
        value: 1,
        isReversed: false,
        isSortedByLength: false,
        isSortedAlphabetically: false,
        isReset: !prevState.isReset,
      }
    ));
  }

  sortByLengthList = () => {
    this.setState(prevState => ({
      isSortedByLength: !prevState.isSortedByLength,
    }));
  }

  selectList = event => (
    this.setState({ value: event.target.value }));

  render() {
    const { list, isVisible } = this.state;

    return (
      <>
        {
          isVisible
            ? (
              <div className="App">
                <ImplementedList stateValue={this.state} />
                <div className="App__container-button">
                  <Controls
                    resetList={this.resetList}
                    reversList={this.reversList}
                    sortAlphabeticallyList={this.sortAlphabeticallyList}
                    sortByLengthList={this.sortByLengthList}
                  />
                  <Select
                    list={list}
                    onChange={this.selectList}
                    value={this.state.value}
                  />
                </div>
              </div>
            )
            : (

              <Button
                onClick={this.showOrHideList}
                name="Start"
              />
            )
        }
      </>
    );
  }
}

export default App;
