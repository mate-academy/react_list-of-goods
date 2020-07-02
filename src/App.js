/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';
import { Button } from './Button';
import { OptionsList } from './OptionsList';

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

class App extends React.Component {
  state = {
    sorted: [...goodsFromServer],
    ifStarted: false,
    selectedLength: 3,
    actions: [
      {
        name: 'sort by length',
        effect: () => (
          this.setState(prevState => ({
            sorted: prevState.sorted.sort((a, b) => a.length - b.length),
          }))
        ),
      },
      {
        name: 'sort reverse',
        effect: () => (
          this.setState(prevState => ({
            sorted: prevState.sorted.reverse(),
          }))
        ),
      },
      {
        name: 'sort by name',
        effect: () => (
          this.setState(prevState => ({
            sorted: prevState.sorted.sort(),
          }))
        ),
      },
      {
        name: 'reset',
        effect: () => (
          this.setState(prevState => ({
            sorted: [...goodsFromServer],
            selectedLength: 1,
          }))
        ),
      },
    ],
  }

  start = () => (
    this.setState(prevState => ({
      ifStarted: true,
    }))
  )

  chooseLength = (ev) => {
    ev.persist();

    return (
      this.setState(prevState => ({
        selectedLength: ev.target.value,
        sorted: prevState.sorted.filter(item => item.length > ev.target.value),
      }))
    );
  }

  render() {
    const {
      sorted, actions,
      selectedLength, ifStarted,
    } = this.state;

    return (
      <div className="App">
        <h1>
          {goodsFromServer.length}
          &nbsp;
          Goods
        </h1>
        {
          !ifStarted
            ? (
              <Button
                key="start"
                action={{
                  name: 'start', effect: this.start,
                }}
              />
            )
            : (
              <div>
                <GoodsList list={sorted} />
                <div className="container">
                  {actions.map(action => (
                    <Button key={action.name} action={{ ...action }} />
                  ))}
                  <OptionsList i={10} selected={selectedLength} chooseLength={this.chooseLength} />
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
