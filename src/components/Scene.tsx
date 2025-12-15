import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Scene() {
  const gltf = useGLTF('/models/hero.glb');   // place hero.glb in public/models
  const meshRef = useRef<any>(null);

  // Simple rotation animation with GSAP
  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.rotation, {
        y: Math.PI * 2,
        duration: 6,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <primitive ref={meshRef} object={gltf.scene} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
