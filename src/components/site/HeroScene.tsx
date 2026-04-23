import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// A stylized 3D book — hardcover with crimson cover and gold accent
function Book({
  position,
  rotation,
  color = "#C8102E",
  scale = 1,
  accent = "#E0B84A",
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color?: string;
  scale?: number;
  accent?: string;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.22;
    ref.current.rotation.x = rotation[0] + Math.cos(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={ref as any} position={position} rotation={rotation} scale={scale}>
        <mesh position={[0, 0, 0.16]} castShadow receiveShadow>
          <boxGeometry args={[1.4, 2, 0.04]} />
          <meshStandardMaterial attach="material" color={color} roughness={0.32} metalness={0.18} />
        </mesh>
        <mesh position={[0, 0, -0.16]} castShadow>
          <boxGeometry args={[1.4, 2, 0.04]} />
          <meshStandardMaterial attach="material" color={color} roughness={0.32} metalness={0.18} />
        </mesh>
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1.36, 1.96, 0.28]} />
          <meshStandardMaterial attach="material" color="#fafafa" roughness={0.95} />
        </mesh>
        <mesh position={[-0.7, 0, 0]} castShadow>
          <boxGeometry args={[0.04, 2, 0.34]} />
          <meshStandardMaterial attach="material" color={color} roughness={0.4} metalness={0.22} />
        </mesh>
        <mesh position={[0, 0.4, 0.185]}>
          <planeGeometry args={[1.1, 0.06]} />
          <meshStandardMaterial
            attach="material"
            color={accent}
            metalness={0.95}
            roughness={0.25}
            emissive={accent}
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[0, -0.6, 0.185]}>
          <planeGeometry args={[0.7, 0.04]} />
          <meshStandardMaterial
            attach="material"
            color={accent}
            metalness={0.95}
            roughness={0.25}
            emissive={accent}
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[0, 0.05, 0.185]}>
          <planeGeometry args={[0.9, 0.5]} />
          <meshStandardMaterial
            attach="material"
            color={accent}
            metalness={0.7}
            roughness={0.4}
            opacity={0.22}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
}

// Magic open-book at the center that reacts to scrollProgress (0..1)
function MagicBook({ scrollProgress }: { scrollProgress: { current: number } }) {
  const leftPage = useRef<THREE.Group>(null);
  const rightPage = useRef<THREE.Group>(null);
  const group = useRef<THREE.Group>(null);
  const glow = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = THREE.MathUtils.clamp(scrollProgress.current, 0, 1);
    // Eased opening — pages swing outwards with scroll
    const open = THREE.MathUtils.smoothstep(p, 0, 0.65);
    const idleSway = Math.sin(t * 0.8) * 0.05;
    if (leftPage.current) leftPage.current.rotation.y = -open * (Math.PI / 2.2) - idleSway;
    if (rightPage.current) rightPage.current.rotation.y = open * (Math.PI / 2.2) + idleSway;
    if (group.current) {
      group.current.position.y = Math.sin(t * 0.6) * 0.08 + open * 0.2;
      group.current.rotation.x = -0.25 - open * 0.15;
    }
    if (glow.current) {
      glow.current.intensity = 0.5 + open * 2.2 + Math.sin(t * 3) * 0.2;
    }
  });

  return (
    <group ref={group as any} position={[0, -0.2, 0.6]}>
      {/* Spine */}
      <mesh castShadow>
        <boxGeometry args={[0.06, 1.6, 0.18]} />
        <meshStandardMaterial attach="material" color="#5B0E1F" roughness={0.5} metalness={0.3} />
      </mesh>

      {/* Left half */}
      <group ref={leftPage as any} position={[-0.03, 0, 0]}>
        <mesh position={[-0.6, 0, 0.08]} castShadow>
          <boxGeometry args={[1.2, 1.6, 0.04]} />
          <meshStandardMaterial attach="material" color="#C8102E" roughness={0.35} metalness={0.25} />
        </mesh>
        <mesh position={[-0.6, 0, 0.11]}>
          <planeGeometry args={[1.1, 1.5]} />
          <meshStandardMaterial attach="material" color="#fafafa" roughness={0.9} />
        </mesh>
      </group>

      {/* Right half */}
      <group ref={rightPage as any} position={[0.03, 0, 0]}>
        <mesh position={[0.6, 0, 0.08]} castShadow>
          <boxGeometry args={[1.2, 1.6, 0.04]} />
          <meshStandardMaterial attach="material" color="#C8102E" roughness={0.35} metalness={0.25} />
        </mesh>
        <mesh position={[0.6, 0, 0.11]}>
          <planeGeometry args={[1.1, 1.5]} />
          <meshStandardMaterial attach="material" color="#fafafa" roughness={0.9} />
        </mesh>
      </group>

      {/* Inner glow */}
      <pointLight ref={glow as any} position={[0, 0.2, 0.6]} color="#F5D27E" intensity={0.5} distance={4} />
      <Sparkles count={50} scale={[1.6, 2, 1]} size={3.2} speed={0.6} color="#F5D27E" position={[0, 0.4, 0.5]} />
    </group>
  );
}

