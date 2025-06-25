"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { random } from "maath";

interface ParticleFieldProps {
  count?: number;
}

function ParticleField({ count = 1000 }: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    // Create a properly typed Float32Array
    const positions = new Float32Array(count * 3);
    // Use random.inSphere for randomization but ensure type safety
    const randomPoints = random.inSphere(new Float32Array(count * 3), { radius: 20 });
    // Copy values to ensure correct typing
    for (let i = 0; i < randomPoints.length; i++) {
      positions[i] = randomPoints[i];
    }
    return positions;
  });

  useFrame((_state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 20;
      points.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.2}
        />
      </Points>
    </group>
  );
}

export default function BackgroundEffect() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render Canvas on the client to avoid SSR issues
  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none opacity-70">
      <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
