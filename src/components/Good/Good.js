import React from 'react';
import './Good.scss';
import { GoodTypes } from '../../constants/proptypes';

const Good = ({ good }) => <li>{good}</li>;

Good.propTypes = GoodTypes;

export default Good;
