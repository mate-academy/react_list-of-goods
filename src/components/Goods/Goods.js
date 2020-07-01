import React from 'react';
import { GoodsShape } from '../Shapes/GoodsShape';
import ButtonMain from '../ButtonMain/ButtonMain';
import GoodsList from '../GoodsList/GoodsList';
import ButtonsSort from '../ButtonsSort/ButtonsSort';
import GoodsSelection from '../GoodsSelection/GoodsSelection';

class Goods extends React.Component {
  state = {
    isActive: true,
    goods: [...this.props.goods],
    defaultValue: 1,
  };

  handleShowingList = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  handleReverse = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  handleSortAlphabetically = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => a.localeCompare(b)),
    }));
  };

  handleSortByLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => a.length - b.length),
    }));
  }

  handleReset = () => {
    this.setState({
      goods: [...this.props.goods],
      defaultValue: 1,
    });
  }

  handleSelectLength = (digit) => {
    this.setState({
      goods: [...this.props.goods].filter(item => item.length >= digit),
    });
  }

  onSelectChange = (e) => {
    this.setState({ defaultValue: Number(e) });
  }

  render() {
    const { isActive } = this.state;
    const { goods } = this.state;

    return (
      isActive
        ? <ButtonMain onClick={this.handleShowingList} />
        : (
          <div
            className="goods__container"
          >
            <GoodsList goods={goods} />
            <ButtonsSort
              handleReverse={this.handleReverse}
              handleAlphabetically={this.handleSortAlphabetically}
              handleByLength={this.handleSortByLength}
              handleReset={this.handleReset}
            />
            <GoodsSelection
              handleSelectLength={this.handleSelectLength}
              defaultValue={this.state.defaultValue}
              onSelectChange={this.onSelectChange}
            />
          </div>
        )
    );
  }
}

Goods.propTypes = GoodsShape.isRequired;

export default Goods;
