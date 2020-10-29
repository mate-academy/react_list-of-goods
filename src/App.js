import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import ListOfGoods from './components/ListOfGoods';

class App extends React.PureComponent {
  state = {
    isHidden: true,
  }

  handleStart = () => {
    this.setState(prevState => ({
      isHidden: !(prevState.isHidden),
    }));
  }

  render() {
    const { isHidden } = this.state;

    return (
      <div className="app">
        <h1>Goods</h1>
        <div className="app__Inner">
          { isHidden
            ? (
              <Button
                type="button"
                onClick={this.handleStart}
                className={
                  isHidden
                    ? 'app__button-active'
                    : 'app__button-hidden'
                }
              >
                Start
              </Button>
            )
            : <ListOfGoods />
          }
        </div>
      </div>
    );
  }
}

export default App;
