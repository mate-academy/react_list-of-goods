import React from 'react';
import ButtonsList from '../ButtonsList/ButtonsList';
import goodsFromServer from '../../api/goodsFromServer';

const SortingSection = () => (
  <div>
    <ButtonsList goodsList={goodsFromServer} />
  </div>
);

export default SortingSection;
