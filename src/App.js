import React from 'react';
import ShowPage from './components/ShowPage/ShowPage';

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
    isLoaded: false,
  }

  handleClick = () => this.setState({ isLoaded: true });

  render() {
    const { isLoaded } = this.state;

    return (
      <div className="App">
        <h1>Goods 1</h1>
        {isLoaded
          ? (<ShowPage listOfGoods={goodsFromServer} />)
          : (
            <button
              type="button"
              className="btn btn-primary btn-lg place"
              onClick={this.handleClick}
            >
                Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
