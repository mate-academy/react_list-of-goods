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
    isClicked: false,
  }

  handleClick = () => this.setState({ isClicked: true });

  render() {
    const { isClicked } = this.state;

    return (
      <div className="App">
        <h1>Goods 1</h1>
        {isClicked
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
