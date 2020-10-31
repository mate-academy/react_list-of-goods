import React from 'react';
import PropTypes from 'prop-types';
import GoodList from './GoodList';

class Select extends React.Component {
  state = {
    select: false,
  };

  select = () => {
    this.setState({
      select: true,
    });
  }

  render() {
    const { select } = this.state;
    const { goodsFromServer } = this.props;

    return (
      <>
        {select ? (
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
