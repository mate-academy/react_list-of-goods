import React from 'react';

import Button from '@material-ui/core/Button';

import { Goods } from './components/Goods';
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
            ? <Goods />
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
