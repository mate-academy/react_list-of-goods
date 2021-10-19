import React from 'react';
import { Good } from './Good';

interface Props {
  goods: Good[];
}

type State = {
  isReversed: boolean,
  sortBy: string,
};

export class GoodList extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabetically' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      sortBy: '',
    });
  };

  render() {
    const { isReversed, sortBy } = this.state;

    const { goods } = this.props;

    goods.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabetically':
          return g1.localeCompare(g2);

        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <>
        <button type="button" onClick={this.reverse}>Reverse</button>
        <button type="button" onClick={this.sortAlphabetically}>Sort alphabetically</button>
        <button type="button" onClick={this.sortByLength}>Sort by length</button>
        <button type="button" onClick={this.reset}>Reset</button>
        <div className="goods">
          {goods.map(good => (
            <div>{good}</div>
          ))}
        </div>
      </>
    );
  }
}
