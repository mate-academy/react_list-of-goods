import React from 'react';
import SortingSection from '../SortingSection/SortingSection';

class StartButton extends React.Component {
    state = {
      buttonVisible: true,
    }

    handleClick = () => {
      this.setState({
        buttonVisible: false,
      });
    }

    render() {
      const { buttonVisible } = this.state;

      return (
        <>
          {buttonVisible ? (
            <button type="button" onClick={this.handleClick}>Start</button>
          ) : (
            <SortingSection />
          )}
        </>
      );
    }
}

export default StartButton;
