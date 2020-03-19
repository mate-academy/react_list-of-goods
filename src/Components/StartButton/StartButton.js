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
      return (
        <>
          {this.state.buttonVisible
            ? <button type="button" onClick={this.handleClick}>Start</button>
            : <SortingSection />}
        </>
      );
    }
}

export default StartButton;
