import React from 'react';
import Goods from './components/Goods/Goods';
import StartButton from './components/Goods/components/StartButton';
import ControlButtons from './components/Goods/components/ControlButtons';
import SelectGoods from './components/Goods/components/SelectGoods';
import { goodsFromServer } from './api/goodsFromServer';

class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    copyOfTheGoods: [...goodsFromServer],
    isStartButtonShown: true,
    isGoodsShow: false,
  };

  handleButtonShowClick = () => {
    this.setState(prevState => ({
      isStartButtonShown: !prevState.isStartButtonShown,
      isGoodsShow: true,
    }));
  };

  handleButtonReverseClick = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleButtonSortClick = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  handleButtonResetClick = () => {
    this.setState(prevState => ({
      goods: [...prevState.copyOfTheGoods],
    }));
  }

  handleButtonSortByLengthClick = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  handleSelect = ({ target: { value } }) => {
    this.setState(prevState => ({
      goods: [...prevState.copyOfTheGoods].filter(item => item.length >= value),
    }));
  }

  render() {
    const { goods, isStartButtonShown } = this.state;

    return (
      <div className="App">
        <div className="goods">
          <h1 className="goods__title">{`Goods ${goods.length}`}</h1>
          {this.state.isGoodsShow
            ? <Goods goods={goods} />
            : null
          }

          {isStartButtonShown
            ? <StartButton handleClick={this.handleButtonShowClick} />
            : (
              <>
                <ControlButtons
                  handleReverse={this.handleButtonReverseClick}
                  handleSort={this.handleButtonSortClick}
                  handleReset={this.handleButtonResetClick}
                  handleSortByLength={this.handleButtonSortByLengthClick}
                />
                <SelectGoods
                  onChange={this.handleSelect}
                />
              </>
            )}
        </div>
      </div>
    );
  }
}

export default App;
