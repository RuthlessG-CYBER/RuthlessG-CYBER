"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ContinuousWave = () => {
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    let animationId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.08; // Speed of the wave
      if (pathRef.current) {
        let d = "M 0 25 ";
        for (let x = 0; x <= 150; x += 2) {
          // Envelope keeps the ends flat and animates the center
          const envelope = Math.sin((x / 150) * Math.PI);
          // Combine two sine waves for a realistic fluid motion
          const y = 25 + envelope * (Math.sin(x * 0.06 - time) * 10 + Math.sin(x * 0.1 - time * 1.2) * 4);
          d += `L ${x} ${y} `;
        }
        pathRef.current.setAttribute("d", d);
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <svg width="150" height="50" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
          <stop offset="20%" stopColor="#06b6d4" stopOpacity="1" />
          <stop offset="80%" stopColor="#06b6d4" stopOpacity="1" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path 
        ref={pathRef} 
        fill="transparent" 
        stroke="url(#waveGradient)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function FloatingDiagram() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Guarantee no duplicates from React strict mode
    currentMount.innerHTML = '';

    // Standardized renderer size
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(500, 500);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    // Advanced Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x06b6d4, 4);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create Anomalous Matter (Base Geometry)
    const geometry = new THREE.IcosahedronGeometry(2.5, 40);
    
    // Dual Mesh System for realistic 3D Tech Texture
    // 1. Inner Solid Core (hides back-facing wireframes for 3D depth)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x050505,
      roughness: 0.8,
      metalness: 0.2,
    });
    const coreMesh = new THREE.Mesh(geometry, coreMaterial);
    
    // 2. Outer Glowing Wireframe Shell
    const wireMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    // Slightly scale up the wireframe to sit perfectly on top of the core
    const wireMesh = new THREE.Mesh(geometry, wireMaterial);
    wireMesh.scale.set(1.01, 1.01, 1.01);

    // Group them together
    const sphereGroup = new THREE.Group();
    sphereGroup.add(coreMesh);
    sphereGroup.add(wireMesh);
    scene.add(sphereGroup);

    camera.position.z = 5.5; // Adjusted camera distance

    // Animation variables
    let time = 0;
    let animationFrameId: number;
    
    // Store original vertices for morphing calculations
    const originalPositions = geometry.attributes.position.array.slice();

    const animate = () => {
      time += 0.004; // Significantly slower for a very calm, majestic morph

      // Morphing effect (Anomalous Matter algorithm)
      const positions = geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];
        
        // 3D Noise displacement
        const noise = Math.sin(x * 1.5 + time) * Math.cos(y * 1.5 + time) * Math.sin(z * 1.5 + time);
        // Expand/contract randomly like anomalous matter
        const displacement = 1 + noise * 0.15; 

        positions[i] = x * displacement;
        positions[i + 1] = y * displacement;
        positions[i + 2] = z * displacement;
      }
      
      // Tell Three.js to update the geometry
      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals();

      // Smooth rotation
      sphereGroup.rotation.x += 0.001;
      sphereGroup.rotation.y += 0.002;

      // Gentle floating animation
      sphereGroup.position.y = Math.sin(time * 0.5) * 0.15;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      coreMaterial.dispose();
      wireMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center ml-auto mt-10 lg:mt-0">
      {/* Background ambient cyan glow (Tightened to not spread too much) */}
      <div className="absolute inset-1/4 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-[500px] h-[500px] flex items-center justify-center pointer-events-none" />

      {/* Continuous Voice Wave Effect */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <ContinuousWave />
      </div>
    </div>
  );
}
