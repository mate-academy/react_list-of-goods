import React from 'react';
import classNames from 'classnames';

import './App.scss';

import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Accordion from 'react-bootstrap/Accordion';

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

type State = {
  goodsList: string[];
  visible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goodsList: [...goodsFromServer],
    visible: false,
  };

  toMakeVisible = () => this.setState(currentState => ({ visible: !currentState.visible }));

  reverse = () => this.setState(currentState => (
    { goodsList: [...currentState.goodsList].reverse() }));

  sortAlphabetically = () => this.setState(currentState => (
    { goodsList: [...currentState.goodsList].sort((a, b) => a.localeCompare(b)) }));

  sortByLength = () => this.setState(currentState => (
    { goodsList: [...currentState.goodsList].sort((a, b) => a.length - b.length) }));

  resetSorting = () => this.setState({ goodsList: [...goodsFromServer] });

  render() {
    return (
      <div className="App">
        <h1 className="title">Hey, check out our goods!</h1>
        {!this.state.visible && (
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Just push and here we gooo...</Tooltip>}
          >
            {({ ref, ...triggerHandler }) => (
              <Button
                variant="primary"
                {...triggerHandler}
                size="lg"
                type="button"
                onClick={this.toMakeVisible}
              >
                Start
              </Button>
            )}
          </OverlayTrigger>
        )}

        {this.state.visible && (
          <ToggleButtonGroup type="radio" name="options">
            <ToggleButton
              id="tbg-radio-1"
              className="button"
              variant="info"
              value={1}
              onClick={this.reverse}
            >
              Reverse
            </ToggleButton>

            <ToggleButton
              id="tbg-radio-2"
              className="button"
              variant="info"
              value={2}
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </ToggleButton>

            <ToggleButton
              id="tbg-radio-3"
              className="button"
              variant="info"
              value={3}
              onClick={this.sortByLength}
            >
              Sort by length
            </ToggleButton>

            <ToggleButton
              id="tbg-radio-4"
              className="button"
              variant="warning"
              value={4}
              onClick={this.resetSorting}
            >
              Reset
            </ToggleButton>

          </ToggleButtonGroup>
        )}

        <Accordion
          className={classNames('productList',
            { 'productList--active': this.state.visible },
            { 'productList--disabled': !this.state.visible })}
        >
          {this.state.goodsList.map((el, i) => (
            <Accordion.Item eventKey={String(i)}>
              <Accordion.Header>{el}</Accordion.Header>
              <Accordion.Body>
                Finest high-quality
                {` ${el}.`}
                <br />
                Organic foods can often be hard to find, however with the vegan movement that
                has happened in recent years people are having an increasing concern for the
                environment and are constantly looking for new ways in which they can help the
                environment and protect the world we live in against climate change. There are
                a number of reasons why someone chooses to purchase organic. From an environmental
                perspective, the use of pesticides, fertilisers and other chemicals in conventional
                farming may have could potentially have a negative effect on the environment or
                some say possibly our health.
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default App;
