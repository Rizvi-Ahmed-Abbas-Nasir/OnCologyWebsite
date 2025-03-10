import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  padding-top: 5rem;
  margin: 0 3rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 5rem;
  }
`;

const Wrapper = styled.div`
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
    cursor: pointer;
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
`;

const Services = () => {
  const [hoveredService, setHoveredService] = useState(-1);

  const servicesData = [
    {
      name: "Graphic Design",
      type: "Agency",
      description:
        "From logos to layouts, our graphic wizards turn visions into visuals that captivate and communicate",
    },
    {
      name: "3D / 2D Animations",
      type: "Project",
      description:
        "Bringing stories to life through stunning animations, our team creates immersive experiences that leave a lasting impact.",
    },
    {
      name: "Web/App Development",
      type: "Team",
      description:
        "Building digital landscapes where innovation meets functionality, we craft seamless online experiences that drive results.",
    },
    {
      name: "UI / UX Development",
      type: "Project",
      description:
        "Crafting interfaces that feel as good as they look, our team ensures every click is intuitive and every visit unforgettable.",
    },
  ];

  return (
    <Container>
      <Wrapper>
        {servicesData.map((award, index) => (
          <div
            className={`award ${hoveredService == index + 1 ? "light" : ""}`}
            onMouseEnter={() => setHoveredService(index + 1)}
            onMouseLeave={() => setHoveredService(-1)}
          >
            {hoveredService == index + 1 && (
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
      </Wrapper>
    </Container>
  );
};

export default Services;
