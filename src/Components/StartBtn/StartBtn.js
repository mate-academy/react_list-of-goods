import React from 'react';
import './StartBtn.css';
import { goodsFromServer } from '../../API/goodsFromServer';
import SortingSection from '../SortingSection/SortingSection';

class StartBtn extends React.Component {
  state = {
    isVisible: true,
  };

  handleActiveState = () => {
    this.setState({ isVisible: false });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <>
        {isVisible ? (
          <button
            type="button"
            onClick={this.handleActiveState}
          >
          Start
          </button>
        ) : (
          <SortingSection goods={goodsFromServer} />
        )}
      </>
    );
  }
}

export default StartBtn;
