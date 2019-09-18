import React from 'react';
import GoodsList from './GoodsList/GoodsList';
import FiltersList from './FiltersList/FiltersList';
import './ListOfGoods.scss';

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

class ListOfGoods extends React.Component {
  state = {
    goods: [...goodsFromServer],
    originalGoods: [...goodsFromServer],
    selectedOption: null,
  }

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleClickSortABC = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  handleClickReset = () => {
    this.setState(prevState => ({
      goods: prevState.originalGoods,
    }));
  }

  handleClickSortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  handleSelectChange = (selectedOption) => {
    this.setState(prevState => ({
      selectedOption,
      goods: [...prevState.originalGoods]
        .filter(item => item.length >= selectedOption.value),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <div className="filters">
          <FiltersList
            reverse={this.handleClickReverse}
            sortABC={this.handleClickSortABC}
            reset={this.handleClickReset}
            sortLength={this.handleClickSortLength}
            selectLength={this.handleSelectChange}
            selectedOption={this.state.selectedOption}
          />
        </div>

        <div className="goods">
          {goods
            .map(good => (
              <GoodsList
                key={good}
                good={good}
              />
            ))}
        </div>
      < />
    );
  }
}

export default ListOfGoods;
