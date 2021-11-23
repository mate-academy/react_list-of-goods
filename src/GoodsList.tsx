import React from 'react';

type Props = {
  goods: string[];
  goodsLength: number;
};

interface State {
  goods: string[];
}

class GoodsList extends React.PureComponent<Props, State> {
  state = {
    goods: this.props.goods,
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortListByAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  sortListByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((prevGood, nextGood) => prevGood.length - nextGood.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
    });
  };

  render() {
    const { goods } = this.state;
    const { goodsLength } = this.props;
    const filteredGoods: string[] = goods
      .filter(good => good.length === Number(goodsLength));

    return (
      <>
        {filteredGoods.length > 0
          ? (
            <div>
              <ul>
                {filteredGoods.map(good => (
                  <li key={good}>{good}</li>
                ))}
              </ul>

              <div>
                <button
                  onClick={this.reverseList}
                  type="button"
                >
                  Reverse list
                </button>

                <button
                  onClick={this.sortListByAlphabetically}
                  type="button"
                >
                  Sort alphabetically
                </button>

                <button
                  onClick={this.sortListByLength}
                  type="button"
                >
                  Sort by length
                </button>

                <button
                  onClick={this.reset}
                  type="button"
                >
                  Reset
                </button>
              </div>
            </div>
          )
          : (
            <h1>{`No foods with length: ${goodsLength}`}</h1>
          )}
      </>
    );
  }
}

export default GoodsList;
