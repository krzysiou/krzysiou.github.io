import React from 'react';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

import './Blob.scss';

export const Blob: React.FC = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color='#8352FD' attach='material' distort={0.3} speed={1.5} roughness={1}/>
    </Sphere>
  );
};