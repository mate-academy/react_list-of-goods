import React from 'react';
import ListOfGoods from './IistOfGoods';
import ListSelect from './selectList';
import goodsFromServer from './goodsFromServer';
import Filter from './Filter';

class App extends React.Component {
  state = {
    isStarted: false,
    goods: [...goodsFromServer],
  };

  filtersArr = {
    filters: [
      {
        title: 'Reset',
        method: () => {
          this.setState({
            goods: [...goodsFromServer],
            selected: 1,
          });
        },
      },

      {
        title: 'Sort',
        method: () => {
          this.setState(state => ({
            goods: [...state.goods]
              .sort((a, b) => a.localeCompare(b)),
          }));
        },
      },
      {
        title: 'Sort By Length',
        method: () => {
          this.setState(state => ({
            goods: [...state.goods]
              .sort((a, b) => a.length - b.length),
          }));
        },
      },
      {
        title: 'Reverse',
        method: () => {
          this.setState(state => ({ goods: [...state.goods.reverse()] }));
        },
      },
    ],
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  select = (event) => {
    const { target: { value } } = event;
    const filterValue = +value;

    this.setState({
      selected: filterValue,
      goods: goodsFromServer.filter(word => word.length >= filterValue),
    });
  }

  render() {
    const { isStarted, goods } = this.state;
    const { filters } = this.filtersArr;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isStarted === true ? (
          <section>

            {filters.map(filter => (
              <Filter
                title={filter.title}
                method={filter.method}
                key={filter.title}
              />
            ))}
            <ListOfGoods list={goods} />

            <select
              className="length-filter"
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
