import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from './Button';

type State = {
  isReversed: boolean;
  sortBy: string;
};

type Props = {
  goods: string[];
};

export class ListOfGoods extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ isReversed: false, sortBy: '' });
  };

  getVisibleList = () => {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;

    const visibleList = [...goods];

    if (sortBy) {
      visibleList
        .sort((goodA, goodB) => {
          switch (sortBy) {
            case 'alphabet':
              return goodA.localeCompare(goodB);
            case 'length':
              return goodA.length - goodB.length;
            default:
              return 0;
          }
        });
    }

    if (isReversed) {
      visibleList.reverse();
    }

    return visibleList;
  };

  render() {
    const visibleList = this.getVisibleList();

    return (
      <div>
        <ul className="table-success">
          {visibleList.map(good => (
            <li
              key={good}
              className="table-success"
            >
              {good}
            </li>
          ))}
        </ul>

        <div className="d-flex p-2 bd-highlight justify-content-evenly">
          <Button callback={this.reverse} name="reverse" />
          <Button callback={this.sortByAlphabet} name="Sort alphabetically" />
          <Button callback={this.sortByLength} name="Sort by length" />
          <Button callback={this.reset} name="reset" />
        </div>
      </div>

    );
  }
}
