import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import OrderForm from '../orderForm/OrderForm';

class NewOrder extends React.PureComponent {
  state = {
    btnHidden: false,
    goods: this.props.goods,
  };

  buttonClick = (event) => {
    this.setState(prevState => ({
      ...prevState,
      btnHidden: !prevState.btnHidden,
    }));
  };

  render() {
    return (
      this.state.btnHidden
        ? (
          <OrderForm goods={this.state.goods} />
        ) : (
          <Button
            color="teal"
            content="Create New Order"
            icon="add"
            labelPosition="left"
            onClick={this.buttonClick}
          />
        )
    );
  }
}

NewOrder.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default NewOrder;
