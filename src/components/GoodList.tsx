import React from 'react';

type Props = {
  goodsList: string[],
};

type State = {
  sortBy: string,
  isReversed: boolean,
};

export class GoodList extends React.Component<Props, State> {
  state = {
    sortBy: '',
    isReversed: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = (value: string) => {
    this.setState({ sortBy: value });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  getGoodList = () => {
    const { sortBy, isReversed } = this.state;
    const visibleList = [...this.props.goodsList];

    if (sortBy) {
      visibleList.sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);
          case 'length':
            return (a.length - b.length);
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
    const goodList = this.getGoodList();

    return (
      <>
        <ul className="content is-medium">
          {goodList.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button
            type="button"
            onClick={this.reverse}
            className="button is-danger is-light is-rounded"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={() => this.sort('alphabet')}
            className="button is-info is-light is-rounded"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={() => this.sort('length')}
            className="button is-link is-light is-rounded"
          >
            Sort by length
          </button>
          <button
            type="button"
            onClick={this.reset}
            className="button is-primary is-light is-rounded"
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}
