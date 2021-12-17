import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import './styles/button.scss';

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

export class App extends React.Component {
  state = {
    showStartButton: true,
  };

  changeButtShowStatus = () => (
    this.setState({
      showStartButton: false,
    })
  );

  render(): React.ReactNode {
    return (
      this.state.showStartButton
        ? (
          <button
            type="button"
            onClick={this.changeButtShowStatus}
            className="button"
          >
            Start
          </button>
        ) : (
          <GoodsList goods={goodsFromServer} />
        )
    );
  }
}
