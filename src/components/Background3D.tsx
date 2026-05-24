import { useRef } from 'react';
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
    ref.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.6;
    ref.current.rotation.x += 0.004;
    ref.current.rotation.y += 0.006;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.7}
        roughness={0.05}
        metalness={0.9}
      />
    </mesh>
  );
}

function FloatingRing({
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
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.z = state.clock.elapsedTime * 0.25;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1, 0.25, 16, 48]} />
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

function Cloud({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  const startX = position[0];

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x = startX + Math.sin(state.clock.elapsedTime * 0.08) * 2;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.12) * 0.3;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.85} roughness={1} />
      </mesh>
      <mesh position={[0.8, 0.1, 0]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.8} roughness={1} />
      </mesh>
      <mesh position={[-0.7, -0.1, 0.1]}>
        <sphereGeometry args={[0.75, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.8} roughness={1} />
      </mesh>
      <mesh position={[0.3, 0.4, 0]}>
        <sphereGeometry args={[0.55, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.7} roughness={1} />
      </mesh>
      <mesh position={[-0.2, 0.35, -0.2]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.75} roughness={1} />
      </mesh>
    </group>
  );
}

function GlowingOrb({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.4;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export default function Background3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.03) * 0.05;
  });

  return (
    <>
      {/* 暖色光照 - 日落感 */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 5]} intensity={1.5} color="#FFE4B5" />
      <pointLight position={[-4, 3, 4]} intensity={0.8} color="#FF8C69" />
      <pointLight position={[5, -2, 3]} intensity={0.4} color="#FFD700" />

      <group ref={groupRef}>
        {/* 大球体 - 暖色调，铺满视口 */}
        <FloatingSphere position={[-4, 2, -2]} scale={0.8} color="#FF6B6B" speed={0.5} />
        <FloatingSphere position={[4, -1, -1]} scale={0.65} color="#FFD93D" speed={0.7} />
        <FloatingSphere position={[-2, -2.5, 0]} scale={0.7} color="#FF8C69" speed={0.4} />
        <FloatingSphere position={[5, 1.5, -3]} scale={0.9} color="#FFA07A" speed={0.35} />
        <FloatingSphere position={[-5, -0.5, -3]} scale={0.55} color="#87CEEB" speed={0.6} />
        <FloatingSphere position={[1, 3, -2]} scale={0.5} color="#FFB6C1" speed={0.55} />
        <FloatingSphere position={[3, 3.5, -1]} scale={0.4} color="#FFD700" speed={0.8} />
        <FloatingSphere position={[-3, 3.5, -3]} scale={0.5} color="#FFA500" speed={0.65} />
        <FloatingSphere position={[0, -3, 0]} scale={0.6} color="#FF6B6B" speed={0.45} />
        <FloatingSphere position={[-6, 1, -2]} scale={0.45} color="#FFD93D" speed={0.5} />
        <FloatingSphere position={[6, -2, -2]} scale={0.55} color="#FFB6C1" speed={0.6} />

        {/* 旋转光环 */}
        <FloatingRing position={[2, 0, 0]} color="#FFD93D" speed={0.4} />
        <FloatingRing position={[-3, 2, -1]} color="#FF6B6B" speed={0.55} />
        <FloatingRing position={[4, 2.5, -2]} color="#FF8C69" speed={0.3} />
        <FloatingRing position={[-5, -1.5, -1]} color="#FFA500" speed={0.45} />

        {/* 云朵 */}
        <Cloud position={[-6, 3, -5]} scale={1.3} />
        <Cloud position={[5, 3.5, -6]} scale={1.1} />
        <Cloud position={[0, 4, -7]} scale={1.0} />
        <Cloud position={[-3, 5, -8]} scale={1.5} />
        <Cloud position={[7, 2.5, -4]} scale={0.9} />

        {/* 发光小光点 - 飘动的光粒子 */}
        <GlowingOrb position={[-3, 1, 1]} color="#FFD700" speed={1.2} />
        <GlowingOrb position={[2, 1.5, 0.5]} color="#FF6B6B" speed={0.9} />
        <GlowingOrb position={[0, -1, 1]} color="#FFA500" speed={1.1} />
        <GlowingOrb position={[-4, -1.5, 0]} color="#FFD93D" speed={0.8} />
        <GlowingOrb position={[3.5, 0.5, 0]} color="#FFB6C1" speed={1.0} />
        <GlowingOrb position={[-1, 2.5, 0]} color="#87CEEB" speed={1.3} />
        <GlowingOrb position={[3, -2, 0.5]} color="#FF8C69" speed={0.7} />
        <GlowingOrb position={[-2, 0, 1]} color="#FFD700" speed={1.5} />
        <GlowingOrb position={[5, 0, 0]} color="#FF6B6B" speed={1.0} />
        <GlowingOrb position={[-5, 2, 0]} color="#FFA500" speed={0.9} />
        <GlowingOrb position={[1, -3, 0.5]} color="#FFD93D" speed={1.1} />
        <GlowingOrb position={[-3, 3, -1]} color="#FFB6C1" speed={0.8} />
      </group>
    </>
  );
}
