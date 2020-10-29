import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PageContent } from './components/PageContent/PageContent';
import { StartButton } from './components/StartButton/StartButton';

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

const preparedGoods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

class App extends React.Component {
  state = {
    contentVisible: false,
    goods: preparedGoods,
  }

  toggleVisible = () => {
    this.setState(state => ({
      contentVisible: !state.contentVisible,
      goods: preparedGoods,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlph = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: preparedGoods,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.name.length - b.name.length),
    }));
  }

  render() {
    const { goods, contentVisible } = this.state;

    return (
      <Container className="pt-5">
        {!contentVisible ? (
          <StartButton toggleVisible={this.toggleVisible} />
        )
          : (
            <PageContent
              goods={goods}
              reverseList={this.reverseList}
              sortByAlph={this.sortByAlph}
              reset={this.reset}
              sortByLength={this.sortByLength}
            />
          )}
      </Container>
    );
  }
}

export default App;
