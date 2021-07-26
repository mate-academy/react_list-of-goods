import React from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { GoodsList } from './GoodsList';

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
    goodsList: goodsFromServer,
    isReversed: false,
    sortedBy: '',
    isVisible: false,
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortedBy: 'alphabetically' });
  }

  sortByLength = () => {
    this.setState({ sortedBy: 'length' });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortedBy: '',
    });
  }

  makeContentVisible = () => {
    this.setState({ isVisible: true });
  }

  prepareList = () => {
    const { goodsList, isReversed, sortedBy } = this.state;

    const visibleGoods = [...goodsList];

    visibleGoods.sort((prevGood, currentGood) => {
      switch (sortedBy) {
        case ('alphabetically'):
          return prevGood.localeCompare(currentGood);

        case ('length'):
          return prevGood.length - currentGood.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  }

  render() {
    const { isVisible } = this.state;

    const visibleGoods = this.prepareList();

    return (
      <div className="App">
        <Button
          onClick={this.makeContentVisible}
          className={isVisible ? 'btn--hidden' : 'btn--start'}
        >
          Start
        </Button>
        <div className={classNames('App__content', {
          'App__content--hidden': !isVisible,
        })}
        >
          <h1 className="App__title">Goods</h1>
          <GoodsList goodsList={visibleGoods} />
          <ButtonGroup>
            <Button onClick={this.reverse}>
              Reverse
            </Button>
            <Button onClick={this.sortAlphabetically}>
              Sort alphabetically
            </Button>
            <Button onClick={this.sortByLength}>
              Sort by length
            </Button>
            <Button variant="danger" onClick={this.reset}>
              Reset
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default App;
