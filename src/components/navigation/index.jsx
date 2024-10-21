"use client";
import { BtnList } from "@/app/data";
import React, { useState, useEffect } from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  // Track whether the spin is complete
  const [isSpinning, setIsSpinning] = useState(true);

  // Simulate stopping the spin after 5 seconds (you can customize this behavior)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, 5000); // 5 seconds spin time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className={`w-max flex items-center justify-center relative group ${
                isSpinning ? "animate-spin-slow" : ""
              }`}
            >
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;

                // If spinning is done, position all buttons on the right
                const finalX = isSpinning ? x : "90%";
                const finalY = isSpinning ? y : `${index * 10}%`;

                return <NavButton key={btn.label} x={finalX} y={finalY} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              {/* Small screen non-spinning layout */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative group xs:hidden"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map((btn) => {
                  return (
                    <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left" />
                  );
                })}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
