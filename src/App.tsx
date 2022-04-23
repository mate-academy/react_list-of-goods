import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';
import SelectElement from './components/SelectElement/SelectElement';
import './App.scss';

const selectValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
  goodsArray: string[],
  visibleGoodsArray: string[],
  isListHidden: boolean,
  isButtonHidden: boolean,
  isActionsActive: boolean,
  selectedLength: number,
}

class App extends React.Component<{}, State> {
  state = {
    goodsArray: goodsFromServer,
    visibleGoodsArray: goodsFromServer,
    isListHidden: true,
    isButtonHidden: false,
    isActionsActive: false,
    selectedLength: 1,
  };

  handleStartButtonClick = () => {
    this.setState({
      isListHidden: false,
      isButtonHidden: true,
      isActionsActive: true,
    });
  };

  handleReverseButtonClick = () => {
    this.setState(state => ({
      visibleGoodsArray: [...state.goodsArray].reverse(),
    }));
  };

  handleSortButtonClick = () => {
    this.setState(state => ({
      visibleGoodsArray: [...state.goodsArray]
        .sort((g1, g2) => g1.localeCompare(g2)),
    }));
  };

  handleResetButtonClick = () => {
    this.setState(state => ({
      visibleGoodsArray: state.goodsArray,
      selectedLength: 1,
    }));
  };

  handleSortByLengthButtonClick = () => {
    this.setState(state => ({
      visibleGoodsArray: [...state.goodsArray]
        .sort((g1, g2) => g1.length - g2.length),
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSelection = (event: { target: { value: any; }; }) => {
    this.setState({
      selectedLength: event.target.value,
    });
  };

  render() {
    const {
      visibleGoodsArray,
      selectedLength,
    } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          className="StartButton"
          hidden={this.state.isButtonHidden}
          onClick={this.handleStartButtonClick}
        >
          Start
        </button>
        <h1>Goods</h1>

        <h2>
          Total amouns of goods is:
          {` ${goodsFromServer.length}`}
        </h2>

        <select
          className="SelectList"
          onChange={this.handleSelection}
        >
          <SelectElement
            values={selectValues}
            defaultValue={this.state.selectedLength}
          />
        </select>

        <button
          type="button"
          disabled={!this.state.isActionsActive}
          className="Actions ReverseButton"
          onClick={this.handleReverseButtonClick}
        >
          Reverse
        </button>

        <button
          type="button"
          disabled={!this.state.isActionsActive}
          className="Actions SortButton"
          onClick={this.handleSortButtonClick}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          disabled={!this.state.isActionsActive}
          className="Actions ResetButton"
          onClick={this.handleResetButtonClick}
        >
          Reset
        </button>

        <button
          type="button"
          disabled={!this.state.isActionsActive}
          className="Actions SortByLengthButton"
          onClick={this.handleSortByLengthButtonClick}
        >
          Sort by length
        </button>

        <ul
          className="GoodsList"
          hidden={this.state.isListHidden}
        >
          <GoodsList
            goods={visibleGoodsArray}
            lengthForDisplay={selectedLength}
          />
        </ul>
      </div>
    );
  }
}

export default App;
