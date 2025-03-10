import React, { useEffect, useRef, useState } from "react";
import RouteTransition from "../components/RouteTransition";
import styled from "styled-components";
import SplitType from "split-type";
import gsap from "gsap";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

const Container = styled.div`
  padding: 10rem 6rem 4rem 6rem;
  @media (max-width: 1080px) {
    padding: 0 2rem;
    padding-top: 6rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 4rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .main {
    display: flex !important;
    flex-direction: column;

    span {
      font-size: 7rem;
      font-weight: 600;
      display: block;
      line-height: 1;
    }
  }
  @media (width <= 1080px) {
    .main {
      span {
        font-size: 6rem;
      }
    }
  }
  @media (width <= 768px) {
    .main {
      span {
        font-size: 4rem;
      }
    }
  }

  @media (width <= 568px) {
    .main {
      span {
        font-size: 3rem;
      }
    }
  }
`;

const InfoTab = styled.div`
  margin-top: 3rem;
  .info {
    width: 70%;
    display: flex;
    gap: 1rem;

    .symb {
      height: 10px;
      width: 100px;
      margin-top: 9px;
    }

    .text {
      line-height: 1.4;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  @media (width <= 768px) {
    margin-top: 1rem;
    .info {
      width: 100%;

      .symb {
        width: 70px;
        margin-top: 6px;
      }

      .text {
        font-size: 1.3rem;
      }
    }
  }

  @media (width <= 568px) {
    .info {
      .symb {
        margin-top: 3px;
        width: 60px;
      }

      .text {
        font-size: 1.1rem;
      }
    }
  }
`;

