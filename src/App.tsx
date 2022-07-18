import { Component } from 'react';
import { GoodsList } from './GoodsList';

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

type State = {
  goodsList: string[];
  isListVisible: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    goodsList: goodsFromServer,
    isListVisible: false,
  };

  displayGoods = () => {
    this.setState(state => ({
      isListVisible: !state.isListVisible,
    }));
  };

  render() {
    const { goodsList, isListVisible } = this.state;

    return (
      <div className="has-text-centered">
        <h1 className="title mt-3 is-size-3">List of goods</h1>
        {
          !isListVisible ? (
            <>
              <button
                type="button"
                className="button"
                onClick={this.displayGoods}
              >
                Start
              </button>
            </>
          ) : (
            <GoodsList goods={goodsList} />
          )
        }
      </div>
    );
  }
}
