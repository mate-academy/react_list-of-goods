import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import { GoodsList } from './components/GoodsList';

const goodsFromServer: string[] = [
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

type State = {
  isListVisible: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    isListVisible: false,
  };

  startTrigger = () => {
    this.setState(state => (
      { isListVisible: !state.isListVisible }
    ));
  };

  render() {
    return (
      <Container>
        <div className="App">
          {this.state.isListVisible
            ? <GoodsList goods={goodsFromServer} />
            : (
              <Button
                size="lg"
                variant="primary"
                type="button"
                onClick={this.startTrigger}
              >
                Start
              </Button>
            )}
        </div>
      </Container>
    );
  }
}

export default App;
