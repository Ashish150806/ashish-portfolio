'use client';

import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Skill = {
  name: string;
  level: string;
  group: string;
  color: string;
};

function SkillOrb({ skill, position, onSelect }: { skill: Skill; position: [number, number, number]; onSelect: (skill: Skill) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.006;
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.0004;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation();
        onSelect(skill);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.14, 24, 24]} />
      <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={hovered ? 0.7 : 0.25} />
      {hovered && (
        <Html position={[0, 0.25, 0]} center>
          <div className="rounded-full border border-violet-400/50 bg-background/85 px-3 py-1 text-[10px] font-semibold text-violet-200 shadow-lg shadow-violet-500/20">
            {skill.name}
          </div>
        </Html>
      )}
    </mesh>
  );
}

export function SkillsGalaxy({ skills }: { skills: Skill[] }) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const positions = useMemo(() => {
    return skills.map((_, index) => {
      const radius = 2.1 + (index % 4) * 0.35;
      const theta = (index / skills.length) * Math.PI * 2;
      const phi = (index % 3) * 0.65;
      return [
        Math.cos(theta) * Math.cos(phi) * radius,
        Math.sin(phi) * radius * 0.75,
        Math.sin(theta) * Math.cos(phi) * radius,
      ] as [number, number, number];
    });
  }, [skills]);

  return (
    <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-background/70">
      <Canvas camera={{ position: [0, 0, 4.1], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 4, 4]} intensity={1.5} color="#c4b5fd" />
        <pointLight position={[-4, -2, -3]} intensity={1.2} color="#e879f9" />
        <fog attach="fog" args={["#0c0a14", 2, 8]} />
        <group rotation={[0.2, 0.3, 0]}>
          {skills.map((skill, index) => (
            <SkillOrb key={skill.name} skill={skill} position={positions[index]} onSelect={setSelectedSkill} />
          ))}
        </group>
        <OrbitControls enablePan={false} enableZoom enableRotate makeDefault />
      </Canvas>

      {selectedSkill && (
        <div className="absolute left-4 top-4 rounded-2xl border border-violet-400/40 bg-background/85 px-4 py-3 text-sm shadow-lg shadow-violet-500/10">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Selected skill</p>
          <p className="mt-1 font-semibold text-white">{selectedSkill.name}</p>
          <p className="text-muted-foreground">Proficiency: {selectedSkill.level}</p>
        </div>
      )}
    </div>
  );
}
