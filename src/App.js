import React, { Component } from 'react';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import Content from './components/Content/Content';

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

class App extends Component {
  state = {
    isStartBtnVisible: true,
  }

  showContent = () => {
    this.setState({
      isStartBtnVisible: false,
    });
  }

  render() {
    const { isStartBtnVisible } = this.state;
    const { showContent } = this;

    return (
      <div className="App">
        {isStartBtnVisible ? (<CustomButton title="Start" func={showContent} />)
          : (<Content listFromServer={goodsFromServer} />)
        }
      </div>
    );
  }
}

export default App;
