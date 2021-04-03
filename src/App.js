import React from 'react';

import Button from '@material-ui/core/Button';

import { GoodsList } from './components/GoodsList';
import './App.css';

export class App extends React.Component {
  state = {
    isListShown: false,
  }

  showList = () => {
    this.setState({ isListShown: true });
  }

  render() {
    const { isListShown } = this.state;

    return (
      <div className="app">
        {
          isListShown
            ? <GoodsList />
            : (
              <div className="app__button">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={this.showList}
                >
                  show list of goods
                </Button>
              </div>
            )
        }
      </div>
    );
  }
}