// E-reader / tablet device
function EReader({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.9}>
      <group position={position} rotation={rotation}>
        <mesh castShadow>
          <boxGeometry args={[1.3, 1.8, 0.07]} />
          <meshStandardMaterial attach="material" color="#1a1a1a" roughness={0.35} metalness={0.7} />
        </mesh>
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[1.15, 1.6]} />
          <meshStandardMaterial attach="material" color="#fafafa" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        {[0.5, 0.35, 0.2, 0.05, -0.1, -0.25, -0.4, -0.55].map((y, i) => (
          <mesh key={i} position={[0, y, 0.041]}>
            <planeGeometry args={[0.85, 0.025]} />
            <meshBasicMaterial attach="material" color="#888888" />
          </mesh>
        ))}
        <mesh position={[0, 0.65, 0.041]}>
          <planeGeometry args={[0.55, 0.06]} />
          <meshBasicMaterial attach="material" color="#C8102E" />
        </mesh>
      </group>
    </Float>
  );
}

// A floating manuscript page
function Page({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  return (
    <Float speed={0.8} rotationIntensity={0.7} floatIntensity={1.3}>
      <group position={position} rotation={rotation}>
        <mesh castShadow>
          <boxGeometry args={[1, 1.4, 0.012]} />
          <meshStandardMaterial attach="material" color="#ffffff" roughness={0.85} />
        </mesh>
        {[0.5, 0.4, 0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3, -0.4, -0.5].map((y, i) => (
          <mesh key={i} position={[0, y, 0.007]}>
            <planeGeometry args={[0.78, 0.018]} />
            <meshBasicMaterial attach="material" color="#9b9b9b" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Scene({ scrollProgress }: { scrollProgress: { current: number } }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.18) * 0.14;
    group.current.position.y = Math.sin(t * 0.32) * 0.06;
  });

  // A richer composition of orbiting books framing the magic centerpiece
  const books = useMemo(
    () => [
      { pos: [-3.6, 1.0, -1.2] as [number, number, number], rot: [0.1, 0.5, -0.1] as [number, number, number], color: "#C8102E", scale: 1.0, accent: "#E0B84A" },
      { pos: [-2.0, -1.2, 0.4] as [number, number, number], rot: [-0.15, -0.3, 0.2] as [number, number, number], color: "#8B0000", scale: 0.85, accent: "#E0B84A" },
      { pos: [3.4, 0.7, -0.7] as [number, number, number], rot: [0.2, -0.5, 0.15] as [number, number, number], color: "#E63946", scale: 1.1, accent: "#F5D27E" },
      { pos: [2.0, -1.4, 0.6] as [number, number, number], rot: [-0.1, 0.4, -0.15] as [number, number, number], color: "#1a1a1a", scale: 0.9, accent: "#E0B84A" },
      { pos: [-2.8, 1.9, -0.4] as [number, number, number], rot: [-0.2, 0.7, 0.05] as [number, number, number], color: "#5B0E1F", scale: 0.78, accent: "#E0B84A" },
      { pos: [2.6, 1.8, 0.5] as [number, number, number], rot: [0.25, -0.6, -0.1] as [number, number, number], color: "#FAFAFA", scale: 0.72, accent: "#C8102E" },
      { pos: [-0.4, -2.0, 1.0] as [number, number, number], rot: [0.05, 0.2, 0.3] as [number, number, number], color: "#0F1115", scale: 0.95, accent: "#E0B84A" },
      { pos: [0.5, 1.9, -1.6] as [number, number, number], rot: [0.15, 0.2, 0.1] as [number, number, number], color: "#C8102E", scale: 0.9, accent: "#F5D27E" },
    ],
    []
  );

  return (
    <group ref={group as any}>
      {/* Centerpiece magic book */}
      <MagicBook scrollProgress={scrollProgress} />

      {books.map((b, i) => (
        <Book key={i} position={b.pos} rotation={b.rot} color={b.color} scale={b.scale} accent={b.accent} />
      ))}
      <EReader position={[-2.6, 1.1, 0.5]} rotation={[0.1, 0.5, -0.15]} />
      <EReader position={[2.9, -0.4, 0.8]} rotation={[-0.2, -0.3, 0.1]} />
      <Page position={[-1.0, 1.9, 0.4]} rotation={[0.2, -0.2, 0.3]} />
      <Page position={[1.5, 0.4, 1.4]} rotation={[-0.1, 0.5, -0.2]} />
      <Page position={[-2.2, -1.7, 0.9]} rotation={[0.3, 0.1, -0.2]} />
      <Page position={[3.6, -1.5, 0.5]} rotation={[-0.25, -0.4, 0.2]} />

      <Sparkles count={80} scale={[12, 7, 5]} size={2.8} speed={0.4} color="#E0B84A" opacity={0.7} />
      <Sparkles count={40} scale={[9, 6, 4]} size={2.0} speed={0.3} color="#C8102E" opacity={0.5} />
    </group>
  );
}

const HeroScene = ({ scrollProgress }: { scrollProgress: { current: number } }) => {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 7.6], fov: 48 }}
      shadows
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 8, 5]} intensity={1.3} castShadow />
      <directionalLight position={[-5, -3, 2]} intensity={0.45} color="#ffd2d2" />
      <pointLight position={[0, -3, 4]} intensity={0.7} color="#C8102E" />
      <pointLight position={[3, 4, 2]} intensity={0.5} color="#E0B84A" />

      <Suspense fallback={null}>
        <Scene scrollProgress={scrollProgress} />
        <ContactShadows position={[0, -2.8, 0]} opacity={0.32} scale={16} blur={3.5} far={6} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
