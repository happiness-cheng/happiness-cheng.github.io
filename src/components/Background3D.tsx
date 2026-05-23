import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingSphere({
  position,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

function FloatingTorus({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + 1) * 0.8;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.8, 0.3, 16, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.5}
        roughness={0.2}
        metalness={0.6}
      />
    </mesh>
  );
}

function Stars({ count = 200 }: { count?: number }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return positions;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(points, 3));
    return geo;
  }, [points]);

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function CloudGroup({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  const startX = position[0];

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x = startX + Math.sin(state.clock.elapsedTime * 0.1) * 1.5;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.15) * 0.3;
  });

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.7} roughness={1} />
      </mesh>
      <mesh position={[0.6, -0.1, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.6} roughness={1} />
      </mesh>
      <mesh position={[-0.5, -0.15, 0.2]}>
        <sphereGeometry args={[0.65, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.65} roughness={1} />
      </mesh>
      <mesh position={[0.2, 0.3, -0.1]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.5} roughness={1} />
      </mesh>
    </group>
  );
}

export default function Background3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.05) * 0.1;
  });

  return (
    <>
      {/* Lighting - 新海诚风格的柔和光照 */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.0} color="#FFD700" />
      <pointLight position={[-3, 2, 3]} intensity={0.5} color="#FF69B4" />

      <group ref={groupRef}>
        {/* 漂浮球体 - 新海诚风色调 */}
        <FloatingSphere position={[-4, 2, -3]} scale={0.5} color="#87CEEB" speed={0.8} />
        <FloatingSphere position={[3, -1, -2]} scale={0.35} color="#FFB6C1" speed={1.0} />
        <FloatingSphere position={[-2, -2, -1]} scale={0.4} color="#FFA07A" speed={0.6} />
        <FloatingSphere position={[5, 3, -4]} scale={0.6} color="#DDA0DD" speed={0.5} />
        <FloatingSphere position={[-5, 0, -5]} scale={0.45} color="#B0E0E6" speed={0.7} />
        <FloatingSphere position={[1, 4, -3]} scale={0.3} color="#FFE4B5" speed={0.9} />

        {/* 漂浮环 */}
        <FloatingTorus position={[2, 1, -2]} color="#FF69B4" speed={0.5} />
        <FloatingTorus position={[-3, 3, -3]} color="#87CEEB" speed={0.7} />

        {/* 云朵 */}
        <CloudGroup position={[-6, 4, -6]} />
        <CloudGroup position={[4, 5, -8]} />
        <CloudGroup position={[0, 3.5, -7]} />

        {/* 星星背景 */}
        <Stars count={300} />
      </group>
    </>
  );
}
