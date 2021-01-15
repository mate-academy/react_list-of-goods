import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import '../../App.scss';

export const ListButton = ({ onClickFunc, title }) => (
  <div className="App__button">
    <Button
      type="button"
      onClick={onClickFunc}
      variant="contained"
      color="primary"
    >
      {title}
    </Button>
  </div>
);

ListButton.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
