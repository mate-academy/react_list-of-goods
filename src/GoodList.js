import React from 'react';

class GoodList extends React.Component {
  render () {
    const item = this.props.goods.map(item =><li>{item}</li>);
    return (
      <ul>
       {item}
      </ul>
    );
  };
}

export default GoodList;
