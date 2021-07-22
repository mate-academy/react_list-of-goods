import React from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Select from './components/Select/Select';
import ImplementedList from './components/ImplementedList/ImplementedList';
import AllButtons from './components/AllButtons/AllButtons';

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
    SelectedLength: 0,
    value: 1,
  }

  showOrHideList = () => {
    this.setState(prevState => (
      {
        isVisible: !prevState.isVisible,
      }));
  }

  isReversed = () => {
    this.setState(prevState => (
      {
        isReversed: !prevState.isReversed,
      }
    ));
  }

  isSortedAlphabetically = () => {
    this.setState(prevState => (
      {
        isSortedAlphabetically: !prevState.isSortedAlphabetically,
      }
    ));
  }

  isReset = () => {
    this.setState(prevState => (
      {
        value: 1,
        SelectedLength: 0,
        isReversed: false,
        isSortedByLength: false,
        isSortedAlphabetically: false,
        isReset: !prevState.isReset,
      }
    ));
  }

  isSortedByLength = () => {
    this.setState(prevState => ({
      isSortedByLength: !prevState.isSortedByLength,
    }));
  }

  isSelectedLength = event => (
    this.setState({ SelectedLength: event.target.value }));

  render() {
    const { list, isVisible } = this.state;

    return (
      <>
        {
          isVisible
            ? (
              <div className="App">
                <ImplementedList {...this.state} />
                <div className="App__container-button">
                  <AllButtons
                    isReset={this.isReset}
                    isReversed={this.isReversed}
                    isSortedAlphabetically={this.isSortedAlphabetically}
                    isSortedByLength={this.isSortedByLength}
                  />
                  <Select
                    list={list}
                    callback={this.isSelectedLength}
                    value={this.state.value}
                  />
                </div>
              </div>
            )
            : (

              <Buttons
                callback={this.showOrHideList}
                name="Start"
              />
            )
        }
      </>
    );
  }
}

export default App;
