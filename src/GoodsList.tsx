import React from 'react';

type Props = {
  goods: string[];
};

class GoodsList extends React.PureComponent<Props, {}> {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(good => (
          <li key={good}>{good}</li>
        ))}
      </ul>
    );
  }
}

export default GoodsList;
