import React from 'react';
import 'bulma/css/bulma.css';
import { Button } from './components/Button';
import { ProductList } from './components/ProductList';

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

export class App extends React.PureComponent {
  state = {
    isListVisible: false,
    goods: [...goodsFromServer],
    goodLength: 1,
  }

  showList = () => {
    this.setState({ isListVisible: true });
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      goodLength: 1,
    });
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((good1, good2) => good1.length - good2.length),
    }));
  }

  handleChange = (e) => {
    const value = +e.target.value;

    this.setState(state => ({
      goodLength: value,
      goods: [...goodsFromServer].filter(good => good.length >= value),
    }));
  }

  render() {
    const { isListVisible, goods, goodLength } = this.state;

    return (
      <div className="columns is-centered">
        <div className="column is-half has-text-centered">
          <div className="box is-flex is-justify-content-space-evenly m-5">
            <Button
              name="Start"
              event={this.showList}
              isButtonHidden={isListVisible}
            />

            <Button
              name="Reverse"
              event={this.reverseList}
              isButtonHidden={!isListVisible}
            />

            <Button
              name="Sort Alphabetically"
              event={this.sortAlphabetically}
              isButtonHidden={!isListVisible}
            />

            <Button
              name="Reset"
              event={this.reset}
              isButtonHidden={!isListVisible}
            />

            <Button
              name="Sort by length"
              event={this.sortByLength}
              isButtonHidden={!isListVisible}
            />
          </div>

          {isListVisible
          && (
            <>
              <div className="select is-large is-rounded m-5">
                <select
                  name="Good length"
                  value={goodLength}
                  onChange={this.handleChange}
                >
                  {new Array(10).fill('').map((_, index) => (
                    <option value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>
              <ProductList goods={goods} />
            </>
          )}
        </div>
      </div>
    );
  }
}
