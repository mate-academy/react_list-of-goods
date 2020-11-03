import React from 'react';
import PropTypes from 'prop-types';
import GoodList from './GoodList';

class Select extends React.Component {
  state = {
    isSelected: false,
  };

  select = () => {
    this.setState({
      isSelected: true,
    });
  }

  render() {
    const { isSelected } = this.state;
    const { goodsFromServer } = this.props;

    return (
      <>
        {isSelected ? (
          <GoodList
            goodsFromServer={goodsFromServer}
          />
        ) : (
          <button
            className="ui button black"
            type="button"
            onClick={this.select}
          >
            Start
          </button>
        )}
      </>
    );
  }
}

Select.propTypes = {
  goodsFromServer: PropTypes.arrayOf.isRequired,
};

export default Select;
