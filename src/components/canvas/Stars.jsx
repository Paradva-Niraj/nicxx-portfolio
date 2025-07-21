import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

// 🟢 STYLES
const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
  pointer-events: none; // prevent canvas from blocking UI interactions
`;

// 🟢 STARS COMPONENT
const Stars = (props) => {
  const ref = useRef();

  // 🟢 Reduced from 5000 to 1500 points
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 1.4 }) // slight increase in radius to space out stars
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.004} // slightly larger but fewer points
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// 🟢 CANVAS WRAPPER
const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 1] }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
