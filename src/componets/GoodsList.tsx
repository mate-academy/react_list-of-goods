import React from 'react';

interface Props {
  goodsList: string[];
}

interface State {
  isReversed: boolean;
  sortBy: string | null;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: null,
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
        <button
          type="button"
          onClick={() => {
            this.setState({ isReversed: !isReversed });
          }}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ sortBy: 'alphabetically' });
          }}
        >
          Sort by alphabetically
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ sortBy: 'length' });
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              sortBy: null,
              isReversed: false,
            });
          }}
        >
          Reset
        </button>

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
