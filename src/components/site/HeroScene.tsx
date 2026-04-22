import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// A stylized 3D book — hardcover with crimson cover and gold accent
function Book({ position, rotation, color = "#C8102E", scale = 1 }: {
  position: [number, number, number];
  rotation: [number, number, number];
  color?: string;
  scale?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        {/* Front cover */}
        <mesh position={[0, 0, 0.16]} castShadow>
          <boxGeometry args={[1.4, 2, 0.04]} />
          <meshStandardMaterial color={color} roughness={0.35} metalness={0.15} />
        </mesh>
        {/* Back cover */}
        <mesh position={[0, 0, -0.16]} castShadow>
          <boxGeometry args={[1.4, 2, 0.04]} />
          <meshStandardMaterial color={color} roughness={0.35} metalness={0.15} />
        </mesh>
        {/* Pages */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1.36, 1.96, 0.28]} />
          <meshStandardMaterial color="#fafafa" roughness={0.95} />
        </mesh>
        {/* Spine */}
        <mesh position={[-0.7, 0, 0]} castShadow>
          <boxGeometry args={[0.04, 2, 0.34]} />
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.2} />
        </mesh>
        {/* Gold band on cover */}
        <mesh position={[0, 0.4, 0.185]}>
          <planeGeometry args={[1.1, 0.06]} />
          <meshStandardMaterial color="#E0B84A" metalness={0.9} roughness={0.3} emissive="#E0B84A" emissiveIntensity={0.15} />
        </mesh>
        <mesh position={[0, -0.6, 0.185]}>
          <planeGeometry args={[0.7, 0.04]} />
          <meshStandardMaterial color="#E0B84A" metalness={0.9} roughness={0.3} emissive="#E0B84A" emissiveIntensity={0.15} />
        </mesh>
      </group>
    </Float>
  );
}

// E-reader / tablet device
function EReader({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group position={position} rotation={rotation}>
        {/* Body */}
        <mesh castShadow>
          <boxGeometry args={[1.3, 1.8, 0.07]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.6} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[1.15, 1.6]} />
          <meshStandardMaterial color="#fafafa" emissive="#ffffff" emissiveIntensity={0.4} />
        </mesh>
        {/* Text lines on screen */}
        {[0.5, 0.35, 0.2, 0.05, -0.1, -0.25, -0.4, -0.55].map((y, i) => (
          <mesh key={i} position={[0, y, 0.041]}>
            <planeGeometry args={[0.85, 0.025]} />
            <meshBasicMaterial color="#888888" />
          </mesh>
        ))}
        {/* Crimson title bar */}
        <mesh position={[0, 0.65, 0.041]}>
          <planeGeometry args={[0.55, 0.06]} />
          <meshBasicMaterial color="#C8102E" />
        </mesh>
      </group>
    </Float>
  );
}

// A floating manuscript page
function Page({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <Float speed={0.8} rotationIntensity={0.6} floatIntensity={1.2}>
      <group position={position} rotation={rotation}>
        <mesh castShadow>
          <boxGeometry args={[1, 1.4, 0.012]} />
          <meshStandardMaterial color="#ffffff" roughness={0.85} />
        </mesh>
        {[0.5, 0.4, 0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3, -0.4, -0.5].map((y, i) => (
          <mesh key={i} position={[0, y, 0.007]}>
            <planeGeometry args={[0.78, 0.018]} />
            <meshBasicMaterial color="#9b9b9b" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Animated camera that gently orbits
function Scene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.15) * 0.1;
    group.current.position.y = Math.sin(t * 0.3) * 0.05;
  });

  // Spread books across the scene
  const books = useMemo(
    () => [
      { pos: [-3.2, 0.6, -1] as [number, number, number], rot: [0.1, 0.4, -0.1] as [number, number, number], color: "#C8102E", scale: 1.05 },
      { pos: [-1.6, -0.8, 0.2] as [number, number, number], rot: [-0.15, -0.3, 0.2] as [number, number, number], color: "#8B0000", scale: 0.9 },
      { pos: [3, 0.4, -0.5] as [number, number, number], rot: [0.2, -0.5, 0.15] as [number, number, number], color: "#E63946", scale: 1.15 },
      { pos: [1.6, -1, 0.5] as [number, number, number], rot: [-0.1, 0.4, -0.15] as [number, number, number], color: "#1a1a1a", scale: 0.95 },
      { pos: [0.2, 1.2, -1.5] as [number, number, number], rot: [0.15, 0.2, 0.1] as [number, number, number], color: "#C8102E", scale: 1 },
    ],
    []
  );

  return (
    <group ref={group}>
      {books.map((b, i) => (
        <Book key={i} position={b.pos} rotation={b.rot} color={b.color} scale={b.scale} />
      ))}
      <EReader position={[-2.3, 1.1, 0.5]} rotation={[0.1, 0.5, -0.15]} />
      <EReader position={[2.6, -0.6, 0.8]} rotation={[-0.2, -0.3, 0.1]} />
      <Page position={[-0.8, 1.6, 0.3]} rotation={[0.2, -0.2, 0.3]} />
      <Page position={[1.3, 0.3, 1.2]} rotation={[-0.1, 0.5, -0.2]} />
      <Page position={[-2.1, -1.5, 0.8]} rotation={[0.3, 0.1, -0.2]} />
    </group>
  );
}

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      shadows
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-5, -3, 2]} intensity={0.4} color="#ffd2d2" />
      <pointLight position={[0, -3, 4]} intensity={0.6} color="#C8102E" />

      <Suspense fallback={null}>
        <Scene />
        <ContactShadows position={[0, -2.4, 0]} opacity={0.25} scale={12} blur={3} far={4} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
