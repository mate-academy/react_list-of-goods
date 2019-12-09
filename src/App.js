import React from 'react';
import ListOfGoods from './IistOfGoods';
import ListSelect from './selectList';
import goodsFromServer from './goodsFromServer';

class App extends React.Component {
  state = {
    isStarted: false,
    goods: [...goodsFromServer],
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  }

  sort = () => {
    this.setState(state => ({
      goods: [...state.goods
        .sort((a, b) => a.localeCompare(b))],
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods
        .sort((a, b) => a.length - b.length)],
    }));
  };

  reverse = () => {
    this.setState(state => ({ goods: [...state.goods.reverse()] }));
  };

  select = (event) => {
    const { target: { value } } = event;

    this.setState({
      selected: +value,
      goods: [...goodsFromServer].filter(word => word.length >= +value),
    });
  }

  render() {
    const { isStarted } = this.state;
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods 1</h1>
        { isStarted === true ? (
          <section>

            <button
              type="button"
              onClick={() => {
                this.setState(this.reset);
              }}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState(this.sort);
              }}
            >
              Sort
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState(this.sortByLength);
              }}
            >
              Sort By Length
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState(this.reverse);
              }}
            >
              Reverse
            </button>

            <ListOfGoods list={goods} />

            <select
              className="mySelected"
              onChange={this.select}
              value={this.state.selected}
            >
              <ListSelect />
            </select>
          </section>

        ) : (

          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>

        )}

      </div>
    );
  }
}

export default App;
