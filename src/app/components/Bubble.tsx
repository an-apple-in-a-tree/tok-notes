"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Bubble = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMountRef = mountRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030026);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Define smaller size for the canvas
    const width = 400; // Desired width
    const height = 200; // Desired height
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparency
    renderer.setSize(width, height);

    // Append the renderer to the mount div
    if (currentMountRef) {
      currentMountRef.appendChild(renderer.domElement);
    }

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(1, 32, 32);

    // Create a shader material for the gradient
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0xDBFF00) },
        color2: { value: new THREE.Color(0x00FF47) },
      },
      vertexShader: `
        varying vec3 vUv; 

        void main() {
          vUv = position; 

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vUv;

        void main() {
          float mixValue = (vUv.y + 1.0) / 2.0;
          gl_FragColor = vec4(mix(color1, color2, mixValue), 1.0);
        }
      `,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (currentMountRef && currentMountRef.firstChild) {
        currentMountRef.removeChild(currentMountRef.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "600px", // Increased width for longer length
        height: "300px", // Decreased height for shorter height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "80%",
        left: "70%",
        transform: "translate(-50%, -50%)",
        margin: "auto", // Adjust the margin to position the canvas
      }}
    />
  );
};

export default Bubble;
