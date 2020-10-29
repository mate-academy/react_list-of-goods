import React from 'react';
import PropTypes from 'prop-types';
import GoodList from './GoodList';

class Show extends React.Component {
  state = {
    show: false,
  };

  show = () => {
    this.setState({
      show: true,
    });
  }

  render() {
    const { show } = this.state;
    const { goodsFromServer } = this.props;

    return (
      <>
        {show
          ? (
            <GoodList
              goodsFromServer={goodsFromServer}
            />
          )
          : (
            <button
              className="ui button"
              type="button"
              onClick={this.show}
            >
              Start
            </button>
          )
        }
      </>
    );
  }
}

Show.propTypes = {
  goodsFromServer: PropTypes.arrayOf.isRequired,
};

export default Show;
