import React from 'react';
import { GoodProps } from '../../props/GoodProps';

export const Good = React.memo(({ name }) => <p>{name}</p>);

Good.propTypes = GoodProps;
