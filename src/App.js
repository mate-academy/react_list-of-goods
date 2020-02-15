import React from 'react';
import './App.css';
import { goods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Button } from './components/Button/Button';
import { Mode } from './utils/modes';
import { prepareGoodsList } from './utils/utils';

export class App extends React.Component {
  state = {
    showGoods: false,
    mode: 'default',
    minGoodLength: '1',
  };

  setMode = mode => this.setState({ mode });

  handleStartButtonClick = () => {
    this.setState({ showGoods: true });
  };

  handleSelectChange = (evt) => {
    this.setState({ minGoodLength: evt.target.value });
  };

  renderContent = () => {
    if (!this.state.showGoods) {
      return <Button text="START" handler={this.handleStartButtonClick} />;
    }

    const { minGoodLength } = this.state;

    const goodsToRender = prepareGoodsList(
      goods, this.state.mode, minGoodLength,
    );

    return (
      <>
        <GoodsList goods={goodsToRender} />
        <Button
          text="Reverse"
          handler={() => this.setMode(Mode.REVERSE)}
        />
        <Button
          text="Sort alphabetically"
          handler={() => this.setMode(Mode.ALPHABET)}
        />
        <Button
          text="Reset"
          handler={() => {
            this.setMode(Mode.DEFAULT);
            this.setState({ minGoodLength: '1' });
          }}
        />
        <Button
          text="Sort by length"
          handler={() => this.setMode(Mode.LENGTH)}
        />
        <select value={minGoodLength} onChange={this.handleSelectChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </>
    );
  };

  render() {
    return (
      <div className="App">
        <h1>List of goods</h1>
        <hr />
        {this.renderContent()}
      </div>
    );
  }
}
