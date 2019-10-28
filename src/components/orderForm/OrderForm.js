import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import GoodsList from '../goodsList/goodsList';
import OrderList from '../orderList/OrderList';
import SelectLength from '../selectForSortByLength/SelectLength';

class OrderForm extends React.PureComponent {
  state = {
    defaultGoods: this.props.goods, // this goods will never change, it's original information from server
    goods: this.props.goods,
    shoppingCart: [],
    sortByLength: false,
  }

  listClick = (event) => {
    const listItem = event.target;

    if (listItem.className !== 'content') {
      return;
    }

    this.setState((prevState) => {
      const updatedShoppingCart = [...prevState.shoppingCart];

      updatedShoppingCart.push(listItem.textContent);

      return ({
        ...prevState,
        shoppingCart: updatedShoppingCart,
      });
    });
  };

  btnReverseClick = (event) => {
    this.setState((prevState) => {
      const reversedShoppingCart = [...prevState.shoppingCart.reverse()];

      return ({
        ...prevState,
        shoppingCart: reversedShoppingCart,
      });
    });
  }

  btnClearShoppingListClick = (event) => {
    this.setState(prevState => ({
      ...prevState,
      shoppingCart: [],
    }));
  }

  btnSortAlphabetClick = (event) => {
    this.setState((prevState) => {
      const sortedShoppingCart = [...prevState.shoppingCart.sort((a, b) => a.localeCompare(b))];

      return ({
        ...prevState,
        shoppingCart: sortedShoppingCart,
      });
    });
  }

  btnSortByLengthLClick = (event) => {
    this.setState(prevState => ({
      ...prevState,
      sortByLength: !prevState.sortByLength,
    }));
  }

  btnResetSortByLengthClick = (event) => {
    this.setState(prevState => ({
      ...prevState,
      goods: prevState.defaultGoods,
      sortByLength: false,
    }));
  }

  changeSelectLengthForSort = (event) => {
    const lengthOfSorting = Number(event.target.textContent)

    this.setState(prevState => ({
      ...prevState,
      goods: prevState.defaultGoods.filter(good => good.length <= lengthOfSorting),
    }));
  }

  render() {
    return (
      <>
        <GoodsList goods={this.state.goods} clickFunction={this.listClick} />
        <OrderList orderedItems={this.state.shoppingCart} />
        <Button secondary onClick={this.btnReverseClick}>Reverse</Button>
        <br />
        <br />
        <Button secondary onClick={this.btnSortAlphabetClick}>Sort alphabetically</Button>
        <br />
        <br />
        <Button secondary onClick={this.btnClearShoppingListClick}>Clear shopping list</Button>
        <br />
        <br />
        <Button secondary onClick={this.btnResetSortByLengthClick}>Reset sorting by length</Button>
        <br />
        <br />
        {
          this.state.sortByLength ? (
            <SelectLength clickFunction={this.changeSelectLengthForSort} />
          ) : (
            <Button secondary onClick={this.btnSortByLengthLClick}>Sort by length</Button>
          )
        }
      </>
    );
  }
}

OrderForm.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default OrderForm;
