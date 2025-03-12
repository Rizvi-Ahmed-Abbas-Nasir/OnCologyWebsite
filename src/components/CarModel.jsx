"use client";

import React, { useEffect, useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { AnimationMixer, Clock, MeshStandardMaterial, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Html } from "@react-three/drei";

const MODEL_URL = "model_huma_anatomic_desmuntable_mdeie(6).glb";

const ModelViewer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="mainPage1 relative">
      <div className="hero-container">
        <h2 className="hero-heading Bebas">Oncology</h2>
      </div>

      {isLoading && (
        <div className="loader-container">
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
        <OrbitControls enableZoom={false} minDistance={2} maxDistance={10} enablePan rotateSpeed={0.5} />
        <Suspense fallback={null}>
        <HumanModel 
  setSelectedSection={setSelectedSection} 
  setHoveredSection={setHoveredSection} 
  hoveredSection={hoveredSection} 
/>
   </Suspense>
      </Canvas>

   
    </div>
  );
};
const HumanModel = ({ setSelectedSection, setHoveredSection, hoveredSection }) => {
  const modelRef = useRef(null);
  const mixerRef = useRef(null);
  const clock = useRef(new Clock());
  const { camera } = useThree();
  
  // Properly memoized model loading
  const myModel = useLoader(GLTFLoader, MODEL_URL);

  const annotations = [
    { 
      id: 1, 
      position: new Vector3(0, 1.6, 0), 
      details: "Brain: The command center of the body, responsible for processing sensory information, controlling movement, regulating emotions, and enabling cognition, memory, and reasoning." 
    },
    { 
      id: 2, 
      position: new Vector3(0, 1.2, 0), 
      details: "Heart: A muscular organ that continuously pumps oxygenated blood throughout the body via the circulatory system, ensuring oxygen and nutrients reach all tissues and organs." 
    },
    { 
      id: 3, 
      position: new Vector3(0, 1, 0), 
      details: "Liver: A vital organ responsible for detoxifying harmful substances, metabolizing nutrients, producing bile for digestion, and regulating blood sugar and cholesterol levels." 
    },
    { 
      id: 4, 
      position: new Vector3(0, 0.9, 0.2), 
      details: "Stomach: A muscular organ that breaks down food using acid and digestive enzymes, initiating the digestion process and facilitating nutrient absorption in the intestines." 
    }
  ];
  
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
      mixerRef.current.update(clock.current.getDelta());
    }
  });

  const handleClick = (annotation) => {
    setSelectedSection(annotation);
    camera.position.lerp(
      new Vector3(annotation.position.x, annotation.position.y, annotation.position.z + 2),
      0.1
    );
  };

  const handlePointerOver = (event, annotation) => {
    if (event.clientX && event.clientY) {
      setHoveredSection({ details: annotation.details, x: event.clientX, y: event.clientY });
    }
  };

  const handlePointerOut = () => {
    setHoveredSection(null);
  };

  return (
    <group ref={modelRef} scale={5} position={[0, -5.5, -0.9]} rotation={[-0.6, Math.PI * 3.9, -0.0]}>
    <primitive object={myModel.scene} />

    {annotations.map((annotation) => (
      <Html key={annotation.id} position={annotation.position} center>
        <div 
          className="annotation-label" 
          onClick={() => handleClick(annotation)}
          onMouseEnter={(e) => handlePointerOver(e, annotation)}
          onMouseLeave={handlePointerOut}
        >
          {annotation.id}
          {hoveredSection && hoveredSection.details === annotation.details && (
            <div className="tooltip">{annotation.details}</div> 
          )}
        </div>
      </Html>
    ))}
  </group>
  );
};



export default ModelViewer;