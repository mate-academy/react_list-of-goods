import React from 'react';
import GoodsList from './components/goodlist/GoodList';
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
    }
  }

  showGoodList = () =>
    this.setState((prev) => prev.showGoodList = true);


  render() {

    return (
      <div>
        {
          this.state.showGoodList
          ? <GoodsList goods={goodsFromServer} />
          : <Button inverted color='pink' type='button' onClick={this.showGoodList}>Start</Button>
        }
      </div>
    )
  }
}

export default App;
