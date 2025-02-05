"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "@/components/Common/SectionTitle";

const MainPage = () => {
  return (
    <section
      className="relative z-10 h-screen overflow-hidden pt-16 lg:pt-28 transition-all duration-500  from-white via-gray-200 to-blue-100 dark:from-gray-900 dark:via-black-800 dark:to-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] w-[120px] h-[104px] bg-blue-300 opacity-30 dark:bg-blue-500 dark:opacity-20 clip-hexagon"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[20%] right-[10%] w-[140px] h-[120px] bg-gray-300 opacity-40 dark:bg-blue-500 dark:opacity-30 clip-hexagon"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[50%] left-[45%] w-[80px] h-[69px] bg-white opacity-30 dark:opacity-10 clip-hexagon"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[60px] h-[52px] bg-gray-400 opacity-20 dark:bg-gray-600 dark:opacity-10 clip-hexagon"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>


      <div className="container h-full relative flex items-center justify-between px-8">
        <div className="w-full max-w-[600px] text-black dark:text-white">
          <SectionTitle
            title="Transformăm ideile tale în realitate digitală"
            paragraph="Oferim soluții IT inovatoare, de la dezvoltare software și aplicații personalizate, până la integrarea celor mai noi tehnologii. Ajutăm afacerile să crească prin servicii sigure, scalabile și adaptate nevoilor tale."
            mb="60px"
          />
          <div className="flex space-x-4">
            <Link
              href="#servicii"
              className="rounded-sm bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 text-base font-semibold duration-300 ease-in-out dark:bg-primary dark:hover:bg-primary/80"
            >
              Descoperă Serviciile
            </Link>
            <Link
              href="#contact"
              className="inline-block rounded-sm bg-gray-700 text-white hover:bg-gray-600 px-8 py-4 text-base font-semibold duration-300 ease-in-out dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
            >
              Contactează-ne
            </Link>
          </div>
        </div>

        <motion.div
          className="hidden lg:block w-[40%] h-[80%]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/images/mainpage/programming-development.png"
            alt="Laptop Technology"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MainPage;
