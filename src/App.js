import React from 'react';
import Button from './Components/Button/Button';
import Content from './Components/Content/Content';
import './App.scss';

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
    goods: goodsFromServer,
    currentSelect: 1,
    isVisible: true,
  }

  handleReset = () => this.setState({
    goods: [...goodsFromServer],
    currentSelect: 1,
  });

  handleReverse = () => this.setState({
    goods: [...goodsFromServer].reverse(),
  });

  handleSort = () => this.setState({
    goods: [...goodsFromServer].sort(),
  });

  handleSortByLength = () => this.setState({
    goods: [...goodsFromServer].sort((a, b) => a.length - b.length)
  });

  handleClick = () => this.setState(prevState => ({
    isVisible: !prevState.isVisible,
  }));

  handleWordLength = ({ target }) => {
    const { value } = target;

    this.setState({
      currentSelect: value,
      goods: [...goodsFromServer]
        .filter(elem => elem.length >= value),
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">
          Goods
          {' '}
          {goodsFromServer.length}
        </h1>
        <Button
          onClick={this.handleClick}
          className={this.state.isVisible
            ? 'button'
            : 'button button--invisible'}
          name="Show more"
        />
        {!this.state.isVisible && (
          <Content
            handleReset={this.handleReset}
            handleReverse={this.handleReverse}
            handleSortByLength={this.handleSortByLength}
            handleSort={this.handleSort}
            handleWordLength={this.handleWordLength}
            goods={this.state.goods}
            currentSelect={this.state.currentSelect}
          />
        )}
      </div>
    );
  }
}

export default App;
