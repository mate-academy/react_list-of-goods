import React from 'react';
import goodsFromServer from '../api/goods';
import FiltersList from './FilterList';
import GoodsList from './GoodsList';

class listOfGoods extends React.PureComponent {
  state = {
    goods: [...goodsFromServer],
    originalGoods: [...goodsFromServer],
    selectedOption: null,
  }

  handleCLickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleClickAlfabeticSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  handleClickReset = () => {
    this.setState(prevState => ({
      goods: prevState.originalGoods,
    }));
  }

  handleClickLengthSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((prevGood, nextGood) => prevGood.length - nextGood.length),
    }));
  }

  handleSelectChange = (selectedOption) => {
    this.setState(prevState => ({
      selectedOption,
      goods: [...prevState.originalGoods]
        .filter(good => good.length >= selectedOption.value),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <div className="app__filters">
          <FiltersList
            reverse={this.handleCLickReverse}
            alfabeticSort={this.handleClickAlfabeticSort}
            reset={this.handleClickReset}
            sortByLength={this.handleClickLengthSort}
            selectLength={this.handleSelectChange}
            selectedOption={this.state.selectedOption}
          />
        </div>
        <ul className="app__list">
          {goods
            .map(good => (
              <GoodsList
                key={good}
                good={good}
              />
            ))}
        </ul>
      </>
    );
  }
}

export default listOfGoods;
