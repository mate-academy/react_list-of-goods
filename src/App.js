import React from 'react';
import { Button } from 'semantic-ui-react';
import GoodsList from './components/goodsList/GoodsList';

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
  state = {
    goods: [...goodsFromServer],
    originalGoods: [...goodsFromServer],
    isStarted: true,
    selectedOption: 1,
  };

  handleStartClick = () => {
    this.setState({
      isStarted: false,
    });
  };

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  handleClickSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  };

  handleClickReset = () => {
    this.setState(prevState => ({
      goods: [...prevState.originalGoods],
      selectedOption: 1,
    }));
  };

  handleClickSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  handleChangeSelect = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      selectedOption: value,
      goods: [...prevState.originalGoods]
        .filter(elem => elem.length >= value),
    }));
  };

  render() {
    const { goods, isStarted, selectedOption } = this.state;
    const {
      handleClickReverse,
      handleClickSort,
      handleClickReset,
      handleClickSortByLength,
      handleChangeSelect,
    } = this;

    return (
      <div className="container">
        <Button
          type="button"
          onClick={this.handleStartClick}
          className={
            isStarted
              ? 'button-start'
              : 'button--inactive'
          }
        >
          Start
        </Button>
        {!isStarted && (
          <GoodsList
            goods={goods}
            selectedOption={selectedOption}
            handleClickReverse={handleClickReverse}
            handleClickSort={handleClickSort}
            handleClickReset={handleClickReset}
            handleClickSortByLength={handleClickSortByLength}
            handleChangeSelect={handleChangeSelect}
          />
        )}
      </div>
    );
  }
}

export default App;
