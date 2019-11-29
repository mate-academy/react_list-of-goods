import React from 'react';

import Start from './Buttons/Start';
import Appear from './Appear';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  open = () => {
    this.setState({
      isShown: true,
    });
  }

  render() {
    return (
      <>
        <Start shown={this.state.isShown} open={this.open} />
        <Appear arrOfGoods={this.props} shown={this.state.isShown} />
      </>
    );
  }
}

export default List;
