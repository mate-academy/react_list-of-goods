import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: string[];
}

interface State extends Props {
  reverse: boolean;
  sortBy: string;
  selectValue: string;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: this.props.goods,
    reverse: false,
    sortBy: '',
    selectValue: '1',
  };

  sortAlphabetical = () => {
    this.setState({
      sortBy: 'alphabetical',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
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
      selectValue: '1',
    });
  };

  selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState({
      selectValue: value,
    });
  };

  render() {
    const { reverse, sortBy, selectValue } = this.state;
    const visibleGoods = this.state.goods.filter(good => good.length >= +selectValue);

    if (sortBy) {
      visibleGoods.sort((good1, good2) => {
        if (sortBy === 'alphabetical') {
          return good1.localeCompare(good2);
        }

        return good1.length - good2.length;
      });
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
              {visibleGoods.length > 0 ? (visibleGoods.map(good => {
                return (
                  <li key={good} className="list-group-item">{good}</li>
                );
              })) : <p className="GoodsList__error">No goods for your request</p> }
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
              onClick={this.sortAlphabetical}
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
              onClick={this.sortByLength}
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
