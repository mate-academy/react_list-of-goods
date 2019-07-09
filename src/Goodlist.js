import React from 'react';

class Goodlist extends React.Component {
  render () {
    const item = this.props.goods.map(item =><li>{item}</li>);
    return (
      <ul style ={{display:'none'}}>
       {item}
      </ul>
    );
  };
}

export default Goodlist;
