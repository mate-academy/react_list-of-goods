import React from 'react';
import './App.css';

import goodsFromServer from './function/dataFromServer';
import cx from 'classnames';

import Button from './components/Button/Button';
import WrapperGoods from './components/WrapperGoods/WrapperGoods';


class App extends React.Component {

  state = {
    isStarted: false,
    originalGoods: [...goodsFromServer],
    goodsToRender: [...goodsFromServer],
    selectUserFromStart: 1,
  };

  onClickStart = () => {
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
    }));
  };

  onClickReverse = () => {
    this.setState(prevState => ({
      goodsToRender: [...prevState.goodsToRender].reverse(),
    }));
  };

  onClickSortAlphabet = () => {
    this.setState(prevState => ({
      goodsToRender: [...prevState.goodsToRender].sort(),
    }));
  };

  onClickSortLength = () => {
    this.setState(prevState => ({
      goodsToRender: prevState.goodsToRender
        .sort((a,b) => a.length - b.length),
    }));
  };

  onClickReset = () => {
    this.setState(prevState => ({
      selectUserFromStart: 1,
      goodsToRender: [...prevState.originalGoods],
    }));
  };

  onClickSelectChanges = ({ target }) => {
    this.setState(prevState => ({
      selectUserFromStart: target.value,
      goodsToRender: [...prevState.originalGoods]
        .filter((good, index) => index >= target.value - 1),
    }));
  }

  render() {
    const { isStarted, selectUserFromStart, goodsToRender,
      originalGoods } = this.state;

    const btnStartClass = cx('button', { 'button-hidden': isStarted });
    const wrapperGoodsClass = cx('wrapper', { 'wrapper-hidden': !isStarted });

    return (
      <div className="container">
        <Button
          onClick={this.onClickStart}
          className={btnStartClass}
        >
          Start
        </Button>

        <WrapperGoods
          className={wrapperGoodsClass}
          selectUserFromStart={selectUserFromStart}
          originalGoods={originalGoods}
          goodsToRender={goodsToRender}
          onClickReverse={this.onClickReverse}
          onClickSortAlphabet={this.onClickSortAlphabet}
          onClickSortLength={this.onClickSortLength}
          onClickReset={this.onClickReset}
          onClickSelectChanges={this.onClickSelectChanges}
        />
      </div>
    );
  }
}

export default App;
