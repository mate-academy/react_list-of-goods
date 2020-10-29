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
    startButtonVisible: false,
    contentVisible: true,
    goods: preparedGoods,
  }

  toggleVisible = () => {
    this.setState(state => ({
      startButtonVisible: !state.startButtonVisible,
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

  selectByLength = (value) => {
    this.setState(state => ({
      goods: state.goods.filter(good => good.length >= value),
    }));
  }

  render() {
    const { goods, startButtonVisible, contentVisible } = this.state;

    return (
      <Container className="pt-5">
        {startButtonVisible && (
          <StartButton toggleVisible={this.toggleVisible} />
        )}
        {contentVisible
        && (
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
