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
      <div className="start__screen">
        {isVisible ? (
          <button
            type="button"
            className="button"
            onClick={this.handleActiveState}
          >
          Start
          </button>
        ) : (
          <SortingSection goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default StartBtn;
