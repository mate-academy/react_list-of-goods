import React from 'react';
import goodsFromServer from '../api/goods';
import FiltersList from './FilterList';
import Good from './Good';

class listOfGoods extends React.PureComponent {
  state = {
    goods: [...goodsFromServer],
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
      goods: prevState.goods,
      selectedOption: null,
    }));
  }

  handleClickLengthSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((prevGood, nextGood) => prevGood.length - nextGood.length),
      selectedOption: '',
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
              <Good
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
