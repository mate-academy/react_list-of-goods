import React from 'react';
import './App.css';
import goodsFromServer from './function/dataFromServer';
import Button from './components/Button/Button';
import WrapperGoods from './components/WrapperGoods/WrapperGoods';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveStart: false,
      goodsFromServer: goodsFromServer,
      testListOfGood: [...goodsFromServer],
      initialSelect: 1,
    };
  }

  onClickStart = () => {
    this.setState(prevState => ({
      isActiveStart: !prevState.isActiveStart,
    }));
  };

  onClickReverse = () => {
    this.setState(prevState => ({
      testListOfGood: [...prevState.testListOfGood].reverse(),
    }));
  };

  onClickSortAlphabet = () => {
    this.setState(prevState => ({
      testListOfGood: [...prevState.testListOfGood].sort(),
    }));
  };

  onClickSortLength = () => {
    this.setState(prevState => ({
      testListOfGood: prevState.testListOfGood
        .sort((a,b) => a.length - b.length),
    }));
  };

  onClickReset = () => {
    this.setState(prevState => ({
      initialSelect: 1,
      testListOfGood: [...prevState.goodsFromServer],
    }));
  };

  onClickSelectChanges = ({ target }) => {
    this.setState(prevState => ({
      initialSelect: target.value,
      testListOfGood: [...prevState.goodsFromServer]
        .filter((good, index) => index >= target.value - 1),
    }));
  }

  render() {
    const { isActiveStart, initialSelect } = this.state;

    return (
      <div className="container">
        <Button
          onClick={this.onClickStart}
          className={
            isActiveStart
              ? 'button button-hidden'
              : 'button'
          }
        >
          Start
        </Button>

        <WrapperGoods
          className={
            isActiveStart
              ? 'wrapper'
              : 'wrapper wrapper-hidden'
          }
          initialSelect={initialSelect}
          testListOfGood={this.state.testListOfGood}
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