const StatCards = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 4rem;
  .statCard {
    flex: 1;
    height: 40vh;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f7f7f7;
    border-radius: 20px;

    .rank {
      width: 100%;
      text-align: end;
      font-size: 1.5rem;
      font-weight: 500;
    }

    .information {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      span {
        font-size: 1.2rem;
        font-weight: 400;
      }
      .highlight {
        font-size: 4rem;
        font-weight: 600;
      }
    }

    .doubleAlignment {
      display: flex;
      gap: 1rem;

      .information {
        span {
          &:nth-child(2) {
            width: 70%;
          }
        }
      }
    }
    &:nth-of-type(3) {
      flex-grow: 2;
    }
  }

  @media (width <= 1080px) {
    flex-direction: column;
    margin-top: 2rem;
  }

  @media (width <= 768px) {
    .statCard {
      .rank {
        font-size: 1.2rem;
      }

      .information {
        span {
          font-size: 1rem;
        }
        .highlight {
          font-size: 3rem;
        }
      }
    }
  }

  @media (width <= 368px) {
    .statCard {
      .rank {
        font-size: 1rem;
      }

      .information {
        span {
          font-size: 0.8rem;
        }
        .highlight {
          font-size: 2.5rem;
        }
      }
      .doubleAlignment {
        flex-direction: column;
        .information {
          span {
            &:nth-child(2) {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

const Awards = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 4.5rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  .award {
    position: relative;
    display: grid;
    grid-template-columns: 1.75fr 1fr 0.5fr;
    padding: 4rem 3rem;
    border-bottom: 1px solid #e4e4e4;
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);

    .background {
      height: 100%;
      width: 100%;
      position: absolute;
      background-color: #161616;
      top: 0;
      left: 0;
    }

    .type {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;
      z-index: 4;
      span {
        font-size: 1.2rem;
      }

      .name {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }

    .additional {
      z-index: 4;
      font-size: 1.5rem;
      letter-spacing: 0.5px;
      line-height: 1.4;
      font-weight: 500;
    }

    .navigate {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      z-index: 4;

      svg {
        fill: #000;
        transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      }
    }
    &:hover {
      .navigate {
        svg {
          transform: rotate(45deg);
        }
      }
    }
  }

  .light {
    color: #fff;

    .navigate {
      svg {
        fill: #fff;
      }
    }
  }

  @media (width <= 1080px) {
    .title {
      font-size: 4rem;
    }

    .award {
      .type {
        span {
          font-size: 1rem;
        }
        .name {
          font-size: 1.3rem;
        }
      }

      .additional {
        font-size: 1.2rem;
      }
    }
  }

  @media (width <= 568px) {
    margin-top: 2rem;
    margin-bottom: 1rem;

    .title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .award {
      justify-content: space-between;
      grid-template-columns: 1.3fr 1.5fr 0.3fr;
      gap: 1rem;
      padding: 1rem;

      .type {
        gap: 0.3rem;
        span {
          font-size: 0.6rem;
        }

        .name {
          font-size: 0.5rem;
        }
      }

      .additional {
        font-size: 0.5rem;
      }

      .navigate {
        svg {
          height: 10px;
          width: 10px;
        }
      }
    }
  }
`;

const About = () => {
  const titleRef = useRef(null);

  const [hoveredAward, setHoveredAward] = useState(-1);

  const awards = [
    {
      name: "Creative Catalyst Award",
      type: "Agency",
      description:
        "Recognizing Clever Studio as a pioneering force in the industry.",
    },
    {
      name: "Digital Dynamo Award",
      type: "Project",
      description:
        "Honoring Clever Studio for its exceptional digital marketing campaign.",
    },
    {
      name: "Collaborative Spirit Award",
      type: "Team",
      description:
        "Celebrating Clever Studio's team for their outstanding teamwork and synergy.",
    },
    {
      name: "Branding Brilliance Award",
      type: "Agency",
      description:
        "Acknowledging Clever Studio's expertise in branding, consistently delivering qualify projects.",
    },
    {
      name: "Excellency Award",
      type: "Project",
      description:
        "Commending Clever Studio for its exceptional design project.",
    },
  ];

  useEffect(() => {
    const splitTitle = SplitType.create(
      titleRef.current.querySelector(".main"),
      {
        types: "chars",
      }
    );

    gsap.set(splitTitle.chars, {
      opacity: 0,
      filter: "blur(5px)",
      y: 100,
    });

    gsap.to(splitTitle.chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.02,
      duration: 0.6,
      delay: 0.3,
      scrollTrigger: {
        trigger: titleRef.current.querySelector(".main"),
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <RouteTransition>
      <Container>
        <Title ref={titleRef}>
          <div className="main">
            <span>Who are we?</span>
          </div>
        </Title>
        <InfoTab>
          <div className="info">
            <div className="symb">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 173.738C24.3644 236.944 -36.9438 175.636 26.2621 100C-36.9438 24.3644 24.3644 -36.9438 100 26.2621C175.621 -36.9438 236.944 24.3644 173.738 100C236.944 175.578 175.621 236.944 100 173.738Z"
                  fill="#000000c8"
                />
              </svg>
            </div>
            <div className="text">
              Clever Studio is an innovative media agency based in India,
              specializing in branding and design that makes heads turn. We mix
              creativity with strategic thinking like a mad scientist with a
              flair for art, delivering results so impactful they leave clients
              wondering if we sprinkled a little magic in there.
            </div>
          </div>
          <StatCards>
            <div className="statCard">
              <div className="rank">1</div>
              <div className="information">
                <span className="highlight">50+</span>
                <span>
                  Successfully catered client in different Industries all over
                  India.
                </span>
              </div>
            </div>
            <div className="statCard">
              <div className="rank">2</div>
              <div className="information">
                <span className="highlight">150+</span>
                <span>
                  Projects submitted before time over various Industries.
                </span>
              </div>
            </div>
            <div className="statCard">
              <div className="rank">3</div>
              <div className="doubleAlignment">
                <div className="information">
                  <span className="highlight">75%</span>
                  <span>Clients come back for a second project.</span>
                </div>
                <div className="information">
                  <span className="highlight">20L+</span>
                  <span>Sales generated in the last two years.</span>
                </div>
              </div>
            </div>
          </StatCards>
        </InfoTab>
        <Awards>
          <div className="title">
            <span>Awards</span>
          </div>
          {awards.map((award, index) => (
            <div
              className={`award ${hoveredAward == index + 1 ? "light" : ""}`}
              onMouseEnter={() => setHoveredAward(index + 1)}
              onMouseLeave={() => setHoveredAward(-1)}
            >
              {hoveredAward == index + 1 && (
                <motion.div
                  layout={true}
                  layoutId="bgScaleAnim"
                  className="background"
                  transition={{
                    layout: { ease: [0.16, 1, 0.3, 1] },
                  }}
                ></motion.div>
              )}

              <div className="type">
                <span className="name">{award.name}</span>
                <span>{award.type}</span>
              </div>
              <div className="additional">{award.description}</div>
              <div className="navigate">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.3211 1.92894C16.3211 1.23858 15.7614 0.67894 15.0711 0.67894H3.82109C3.13073 0.67894 2.57109 1.23858 2.57109 1.92894C2.57109 2.6193 3.13073 3.17894 3.82109 3.17894H13.8211V13.1789C13.8211 13.8693 14.3807 14.4289 15.0711 14.4289C15.7614 14.4289 16.3211 13.8693 16.3211 13.1789V1.92894ZM1.81284 16.955L15.955 2.81282L14.1872 1.04506L0.0450716 15.1872L1.81284 16.955Z" />
                </svg>
              </div>
            </div>
          ))}
        </Awards>
        {/* <Team>
          <div className="title">
            <span>Our Team</span>
          </div>
          <div className="members">
            <div className="member">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="contentBox">
                <span className="name">Alex Markovmax</span>
                <span className="role">Co-founder</span>
              </div>
            </div>
            <div className="member">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="contentBox">
                <span className="name">Julie Fernandez</span>
                <span className="role">Marketing Head</span>
              </div>
            </div>
            <div className="member">
              <img
                src="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="contentBox">
                <span className="name">Zack Grands</span>
                <span className="role">CFO</span>
              </div>
            </div>
            <div className="member">
              <img
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="contentBox">
                <span className="name">Vince Fleming</span>
                <span className="role">Designing Head</span>
              </div>
            </div>
          </div>
        </Team> */}
      </Container>
    </RouteTransition>
  );
};

export default About;

const Team = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 4.5rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  .members {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .member {
      position: relative;
      height: 60vh;
      width: clamp(15vw, 21.5vw, 100%);
      background-color: #f7f7f7;
      border-radius: 20px;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: grayscale(1);
        opacity: 0.9;
        transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
      }

      .contentBox {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(
          180deg,
          rgba(238, 174, 202, 0) 0%,
          #000000dd 100%
        );
        padding: 6rem 2.5rem 1.6rem 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        color: #f7f7f7;
        opacity: 0.6;
        transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);

        .name {
          font-size: 1.8rem;
          font-weight: 500;
        }

        .role {
          opacity: 0.9;
        }
      }

      &:hover {
        img {
          transform: scale(1.05);
        }

        .contentBox {
          opacity: 1;
        }
      }
    }
  }
`;
