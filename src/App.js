import React from 'react';
import './App.css';
import { PreparedList } from './component/PreparedList';


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
    beginning: false,
  };

  getStart = () => {
    this.setState({
      beginning: true,
    });
  };

  render() {
    const { beginning } = this.state;

    return (
      <>
        <h1>List of goods</h1>
        {beginning
          ? <PreparedList list={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.getStart}
            >
              Start
            </button>
          )}
      </>
    )
  };
};

export default App;
