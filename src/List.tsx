import React from 'react';
import { Button } from './Button';

type Props = {
  goods: string[];
};

type State = {
  goods: string[];
  reversed: boolean;
  sortBy: string;
};

enum SortBy {
  Length = 'length',
  Name = 'name',
}

export class List extends React.Component<Props, State> {
  state = {
    goods: this.props.goods,
    reversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({ reversed: !state.reversed }));
  };

  reset = () => {
    this.setState({
      reversed: false,
      sortBy: '',
    });
  };

  sortByMethod = (sortArgument: SortBy): void => {
    if (sortArgument === SortBy.Length) {
      this.setState({ sortBy: SortBy.Length });
    } else {
      this.setState({ sortBy: SortBy.Name });
    }
  };

  getVisibleGoods = () => {
    const {
      goods,
      reversed,
      sortBy,
    } = this.state;

    const copyOfGoods = [...goods];

    copyOfGoods.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (reversed) {
      copyOfGoods.reverse();
    }

    return copyOfGoods;
  };

  render() {
    const goods = this.getVisibleGoods();

    return (
      <>
        <ul className="App__list">
          {goods.map(good => (
            <li key={good} className="App__list-item">
              {good}
            </li>
          ))}
        </ul>

        <Button
          callback={this.reverse}
          name="Reverse"
        />
        <Button
          callback={this.reset}
          name="Reset"
        />
        <Button
          callback={() => this.sortByMethod(SortBy.Name)}
          name="Sort by name"
        />
        <Button
          callback={() => this.sortByMethod(SortBy.Length)}
          name="Sort by length"
        />
      </>
    );
  }
}
