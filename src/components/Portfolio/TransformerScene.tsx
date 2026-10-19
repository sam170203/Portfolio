import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Point = [number, number, number];

const inputs: Point[] = [[-3.25, -1.05, 0], [-3.25, -0.35, 0], [-3.25, 0.35, 0], [-3.25, 1.05, 0]];
const heads: Point[] = [[-0.9, -1.05, 0], [-0.9, 0, 0.2], [-0.9, 1.05, 0]];
const blocks: Point[] = [[1.05, -0.75, 0], [1.05, 0, 0.22], [1.05, 0.75, 0]];
const output: Point = [3.2, 0, 0];

const Beam = ({ from, to, color = "#4f86a8", opacity = 0.3 }: { from: Point; to: Point; color?: string; opacity?: number }) => {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const length = Math.hypot(dx, dy);

  return (
    <mesh position={[(from[0] + to[0]) / 2, (from[1] + to[1]) / 2, -0.05]} rotation={[0, 0, Math.PI / 2 - Math.atan2(dy, dx)]}>
      <cylinderGeometry args={[0.012, 0.012, length, 8]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
};

const Flow = ({ from, to, offset, color }: { from: Point; to: Point; offset: number; color: string }) => {
  const pulse = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const progress = (state.clock.getElapsedTime() * 0.23 + offset) % 1;
    if (pulse.current) {
      pulse.current.position.set(
        THREE.MathUtils.lerp(from[0], to[0], progress),
        THREE.MathUtils.lerp(from[1], to[1], progress),
        THREE.MathUtils.lerp(from[2], to[2], progress) + 0.22,
      );
      pulse.current.scale.setScalar(0.6 + Math.sin(progress * Math.PI) * 0.65);
    }
  });

  return (
    <mesh ref={pulse}>
      <sphereGeometry args={[0.075, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const AttentionModel = () => {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Group>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = state.pointer.x * 0.12 + Math.sin(elapsed * 0.23) * 0.09;
      group.current.rotation.x = state.pointer.y * -0.08;
      group.current.position.y = Math.sin(elapsed * 0.55) * 0.06;
    }
    if (core.current) core.current.rotation.z = elapsed * 0.32;
  });

  return (
    <group ref={group}>
      {inputs.map((position, index) => <mesh key={"input-" + index} position={position}><boxGeometry args={[0.22, 0.22, 0.22]} /><meshStandardMaterial color="#80c7ff" emissive="#80c7ff" emissiveIntensity={0.4} /></mesh>)}
      {inputs.flatMap((input, inputIndex) => heads.map((head, headIndex) => <Beam key={inputIndex + "-" + headIndex} from={input} to={head} opacity={0.18} />))}
      {heads.map((position, index) => <mesh key={"head-" + index} position={position}><sphereGeometry args={[0.2, 20, 20]} /><meshStandardMaterial color="#a7f3d0" emissive="#a7f3d0" emissiveIntensity={0.72} /></mesh>)}
      <group ref={core} position={[-0.9, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.38, 0.02, 12, 64]} /><meshBasicMaterial color="#a7f3d0" transparent opacity={0.55} /></mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}><torusGeometry args={[1.05, 0.014, 12, 64]} /><meshBasicMaterial color="#80c7ff" transparent opacity={0.34} /></mesh>
      </group>
      {heads.flatMap((head, headIndex) => blocks.map((block, blockIndex) => <Beam key={"h-" + headIndex + "-" + blockIndex} from={head} to={block} color="#80c7ff" opacity={0.2} />))}
      {blocks.map((position, index) => <mesh key={"block-" + index} position={position}><boxGeometry args={[0.28, 0.5, 0.28]} /><meshStandardMaterial color="#5d83ff" emissive="#5d83ff" emissiveIntensity={0.38} /></mesh>)}
      {blocks.map((block, index) => <Beam key={"out-" + index} from={block} to={output} color="#f4f5f7" opacity={0.24} />)}
      <mesh position={output}><sphereGeometry args={[0.3, 24, 24]} /><meshStandardMaterial color="#f4f5f7" emissive="#80c7ff" emissiveIntensity={1.1} /></mesh>
      {inputs.map((input, index) => <Flow key={"input-flow-" + index} from={input} to={heads[index % heads.length]} offset={index * 0.18} color="#80c7ff" />)}
      {heads.map((head, index) => <Flow key={"head-flow-" + index} from={head} to={blocks[index]} offset={0.25 + index * 0.21} color="#a7f3d0" />)}
      {blocks.map((block, index) => <Flow key={"output-flow-" + index} from={block} to={output} offset={0.6 + index * 0.17} color="#f4f5f7" />)}
    </group>
  );
};

const TransformerScene = () => (
  <Canvas className="transformer-canvas" dpr={[1, 1.5]} camera={{ position: [0, 0, 8.6], fov: 38 }} gl={{ alpha: true, antialias: true }}>
    <ambientLight intensity={0.45} />
    <pointLight position={[-1, 2.5, 4]} intensity={13} color="#80c7ff" />
    <pointLight position={[3, -1, 3]} intensity={9} color="#a7f3d0" />
    <AttentionModel />
  </Canvas>
);

export default TransformerScene;
