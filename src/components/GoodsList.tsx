import React from 'react';

interface Props {
  goods: string[],
}

export class GoodsList extends React.Component<Props, {}> {
  state = {};

  render() {
    const { goods } = this.props;

    return (
      <>
        <ul className="App__list">
          {goods.map(good => (
            <li key={good} className="App__item">
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
