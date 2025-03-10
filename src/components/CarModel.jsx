"use client";

import React, { useEffect, useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { AnimationMixer, Clock, MeshStandardMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL_URL = "model_huma_anatomic_desmuntable_mdeie(6).glb";

const ModelViewer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const preventScroll = (e) => e.stopPropagation();
      container.addEventListener("wheel", preventScroll, { passive: false });

      return () => container.removeEventListener("wheel", preventScroll);
    }
  }, []);

  return (
    <div ref={containerRef} className="mainPage1">
      <div class="hero-container">
  <h2 class="hero-heading Bebas">OnCology</h2>
</div>



{isLoading && (
        <div className="loader-container ">
          <div className="loader"></div>
          </div>
      )}

      <Canvas
        camera={{ position: [2, 2, 5], fov: 50 }}
        gl={{ powerPreference: "high-performance", antialias: true }}
        onCreated={() => setIsLoading(false)}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} minDistance={3} maxDistance={10} enablePan rotateSpeed={0.5} />
        <Suspense fallback={null}>
          <TractorModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

const TractorModel = () => {
  const myModel = useMemo(() => useLoader(GLTFLoader, MODEL_URL), []);
  const modelRef = useRef(null);
  const mixerRef = useRef(null);
  const clock = new Clock();

  useEffect(() => {
    if (myModel.animations.length > 0) {
      mixerRef.current = new AnimationMixer(myModel.scene);
      myModel.animations.forEach((clip) => {
        const action = mixerRef.current.clipAction(clip);
        action.play();
      });
    }

    myModel.scene.traverse((child) => {
      if (child.isMesh && !child.material) {
        child.material = new MeshStandardMaterial({ color: "white" });
      }
    });

    return () => {
      if (mixerRef.current) mixerRef.current.stopAllAction();
      myModel.scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material.isMaterial) {
            child.material.dispose();
          }
        }
      });
    };
  }, [myModel]);

  useFrame(() => {
    if (mixerRef.current) {
      mixerRef.current.update(clock.getDelta());
    }
  });

  return (
    <group ref={modelRef} scale={5 } position={[0, -5.5, -0.9]} rotation={[-0.6, Math.PI * 3.9, -0.0]}>
      <primitive object={myModel.scene} />
    </group>
  );
};

export default ModelViewer;
