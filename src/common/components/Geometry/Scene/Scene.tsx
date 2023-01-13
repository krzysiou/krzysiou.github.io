import React, { Suspense } from 'react';
import './Scene.scss';

import { Canvas } from '@react-three/fiber';
import { Box } from '../Box/Box';
import { OrbitControls } from '@react-three/drei';
import { Blob } from '../Blob/Blob';

export const Scene: React.FC = () => {
  return (
    <>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Blob />
        </Suspense>
      </Canvas>
    </>
  );
};