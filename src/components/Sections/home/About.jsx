import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Container = styled.div`
  padding: 10rem 3rem;
  padding-bottom: 5rem;
  @media (max-width: 1080px) {
    padding: 5rem 2rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.div`
  width: 70%;
  h2 {
    font-size: 3rem;
    font-weight: 500;
    font-kerning: none;
  }
  @media (max-width: 1080px) {
    width: 100%;
    h2 {
      font-size: 1.8rem;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  margin-left: auto;
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Info = styled.div`
  width: 35%;
  p {
    line-height: 1.4;
    font-size: 1.6rem;
  }
  @media (max-width: 1080px) {
    width: 70%;
    p {
      line-height: 1.4;
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    p {
      line-height: 1.4;
      font-size: 1rem;
    }
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  span {
    margin-right: 0.5rem;
  }
  @media (max-width: 768px) {
  }
`;

const About = () => {
  const infoRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const titleSplit = SplitType.create(titleRef.current, {
      types: "words",
    });
    const infoSplit = SplitType.create(infoRef.current, {
      types: "words",
    });

    gsap.set(infoSplit.words, {
      opacity: 0,
      filter: "blur(5px)",
      y: 100,
    });
    gsap.set(titleSplit.words, {
      opacity: 0,
      filter: "blur(5px)",
      y: 100,
    });

    const infoAnimation = gsap.to(infoSplit.words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.004,
      duration: 0.75,
      delay: 0.3,
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const titleAnimation = gsap.to(titleSplit.words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.75,
      stagger: 0.01,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      infoAnimation.kill();
      titleAnimation.kill();
    };
  }, []);

  return (
    <Container>
      <Title>
        <h2 ref={titleRef}>
          We’re the creative agency your brand didn’t know it desperately
          needed! Armed with highly skilled teams and Creative Directors who
          drink innovation for breakfast, we turn your growth goals into reality
          before your competitors even find their coffee mugs.
        </h2>
      </Title>
      <Content>
        {/* <Button>
          <span>About Us</span>
          <HiMiniArrowLongRight />
        </Button> */}
        <Info>
          <p ref={infoRef}>
            We are a leading creative agency, helping brands globally to grow
            rapidly in this competitive world with our highly skilled teams and
            creative directors.
          </p>
        </Info>
      </Content>
    </Container>
  );
};

export default About;
