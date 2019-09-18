import React from 'react';
import './App.css';
import goodsFromServer from './function/dataFromServer';
import Button from './components/Button/Button';
import WrapperGoods from './components/WrapperGoods/WrapperGoods';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      originalGoods: goodsFromServer,
      goodsToRender: [...goodsFromServer],
      initialSelect: 1,
    };
  }

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
      initialSelect: 1,
      goodsToRender: [...prevState.originalGoods],
    }));
  };

  onClickSelectChanges = ({ target }) => {
    this.setState(prevState => ({
      initialSelect: target.value,
      goodsToRender: [...prevState.originalGoods]
        .filter((good, index) => index >= target.value - 1),
    }));
  }

  render() {
    const { isStarted, initialSelect, goodsToRender } = this.state;
    const { onClickReverse, onClickSortAlphabet, onClickSortLength,
      onClickReset, onClickSelectChanges } = this;

    return (
      <div className="container">
        <Button
          onClick={this.onClickStart}
          className={
            isStarted
              ? 'button button-hidden'
              : 'button'
          }
        >
          Start
        </Button>

        <WrapperGoods
          className={
            isStarted
              ? 'wrapper'
              : 'wrapper wrapper-hidden'
          }
          initialSelect={initialSelect}
          goodsToRender={goodsToRender}
          onClickReverse={onClickReverse}
          onClickSortAlphabet={onClickSortAlphabet}
          onClickSortLength={onClickSortLength}
          onClickReset={onClickReset}
          onClickSelectChanges={onClickSelectChanges}
        />
      </div>
    );
  }
}

export default App;
