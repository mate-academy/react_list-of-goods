import React from 'react';

interface Props {
  goods: string[];
}

interface State {
  sortBy: string;
  isReversed: boolean;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    sortBy: '',
    isReversed: false,
  };

  sortReverse() {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByAlphabet() {
    this.setState({
      sortBy: 'alphabet',
    });
  }

  sortByLength() {
    this.setState({
      sortBy: 'length',
    });
  }

  reset() {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { isReversed, sortBy } = this.state;
    const visibleGoods = [...this.props.goods];

    if (sortBy) {
      visibleGoods.sort((good1, good2) => {
        switch (sortBy) {
          case 'alphabet':
            return good1.localeCompare(good2);

          case 'length':
            return good1.length - good2.length;

          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <div className="buttons-container">
          <button
            className="button"
            type="button"
            onClick={() => {
              this.sortReverse();
            }}
          >
            Reverse
          </button>

          <button
            className="button"
            type="button"
            onClick={() => {
              this.sortByAlphabet();
            }}
          >
            Alphabet
          </button>

          <button
            className="button"
            type="button"
            onClick={() => {
              this.sortByLength();
            }}
          >
            Length
          </button>

          <button
            className="button button--reset"
            type="button"
            onClick={() => {
              this.reset();
            }}
          >
            Reset
          </button>
        </div>
        <ul className="list">
          {visibleGoods.map(good => (
            <li key={good} className="list__item">
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
