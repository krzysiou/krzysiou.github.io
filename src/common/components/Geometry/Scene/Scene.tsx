import React from 'react';
import './Scene.scss';

import { Canvas } from '@react-three/fiber';
import { Box } from '../Box/Box';

export const Scene: React.FC = () => {
  return (
    <Canvas className='canvas'>
      <Box />
    </Canvas>
  );
};