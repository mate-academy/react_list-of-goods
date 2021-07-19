import React from 'react';
import { OrderList } from './components/OrderList';
import './App.css';
import Button from './components/Button';

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
    listIsVisible: false,
    goodsList: [...goodsFromServer],
  }

  listVisibility = () => this.setState(
    prevState => ({ listIsVisible: !prevState.listIsVisible }),
  );

  reverseList = () => this.setState({
    goodsList: [...goodsFromServer].reverse(),
  });

  resetList = () => this.setState({
    goodsList: [...goodsFromServer],
  })

  sortByName = () => this.setState({
    goodsList: [...goodsFromServer].sort(),
  })

  sortByLength = () => this.setState({
    goodsList: [...goodsFromServer].sort((a, b) => a.length - b.length),
  })

  render() {
    return (
      <>
        {this.state.listIsVisible
          ? (
            <OrderList
              allGoods={this.state.goodsList}
              reverse={this.reverseList}
              reset={this.resetList}
              sortByName={this.sortByName}
              sortByLength={this.sortByLength}
            />
          )
          : (
            <Button
              action={this.listVisibility}
              text="start"
            />
          )
        }
      </>
    );
  }
}

export default App;
