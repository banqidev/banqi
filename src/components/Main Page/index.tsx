"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";

const RoboticEye = () => {
  const gltf = useGLTF("/models/earth_globe_hologram_2mb_looping_animation.glb");
  const eyeRef = useRef<any>();

  useFrame(({ clock }) => {
    if (eyeRef.current) {
      eyeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <primitive
      ref={eyeRef}
      object={gltf.scene}
      scale={6}
      position={[4.2, 0, 0]}
    />
  );
};

const MainPage = () => {
  return (
    <section className="relative z-10 h-screen overflow-hidden pt-16 lg:pt-28">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 40 }}>
          <ambientLight intensity={0.7} color={"#4a6cf7"} />
          <pointLight position={[10, 10, 10]} intensity={1} color={"#4a6cf7"} />
          <directionalLight position={[-5, 5, 5]} intensity={1} color={"#4a6cf7"} />
          <RoboticEye />
          <EffectComposer>
            <Bloom
              intensity={1.5}
              luminanceThreshold={2}
              luminanceSmoothing={0.1}
              blendFunction={BlendFunction.ADD}
            />
            <ToneMapping
              blendFunction={BlendFunction.OVERLAY}
              adaptive={true}
              resolution={512}
              middleGrey={1.5}
              maxLuminance={20}
              averageLuminance={0.1}
              adaptationRate={0.2}
            />
          </EffectComposer>
        </Canvas>
      </div>
      <div className="container h-full relative flex items-center">
        <div className="w-full max-w-[600px] px-4">
          <SectionTitle
            title="Transformăm ideile tale în realitate digitală"
            paragraph="Oferim soluții IT inovatoare, de la dezvoltare software și aplicații personalizate, până la integrarea celor mai noi tehnologii. Ajutăm afacerile să crească prin servicii sigure, scalabile și adaptate nevoilor tale."
            mb="60px"
          />
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
