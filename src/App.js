import React from 'react';
import GoodListApp from './components/goodlistapp/GoodListApp';
import { Button } from 'semantic-ui-react';

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
  constructor(props) {
    super(props);

    this.state = {
      showGoodList: false,
      goods: goodsFromServer,
    }
  }

  showGoodList = () =>
    this.setState((prev) => prev.showGoodList = true);


  render() {

    return (
      <div>
        {
          this.state.showGoodList
          ? <GoodListApp goods={this.state.goods} />
          : <Button inverted color='pink' type='button' onClick={this.showGoodList}>Start</Button>
        }
      </div>
    )
  }
}

export default App;
