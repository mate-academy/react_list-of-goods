import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface State {
  isReversed: boolean;
  sortBy: 'alphabet' | 'length' | null;
  isDefault: boolean;
}

interface Props {
  goodsList: string[];
}

export class GoodsList extends PureComponent<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: null,
    isDefault: true,
  };

  reverseGoods = () => {
    this.setState((currentState) => ({
      isReversed: !currentState.isReversed,
      isDefault: false,
    }));
  };

  alphabetSort = () => {
    this.setState({
      sortBy: 'alphabet',
      isDefault: false,
    });
  };

  lengthSort = () => {
    this.setState({
      sortBy: 'length',
      isDefault: false,
    });
  };

  reset = () => {
    this.setState({
      isDefault: true,
    });
  };

  render() {
    const {
      isReversed,
      sortBy,
      isDefault,
    } = this.state;

    const { goodsList } = this.props;

    let visibleGoods = [...goodsList];

    visibleGoods.sort((goodA, goodB) => {
      switch (sortBy) {
        case 'alphabet':
          return goodA.localeCompare(goodB);

        case 'length':
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    if (isDefault) {
      visibleGoods = [...goodsList];
    }

    return (
      <div className="d-flex w-50 justify-content-center">
        <ul className="p-4">
          {visibleGoods.map((good) => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <div className="d-flex flex-column p-4">
          <div className="d-flex flex-column border border-success rounded p-2 mb-4">
            Sort by:
            <button
              type="button"
              className="btn btn-warning my-2"
              onClick={this.alphabetSort}
            >
              Alphabet
            </button>

            <button
              type="button"
              className="btn btn-warning"
              onClick={this.lengthSort}
            >
              length
            </button>
          </div>

          <button
            type="button"
            className="btn btn-warning mb-2"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
