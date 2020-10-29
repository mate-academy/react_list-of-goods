import React from 'react';
import PropTypes from 'prop-types';
import GoodList from './GoodList';

class Content extends React.Component {
  state = {
    content: false,
  };

  content = () => {
    this.setState({
      content: true,
    });
  }

  render() {
    const { content } = this.state;
    const { goodsFromServer } = this.props;

    return (
      <>
        {content ? (
          <GoodList
            goodsFromServer={goodsFromServer}
          />
        ) : (
          <button
            className="ui button black"
            type="button"
            onClick={this.content}
          >
            Start
          </button>
        )}
      </>
    );
  }
}

Content.propTypes = {
  goodsFromServer: PropTypes.arrayOf.isRequired,
};

export default Content;
