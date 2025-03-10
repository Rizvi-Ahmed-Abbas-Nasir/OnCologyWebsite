import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import SplitType from "split-type";
import RouteTransition from "../components/RouteTransition";
import Brands from "../components/Brands";
import Services from "../components/Sections/home/Services";
import About from "../components/Sections/home/About";
import Rizvi from "../components/Sections/home/Rizvi";

import PortfolioSection from "../components/Sections/home/PortfolioSection";
import { useContextProvider } from "../utils/GlobleContextProvider";
import Marquee from "../components/Marquee";
import Approch from "../components/Sections/home/Approch";
import { Link, useNavigate } from "react-router-dom";
import FrontPage from "../components/CarModel"
const Container = styled.div``;

const Hero = styled.div`
  height: 200vh;
  position: relative;
  @media (max-width: 1080px) {
    height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;Engineer
  }
`;

const ContentWrapper = styled.div`
  padding: 0 3rem;
  padding-top: 6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1080px) {
    padding: 0 1rem;
    padding-top: 7rem;
    justify-content: unset;
    height: max-content;
  }
`;

const HeaderText = styled.h1`
  font-family: "Mona Sans";
  font-weight: 500;
  text-transform: uppercase;
  font-size: 11.5vw;
  letter-spacing: 3px;
  width: 100%;
  white-space: nowrap;
  .line {
    overflow: hidden;
  }
  @media (max-width: 768px) {
    font-weight: 600;
    letter-spacing: -2px;
  }
`;

const Content = styled.div`
  display: flex;
  .info {
    width: 35%;
    padding-bottom: 2rem;
    font-family: "Mona Sans";
    h2 {
      font-size: 2.7rem;
      font-size: clamp(1.5rem, 3vw, 3rem);
      line-height: 1;
      padding-bottom: 1.8rem;
      font-weight: 500;
    }
    p {
      padding-bottom: 1.8rem;
      font-size: 1.2rem;
    }
    span {
      display: flex;
      align-items: center;
      width: fit-content;
      border: 1px solid #000000;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      svg {
        margin-left: 0.5rem;
        font-size: 0.8rem;
      }
    }
    a {
      display: flex;
      align-items: center;
      svg {
        margin-top: 0.3rem;
      }
    }
  }
  @media (max-width: 1080px) {
    padding-top: 1rem;
    .info {
      width: 100%;
      padding-bottom: 1rem;
      h2 {
        line-height: 1.3;
        padding-bottom: 1rem;
      }
    }
  }
  @media (max-width: 768px) {
    .info {
      padding-bottom: 1rem;
      h2 {
        padding-bottom: 1rem;
        font-size: 1.2rem;
        line-height: 1.2;
      }
      p {
        width: 90%;
        padding-bottom: 1rem;
        font-size: 0.9rem;
      }
    }
  }
`;

const ShowReel = styled.div`
  z-index: 10;
  perspective-origin: 50%;
  transform-origin: 95% 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100svh;
  display: flex;
  position: sticky;
  bottom: 0%;
  left: 0%;
  right: 0%;
  scale: 0.5;
  .videoWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    video {
      width: 100%;
      object-fit: contain;
    }
  }
  @media (max-width: 1080px) {
    position: unset;
    transform-origin: unset;
    height: fit-content;
    transform: none !important;
    scale: 1;
    .videoWrapper {
      display: block;
    }
  }
`;

const Home = () => {
  const { setCursorSettings, preloader } = useContextProvider();
  const showReelRef = useRef(null);
  const headerTextRef = useRef(null);
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const infoRef2 = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const headerTextSplit = SplitType.create(headerTextRef.current);
    const infoSplit = SplitType.create(infoRef.current);
    const infoSplit2 = SplitType.create(infoRef2.current);

    let mm = gsap.matchMedia();
    const homeTl = gsap.timeline();
    const elements = gsap.utils.toArray([infoSplit.lines, infoSplit2.lines]);

    mm.add("(min-width: 1080px)", () => {
      gsap.to(showReelRef.current, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: showReelRef.current,
          start: "top 50%",
          end: "bottom 10%",
          scrub: 0.1,
        },
      });

      gsap.to(heroRef.current, {
        backgroundColor: "#7d7d7d",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });

    homeTl
      .set(headerTextSplit.chars, {
        yPercent: 100,
      })
      .set(elements, {
        y: 100,
        opacity: 0,
      })
      .set(showReelRef.current, {
        x: 150,
        opacity: 0,
      });

    if (!preloader) {
      homeTl
        .to(headerTextSplit.chars, {
          yPercent: 0,
          duration: 0.75,
          stagger: 0.02,
          ease: "power4.Out",
        })
        .to(
          elements,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: "power.inOut",
          },
          "<.4"
        )
        .to(
          showReelRef.current,
          {
            x: 0,
            opacity: 1,
          },
          "<.4"
        );
    }
  }, [preloader]);

  return (
    <RouteTransition>
      <Container>
        {/* <Hero ref={heroRef}>
          <ContentWrapper>
            <HeaderText ref={headerTextRef}>Clever Studio</HeaderText>
            <Content>
              <div className="info">
                <h2 ref={infoRef}>
                  Clever Studio: where creativity meets technology, and your
                  ideas get the VIP treatment.
                </h2>
                <p ref={infoRef2}>
                  Where creativity gets caffeinated, and ideas get a glow-up. We
                  don’t just think outside the box—we turn it into a
                  masterpiece. Your brand doesn’t just grow; it skyrockets. With
                  us, innovation is always on the menu!
                </p>
                <Link className="" to="/quote">
                  Reach us
                  <FaArrowRight />
                </Link>
              </div>
            </Content>
          </ContentWrapper>
          <ShowReel ref={showReelRef}>
            <div
              className="videoWrapper"
              onMouseEnter={() =>
                setCursorSettings((prevSettings) => ({
                  ...prevSettings,
                  size: 2,
                  color: "#ffffff14",
                  border: "transparent",
                  text: "Watch Reel",
                  isBlending: true,
                  blur: true,
                }))
              }
              onMouseLeave={() => {
                setCursorSettings((prevSettings) => ({
                  ...prevSettings,
                  size: 1,
                  color: "transparent",
                  border: "#00000057",
                  text: "",
                  isBlending: true,
                  blur: false,
                }));
              }}
            >
              <video
                ref={videoRef}
                src={Showreel}
                muted
                autoPlay
                playsInline
                loop
              ></video>
            </div>
          </ShowReel>
        </Hero> */}
        <FrontPage />
     
        <Approch />
        <Brands />
        <Marquee />
      </Container>
    </RouteTransition>
  );
};

export default Home;
