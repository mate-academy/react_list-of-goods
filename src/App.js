import React from 'react';
import FlipMove from 'react-flip-move';
import { ListGroup, FormControl, Jumbotron } from 'react-bootstrap';
import { MyButton } from './components/Button';

import './App.css';

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

class App extends React.PureComponent {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    isSorted: false,
    defaultLength: 1,
  }

  showList = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  }

  reverseList = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  }

  sortListByABC = () => {
    this.setState({ isSorted: 'alphabet' });
  }

  sortListByLength = () => {
    this.setState({ isSorted: 'length' });
  }

  resetList = () => {
    this.setState({
      isReversed: false,
      isSorted: false,
      defaultLength: 1,
    });
  }

  setLength = (event) => {
    this.setState({ defaultLength: event.target.value });
  }

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      isSorted,
      defaultLength,
    } = this.state;
    const newGoods = goods.filter(good => good.length >= defaultLength);

    if (isSorted) {
      newGoods.sort((g1, g2) => {
        if (isSorted === 'length') {
          return g1.length - g2.length;
        }

        return g1.localeCompare(g2);
      });
    }

    if (isReversed) {
      newGoods.reverse();
    }

    return (
      <Jumbotron className="App text-center js-container">
        <h1 className="display-4">Goods</h1>

        {!isVisible && <MyButton onClick={this.showList} text="Start" />}

        {isVisible && (
          <>
            <MyButton onClick={this.reverseList} text="Reverse" />

            <MyButton onClick={this.sortListByABC} text="Sort alphabetically" />

            <MyButton onClick={this.resetList} text="Reset" />

            <MyButton onClick={this.sortListByLength} text="Sort by length" />

            <FormControl
              as="select"
              size="sm"
              name="lengths"
              value={defaultLength}
              onChange={this.setLength}
              className="js-container"
            >
              {goodsFromServer.map((item, i) => (
                <option value={i + 1} key={Math.random()}>
                  {i + 1}
                </option>
              ))}
            </FormControl>

            <ListGroup className="js-container">
              <FlipMove
                duration={800}
                easing="ease-out"
              >
                {newGoods.map(good => (
                  <ListGroup.Item
                    key={good}
                    variant="success"
                    className="rounded-pill my-1 py-1"
                  >
                    {good}
                  </ListGroup.Item>
                ))}
              </FlipMove>
            </ListGroup>
          </>
        )}
      </Jumbotron>
    );
  }
}

export default App;
