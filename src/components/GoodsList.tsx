import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <>
    <h1>Goods</h1>
    <ListGroup className="list" as="ul">
      {goods.map(item => (
        <ListGroupItem key={item} as="li">
          {item}
        </ListGroupItem>
      ))}
    </ListGroup>
  </>
);
