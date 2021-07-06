import React from 'react';
import { Button } from '../Button';
import { ButtonsListShape } from '../../Shapes/ButtonsListShape';
import './ButtonsList.css';

export const ButtonsList = ({ buttonsList }) => (
  <ul className="buttonsList">
    {buttonsList.map(button => (
      <Button key={button.id} button={button} />
    ))}
  </ul>
);

ButtonsList.propTypes = ButtonsListShape;
