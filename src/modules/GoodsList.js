import React from 'react';
import PropTypes from 'prop-types';
import SelectElements from './Select';
import Buttons from './Buttons';
import RenderGoods from './RenderGoods';

class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
  }

  sortByLength = () => {
    this.setState(previous => ({

      goods: [...previous.goods].sort((a, b) => a.length - b.length),
    }));
  };

  sortAlphabetically = () => {
    this.setState(previous => ({

      goods: [...previous.goods].sort(
        (a, b) => a.localeCompare(b),
      ),
    }));
  }

  reverse = () => {
    this.setState(previous => ({
      goods: [...previous.goods].reverse(),
    }));
  };

  selectByLength = (event) => {
    const length = event.target.value;

    this.setState(() => ({

      goods: this.props.goods.filter(unit => unit.length >= length),
    }));
  }

  reset = () => {
    this.setState(() => ({
      goods: [...this.props.goods],
    }));
  }

  render() {
    return (
      <section className="goodsList">
        <RenderGoods goods={this.state.goods} />
        <Buttons
          reset={() => this.reset()}
          reverse={() => this.reverse()}
          sortAlphabetically={() => this.sortAlphabetically()}
          sortByLength={() => this.sortByLength()}
        />
        <SelectElements
          selectByLength={event => this.selectByLength(event)}
        />
      </section>
    );
  }
}

export default GoodsList;

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
