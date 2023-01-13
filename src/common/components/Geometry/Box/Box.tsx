import React from 'react';
import './Box.scss';

export const Box: React.FC = () => {
  return (
    <mesh> 
      <boxBufferGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='blue' /> 
    </mesh>
  );
};