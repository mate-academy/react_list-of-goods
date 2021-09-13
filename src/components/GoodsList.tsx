import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: string[];
}

interface State {
  reverse: boolean;
  sortBy: string;
  selectValue: number;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    reverse: false,
    sortBy: '',
    selectValue: 1,
  };

  sortGoods = (sortBy: string) => {
    this.setState({
      sortBy,
    });
  };

  reverseGoods = () => {
    this.setState(state => {
      return ({
        reverse: !state.reverse,
      });
    });
  };

  reset = () => {
    this.setState({
      reverse: false,
      sortBy: '',
      selectValue: 1,
    });
  };

  selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState({
      selectValue: +value,
    });
  };

  sortArray = (array: string[], sortBy: string) => {
    array.sort((good1, good2) => {
      if (sortBy === 'alphabetical') {
        return good1.localeCompare(good2);
      }

      return good1.length - good2.length;
    });
  };

  render() {
    const { reverse, sortBy, selectValue } = this.state;
    const visibleGoods = this.props.goods.filter(good => good.length >= selectValue);

    if (sortBy) {
      this.sortArray(visibleGoods, sortBy);
    }

    if (reverse) {
      visibleGoods.reverse();
    }

    return (
      <div className="GoodsList">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <ul
              className="
                GoodsList__list
                col
                list-group
                text-center
                mb-3
                mt-3"
            >
              {visibleGoods.length > 0
                ? (
                  visibleGoods.map(good => (
                    <li key={good} className="list-group-item">{good}</li>
                  ))
                )
                : <p className="GoodsList__error">No goods for your request</p>}
            </ul>
          </div>
          <div className="row d-flex justify-content-center">
            <button
              className="
                col-lg-2
                me-2
                btn
                btn-primary"
              type="button"
              onClick={() => this.sortGoods('alphabetical')}
            >
              sort list alphabetical
            </button>
            <button
              className="
                col-lg-2
                me-2
                btn
                btn-secondary"
              type="button"
              onClick={() => this.sortGoods('length')}
            >
              sort list by length
            </button>
            <button
              className="
                col-lg-2
                me-2
                btn
                btn-success"
              type="button"
              onClick={this.reverseGoods}
            >
              reverse
            </button>
            <button
              className="
                col-lg-2
                me-2
                btn
                btn-warning"
              type="button"
              onClick={this.reset}
            >
              reset
            </button>
            <select
              name="select"
              id="select"
              value={selectValue}
              onChange={this.selectChange}
              className="col-lg-2"
            >
              {this.props.goods.map(good => {
                const optionValue = this.props.goods.indexOf(good) + 1;

                return (
                  <option key={`${optionValue}`}>{optionValue}</option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
