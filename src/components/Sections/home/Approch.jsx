import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";

import ApprochIMG from "../../../assets/portfolio/rizvi.png";

const Container = styled.div`
  margin-top: 8rem;
  padding: 0 3rem;
  @media (max-width: 1080px) {
    margin-top: 5rem;
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 8rem;
    padding: 0 0.5rem;
  }
`;

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  border-radius: 2rem;
  padding: 5rem 4rem;
  height: 100%;
  @media (max-width: 1080px) {
    padding: 3rem;
  }
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.div`
  font-size: 4rem;
  width: 60%;
  font-weight: 500;
  @media (max-width: 1080px) {
    width: 100%;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  height: 50vh;
  border-radius: 1.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1080px) {
    height: 35vh;
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 20vh;
  }
`;

const Content = styled.div`
  width: 45%;
  @media (max-width: 1080px) {
    width: 100%;
    margin-top: 2.5rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const InfoWrapper = styled.div`
  opacity: 0.4;
  margin-top: 3rem;
  &:first-child {
    margin-top: 0;
    opacity: 1;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    left: -1rem;
    top: -0.1rem;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    padding-bottom: 0.5rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    &:first-child {
      margin-top: 2rem;
      opacity: 1;
    }
    span {
      font-size: 0.8rem;
      left: -1rem;
      top: -0.1rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const content = [
  {
    title: "Early Detection",
    info: "Advancing screening technologies for timely cancer diagnosis.",
    image: "https://deveb.co/static/media/vim.2c5e9ce4.jpg",
  },
  {
    title: "Cutting-Edge Research",
    info: "Pioneering innovative treatments to improve patient outcomes.",
    image: "https://deveb.co/static/media/dopop2.3974e9e7.jpg",
  },
  {
    title: "Patient-Centered Care",
    info: "Providing personalized treatment plans for every individual.",
    image: "https://deveb.co/static/media/newdopegood.6e57b4b4.jpg",
  },
  {
    title: "Hope & Support",
    info: "Empowering patients and families through education and care.",
    image: "https://deveb.co/static/media/newdopegood.6e57b4b4.jpg",
  },
];

const Approch = () => {
  const titleRef = useRef(null);
  const contentRef = useRef([]);
  const imageRef = useRef(null);

  useGSAP(() => {
    const titleSplit = SplitType.create(titleRef.current, {
      types: "words",
    });

    gsap.set(titleSplit.words, {
      opacity: 0,
      filter: "blur(5px)",
      y: 100,
    });

    gsap.set(contentRef.current, {
      filter: "blur(5px)",
      y: 100,
    });

    gsap.set(imageRef.current, {
      y: 100,
      opacity: 0,
    });

    const titleAnimation = gsap.to(titleSplit.words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.02,
      ease: "expo.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const contentAnimation = gsap.to(contentRef.current, {
      y: 0,
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(imageRef.current, {
      y: 0,
      opacity: 1,
      ease: "expo.out",
      duration: 1.5,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  const animateTab = (index) => {
    if (index !== null) {
      gsap.to(contentRef.current, { opacity: 0.6 });
      gsap.to(contentRef.current[index], {
        opacity: 1,
      });
    } else {
      gsap.to(contentRef.current[0], {
        opacity: 1,
      });
    }
  };

  return (
    <Container id="approach">
      <Wrapper>
        <Title ref={titleRef}>
        Oncology that focuses on the prevention, diagnosis, and treatment of cancer.
        </Title>
        <ContentWrapper>
          <ImageWrapper ref={imageRef}>
            <img src={ApprochIMG} alt="" />
          </ImageWrapper>
          <Content>
            {content.map((item, index) => (
              <InfoWrapper
                key={index}
                ref={(element) => (contentRef.current[index] = element)}
                onMouseEnter={() => animateTab(index)}
                onMouseLeave={() => animateTab()}
              >
                <span>{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </InfoWrapper>
            ))}
          </Content>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Approch;
