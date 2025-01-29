"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";

const RoboticEye = ({ mousePosition }) => {
  const gltf = useGLTF("/models/eye.glb");
  const eyeRef = useRef<any>();

  useFrame(() => {
    if (eyeRef.current) {
      const { x, y } = mousePosition;
      eyeRef.current.rotation.y = (x - 0.5) * Math.PI * 0.3;
      eyeRef.current.rotation.x = -y * Math.PI * 0.3;
    }
  });

  return <primitive ref={eyeRef} object={gltf.scene} scale={5} position={[5, 0, 0]} />;
};

const MainPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event: { clientX: number; clientY: number }) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <section className="relative z-10 h-screen overflow-hidden pt-16 lg:pt-28">
      {/* Canvas ca background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RoboticEye mousePosition={mousePosition} />
        </Canvas>
      </div>

      {/* Textul pe partea stângă */}
      <div className="container h-full relative flex items-center">
        <div className="w-full max-w-[600px] px-4">
          <SectionTitle
            title="Transformăm ideile tale în realitate digitală"
            paragraph="Oferim soluții IT inovatoare, de la dezvoltare software și aplicații personalizate, până la integrarea celor mai noi tehnologii. Ajutăm afacerile să crească prin servicii sigure, scalabile și adaptate nevoilor tale."
            mb="60px"
          />

          {/* Butoanele */}
          <div className="flex space-x-4">
            <Link
              href="#servicii"
              className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Descoperă Serviciile
            </Link>
            <Link
              href="#contact"
              className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:hover:bg-white/5"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
