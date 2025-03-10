import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import styled from "styled-components";

const TransitionBackground = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 999999;
  pointer-events: none;
  top: 0;
  left: 0;
`;

const TransitionContainer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 999999;
  div {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #000;
  }
`;

const expand = {
  initial: {
    top: 0,
  },

  enter: (i) => ({
    top: "-100vh",
    transition: {
      duration: 0.5,
      delay: 0.05 * i,
      ease: [0.65, 0, 0.35, 1],
    },
    transitionEnd: { height: "0", top: "100%" },
  }),

  exit: (i) => ({
    top: 0,
    height: "100vh",
    transition: {
      duration: 0.5,
      delay: 0.05 * i,
      ease: [0.65, 0, 0.35, 1],
    },
  }),
};

const RouteTransition = ({ children }) => {
  const animation = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };
  const nbOfColumns = 3;

  return (
    <div className="page">
      <TransitionBackground
        initial={{
          opacity: 0.5,
        }}
        animate={{
          opacity: 0,
        }}
        exit={{
          opacity: 0.5,
        }}
        transition={{
          delay: 0.25,
        }}
      />
      <TransitionContainer>
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...animation(expand, nbOfColumns - i)} />;
        })}
      </TransitionContainer>
      <motion.div
        initial={{
          y: 100,
        }}
        animate={{
          y: 0,
          transitionEnd: () => ScrollTrigger.refresh(),
        }}
        exit={{
          y: -150,
        }}
        transition={{
          duration: 0.75,
          ease: [0.65, 0, 0.35, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RouteTransition;
