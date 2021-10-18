import React from 'react';
import { Button } from './Button';

interface Props {
  goodsList: string[];
}

interface State {
  isReversed: boolean;
  sortBy: string;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortByAlphabetically = () => {
    this.setState({ sortBy: 'alphabetically' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  render() {
    const {
      isReversed,
      sortBy,
    } = this.state;

    const visibleGoodsList = [...this.props.goodsList];

    if (sortBy) {
      visibleGoodsList.sort((a, b) => {
        switch (sortBy) {
          case 'alphabetically':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      visibleGoodsList.reverse();
    }

    return (
      <>
        <Button name="Reverse" clickHandler={this.reverse}/>
        <Button name="Sort by alphabetically" clickHandler={this.sortByAlphabetically}/>
        <Button name="Sort by length" clickHandler={this.sortByLength}/>
        <Button name="Reset" clickHandler={this.reset}/>

        <ul>
          {visibleGoodsList.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
