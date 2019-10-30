import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import List from '../list/List';

class Init extends Component {
  state = {
    goods: this.props.goods,
    hiddenButton: false,
  };

  init = () => (
    this.setState(prevState => ({
      ...prevState,
      hiddenButton: !prevState.hiddenButton,
    }))
  );

  render() {
    const { goods } = this.props;

    return (
      this.state.hiddenButton
        ? (
          <List goods={goods} />
        ) : (
          <Button basic color="green" onClick={this.init}>Lets rock</Button>
        )
    );
  }
}

Init.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Init;
