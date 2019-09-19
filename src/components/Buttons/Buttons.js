import React from 'react';
import Button from '../Button/Button';

const Buttons = ({
  onClickReverse, onClickSortAlphabet,
  onClickReset, onClickSortLength }) => (
  <div className="container group-button">
    <Button className="button" onClick={onClickReset}>
      Reset
    </Button>
    <Button className="button" onClick={onClickReverse}>
      Reverse
    </Button>
    <Button className="button" onClick={onClickSortAlphabet}>
      Sort Alphabet
    </Button>
    <Button className="button" onClick={onClickSortLength}>
      Sort length
    </Button>
  </div>
);

export default Buttons;
