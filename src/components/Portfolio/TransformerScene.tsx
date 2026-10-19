import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const TokenCluster = ({ position, color }: { position: [number, number, number]; color: string }) => (
  <group position={position}>
    {[-0.35, 0, 0.35].map((offset) => (
      <mesh key={offset} position={[offset, offset * 0.32, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} />
      </mesh>
    ))}
  </group>
);

const AttentionModel = () => {
  const group = useRef<THREE.Group>(null);
  const orbit = useRef<THREE.Group>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(elapsed * 0.45) * 0.18;
      group.current.position.y = Math.sin(elapsed * 0.8) * 0.08;
    }
    if (orbit.current) orbit.current.rotation.z = elapsed * 0.45;
  });

  return (
    <group ref={group}>
      <TokenCluster position={[-2.1, 0, 0]} color="#80c7ff" />
      <group ref={orbit} position={[0, 0, 0]}>
        {[0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((angle) => (
          <mesh key={angle} position={[Math.cos(angle) * 0.68, Math.sin(angle) * 0.68, 0]}>
            <sphereGeometry args={[0.18, 20, 20]} />
            <meshStandardMaterial color="#a7f3d0" emissive="#a7f3d0" emissiveIntensity={0.55} />
          </mesh>
        ))}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.77, 0.018, 12, 48]} />
          <meshBasicMaterial color="#a7f3d0" transparent opacity={0.7} />
        </mesh>
      </group>
      <TokenCluster position={[2.1, 0, 0]} color="#f4f5f7" />
      <mesh position={[-1.1, 0, 0]} scale={[0.78, 0.018, 0.018]}>
        <boxGeometry />
        <meshBasicMaterial color="#4f86a8" />
      </mesh>
      <mesh position={[1.1, 0, 0]} scale={[0.78, 0.018, 0.018]}>
        <boxGeometry />
        <meshBasicMaterial color="#4f86a8" />
      </mesh>
    </group>
  );
};

const TransformerScene = () => (
  <Canvas className="transformer-canvas" dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 34 }} gl={{ alpha: true, antialias: true }}>
    <ambientLight intensity={0.6} />
    <pointLight position={[0, 2, 4]} intensity={10} color="#80c7ff" />
    <AttentionModel />
  </Canvas>
);

export default TransformerScene;
