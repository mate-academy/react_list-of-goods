import React from 'react';
import AppBasic from './BasicTask';
import AdvancedApp from './AdvancedTask';
import { Button } from './Button';

interface State {
  isContentShown: boolean;
}

export class App extends React.Component<{}, State> {
  state = {
    isContentShown: false,
  };

  showList = () => {
    this.setState(state => ({
      isContentShown: !state.isContentShown,
    }));
  };

  render() {
    const { isContentShown } = this.state;

    return (
      <>
        {isContentShown ? (
          <>
            <AppBasic />
            <AdvancedApp />
          </>
        ) : (
          <Button
            action={this.showList}
            stylingClass="App__button--start"
            text="Start"
          />
        )}
      </>
    );
  }
}
