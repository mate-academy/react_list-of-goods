import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './Buttons';
import { Select } from './Select';
import { List } from './List';

export class GoodsArea extends React.PureComponent {
  state = {
    goodsInitial: this.props.goods,
    goodsTemp: [...this.props.goods],
    selectDefaultValue: 1,
  }

  handleAlphabeticalSort = () => {
    const ascSorted = [...this.state.goodsTemp].sort();

    this.setState(() => ({ goodsTemp: ascSorted }));
  }

  handleReverse = () => {
    const descSorted = [...this.state.goodsTemp].reverse();

    this.setState(() => ({ goodsTemp: descSorted }));
  }

  handleReset = () => {
    this.setState(prevState => ({
      goodsTemp: [...prevState.goodsInitial],
      selectDefaultValue: 1,
    }));
  }

  handleAscLengthSort = () => {
    const ascLengthSorted = [...this.state.goodsTemp]
      .sort((a, b) => a.length - b.length);

    this.setState(() => ({ goodsTemp: ascLengthSorted }));
  }

  handleLengthCase = (data) => {
    const casesFilteredByLength = this.props.goods
      .filter(good => good.length >= data);

    this.setState({
      goodsTemp: casesFilteredByLength,
      selectDefaultValue: data,
    });
  }

  render() {
    const { options } = this.props;
    const { selectDefaultValue } = this.state;

    return (
      <>
        <div className="btn-group">
          <Buttons
            onSort={this.handleAlphabeticalSort}
            onReverse={this.handleReverse}
            onReset={this.handleReset}
            onLengthCase={this.handleAscLengthSort}
          />
          <Select
            defaultValue={selectDefaultValue}
            onChange={this.handleLengthCase}
            options={options}
          />
        </div>
        <List goods={this.state.goodsTemp} />
      </>
    );
  }
}

GoodsArea.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
};
