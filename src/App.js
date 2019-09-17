import React from 'react';
// import Goods from './Goods';
import './App.css';

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

class App extends React.Component {
  state = {
    listOfGoods: [...goodsFromServer],
    pageTitle: 'List of Goods',
    showList: false,
    isActive: true,
    value: 1,
    originalGoods: [...goodsFromServer],
  }

  toggleDisplayList = () => {
    this.setState(prevState => ({
      showList: !prevState.showList,
      isActive: !prevState.isActive,
    }));
  }

     onReverse = () => {
       this.setState(prevState => ({
         listOfGoods: [...prevState.listOfGoods].reverse(),
       }));
     };

    onAZSort = () => {
      this.setState(prevState => ({
        listOfGoods: [...prevState.listOfGoods].sort(),
      }));
    };

    onLenghtSort = () => {
      this.setState(prevState => ({
        listOfGoods: [...prevState.listOfGoods].sort(
          (a, b) => a.length - b.length
        ),
      }));
    };

onReset = () => {
  this.setState(prevState => ({
    listOfGoods: prevState.originalGoods,
    value: 1,
  }));
}

hadleChangeSelect = ({ target }) => {
  const { value } = target;

  this.setState(prevState => ({
    value,
    listOfGoods: prevState.originalGoods.filter(item => item.length >= value),
  }));
}

render() {
  return (
    <div>
      <h1>{this.state.pageTitle}</h1>

      { this.state.isActive
        ? (
          <button
            type="submit"
            className="btn"
            onClick={this.toggleDisplayList}
          >
          Display
          </button>
        )
        : null
      }

      {this.state.showList
        ? (
          <div>
            <button type="submit" onClick={this.onReverse}>Reverse</button>
            <button type="submit" onClick={this.onAZSort}>A-Z Sort</button>
            <button type="submit" onClick={this.onReset}>Reset</button>
            <button
              type="submit"
              onClick={this.onLenghtSort}
            >
              Length sort
            </button>
            <form>
              <select
                value={this.state.value}
                onChange={this.hadleChangeSelect}
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
              </select>
            </form>

          </div>
        )
        : null
      }

      <ul>
        {this.state.showList
          ? this.state.listOfGoods.map(item => (
            <li key={item} className="goods-list">
              {item}
            </li>
          ))
          : null
        }
      </ul>
    </div>
  );
}
}

export default App;
