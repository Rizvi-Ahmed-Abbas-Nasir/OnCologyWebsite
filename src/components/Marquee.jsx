import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const MarqueeContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: max-content;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    height: 5rem;
    margin-bottom: 2.5rem;
  }
`;

const MarqueeContent = styled.div`
  white-space: nowrap;
  font-size: 6rem;
  font-weight: 600;
  color: #000;
  p {
    display: flex;
    span {
      display: flex;
      align-items: center;
      svg {
        width: 4rem;
        margin: 0 2rem;
      }
    }
  }

  @media (max-width: 1080px) {
    font-size: 3rem;
    p {
      span {
        svg {
          width: 2rem;
          margin: 0 1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Marquee = () => {
  const marqueeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["-30% end", "end start"],
  });

  const xPositionInv = useTransform(scrollYProgress, [0, 1], ["-20%", "-5%"]);

  return (
    <MarqueeContainer>
      <MarqueeContent ref={marqueeRef}>
        <motion.div
          style={{ x: xPositionInv }}
          transition={{
            type: "spring",
            damping: 15,
            mass: 0.27,
            stiffness: 55,
          }}
        >
          <p>
           OnCology AI Research Assitant
            <span>
              <SVG />
            </span>
            OnCology AI Research Assitant
            </p>
        </motion.div>
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;

const SVG = () => {
  return (
    <span>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"
          fill="black"
        />
      </svg>
    </span>
  );
};
