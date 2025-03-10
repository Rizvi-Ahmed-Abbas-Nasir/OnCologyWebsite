import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SplitType from "split-type";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useContextProvider } from "../utils/GlobleContextProvider";
import RouteTransition from "../components/RouteTransition";

import TechBucket from "../assets/portfolio/techbucket.png";
import interLude from "../assets/portfolio/interlude.png";
import Vasma3D from "../assets/portfolio/Vasma3D.png";
import Award3D from "../assets/portfolio/vasma_award.jpg";
import BMPS from "../assets/portfolio/bmps.png";
import Demox from "../assets/portfolio/demox.png";
import Chemin from "../assets/portfolio/chemin.png";
import igloaded from "../assets/portfolio/igloaded.png";
import Moksha from "../assets/portfolio/MokshaWellness.png";
import Glaze from "../assets/portfolio/glaze.png";
import Firdaus from "../assets/portfolio/Firdaus.png";

import ICICI from "../assets/portfolio/ICICI.png";
import AMD from "../assets/portfolio/amd_blaze_anc.jpg";
import RIVIDY from "../assets/portfolio/rividy.jpg";
import KREO from "../assets/portfolio/kreo.jpg";
import MG from "../assets/portfolio/MG.jpg";
import ROOM_3D from "../assets/portfolio/ROOM_3D.jpg";
import Moksha_Logo from "../assets/portfolio/Moksha_Logo.jpg";
import Bukket_Logo from "../assets/portfolio/Bukket_Logo.jpg";
import Glaze_Logo from "../assets/portfolio/Glaze_Logo.jpg";
import Tech_Bucket_Logo from "../assets/portfolio/Tech_Bucket_Logo.jpg";
import parveenssproducts from "../assets/portfolio/parveenss.png";
import thedivinethreads from "../assets/portfolio/thedivinethreads.png";
import trendyGeek from "../assets/portfolio/trendygeek.png";
import Godrej from "../assets/portfolio/godrej_upscale.jpg";
import Evoherbals from "../assets/portfolio/evoherbals.png";
import JsInfra from "../assets/portfolio/jsInfra.png";

const Container = styled.div`
  padding: 10rem 3rem 4rem 3rem;
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
      text-transform: uppercase;
      display: block;
      line-height: 1;
      /* &:last-child {
        padding-left: 15rem;
      } */
    }
  }
  .sort {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .btn {
      text-align: center;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 2rem;
      border: 1px solid #000;
      border-radius: 99px;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0, 0.55, 0.45, 1);
    }
    .active {
      background-color: #000;
      color: #fff;
    }
  }
  @media (width <= 1444px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  @media (width <= 1080px) {
    .main {
      span {
        font-size: 5rem;
      }
    }
  }

  @media (width <= 768px) {
    .sort {
      .btn {
        padding: 0.6rem 1.5rem;
        font-size: 0.8rem;
      }
    }
  }

  @media (width <= 468px) {
    .main {
      span {
        font-size: 3.2rem;
      }
    }
    .sort {
      width: 100%;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;

  .animateWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (max-width: 1080px) {
    margin-top: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  width: calc(50% - 1rem);
  height: fit-content;
  &:nth-child(even) {
    margin-top: 6rem;
  }
  @media (max-width: 1080px) {
    width: calc(50% - 0.8rem);
    &:nth-child(even) {
      margin-top: 3rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    &:nth-child(even) {
      margin-top: 0;
    }
    margin-bottom: 2rem;
    &:last-child {
      margin: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 1.3rem;
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
    transition: 0.4s scale ease-in-out;
  }
  /* &:hover {
    img {
      scale: 1.03;
    }
  } */
`;

const InfoWrapper = styled.div`
  margin-top: 1.3rem;
  .info {
    display: flex;
    padding: 0.5rem 0;
    p {
      padding: 0 0.3rem;
      font-size: 1rem;
      font-weight: 400;
      &:first-child {
        padding-left: 0;
      }
    }
  }
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  a {
    height: 100%;
  }
  @media (max-width: 1080px) {
    margin-top: 0.5rem;
    .info {
      padding: 0.3rem 0;
      p {
        padding: 0 0.3rem;
        font-size: 1rem;
        font-weight: 400;
        &:first-child {
          padding-left: 0;
        }
      }
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`;

const projects = [
  {
    name: "Js Infra",
    src: JsInfra,
    info: "Web Development",
    year: "2024",
    category: "Web",
    url: "https://www.jsinfrasolutions.com/",
  },
  {
    name: "3D Room",
    src: ROOM_3D,
    info: "Video Shoot / Edit",
    year: "2024",
    category: "Video Edits",
    url: "#",
  },
  {
    name: "MG Motors",
    src: MG,
    info: "Video Shoot / Edit",
    year: "2024",
    category: "Gfx / Vfx",
    url: "#",
  },
  {
    name: "InterLude",
    src: interLude,
    info: "Video Shoot / Edit",
    year: "2024",
    category: "Video Edits",
    url: "https://www.youtube.com/watch?v=ch0fTOwQD30&t=3s",
  },
  {
    name: "AMD AQUA BLAZE ANC",
    src: AMD,
    info: "Video Shoot / Edit",
    year: "2023",
    category: "Video Edits",
    url: "#",
  },

  {
    name: "3D Gaming Room",
    src: Vasma3D,
    info: "3D Production",
    year: "2023",
    category: "Video Edits",
    url: "https://www.instagram.com/p/C5Rh6qwSAtz/?img_index=1",
  },
  {
    name: "The Story of Love",
    src: Award3D,
    info: "3D Production",
    year: "2023",
    category: "3d / 2d",
    url: "#",
  },
  {
    name: "Godrej Advertisement",
    src: Godrej,
    info: "Video Edit",
    year: "2024",
    category: "Video Edits",
    url: "https://instagram.com/p/C4Pj5ALJJI4/",
  },
  {
    name: "Brand Showreel Rividy",
    src: RIVIDY,
    info: "Video Edit",
    year: "2023",
    category: "Video Edits",
    url: "#",
  },
  {
    name: "RVNT x KREO",
    src: KREO,
    info: "Video Edit",
    year: "2023",
    category: "Video Edits",
    url: "#",
  },
  {
    name: "BMPS Lan Event",
    src: BMPS,
    info: "Video Shoot / Edit",
    year: "2023",
    category: "Video Edits",
    url: "https://www.youtube.com/watch?v=hw1lp4vJX-8",
  },
  {
    name: "Evoherbals",
    src: Evoherbals,
    inf: "Web Development",
    year: "2024",
    category: "Web",
    url: "https://evoherbals.com/",
  },
  {
    name: "ICICI Prudential Financial Investments",
    src: ICICI,
    info: "Video Shoot / Edit",
    year: "2023",
    category: "Video Edits",
    url: "https://www.youtube.com/watch?v=Ea8dx7kVUJc",
  },
  {
    name: "Demox Productions",
    src: Demox,
    info: "Web Development",
    year: "2023",
    category: "Web",
    url: "https://www.demoxproductions.com/",
  },
  {
    name: "Tech Bucket",
    src: TechBucket,
    info: "Web Development",
    year: "2024",
    category: "Web",
    url: "https://techbucket.ca/",
  },
  {
    name: "igloaded",
    src: igloaded,
    info: "Web Development",
    year: "2024",
    category: "Web",
    url: "https://igloaded.com/",
  },
  {
    name: "The Divine Threads",
    src: thedivinethreads,
    info: "Web Development",
    year: "2024",
    category: "Web",
    url: "https://thedivinethreads.in/",
  },
  {
    name: "Trendy Geek",
    src: trendyGeek,
    info: "Web Development",
    year: "2024",
    category: "Web",
    url: "https://trendygeek.in/",
  },
  {
    name: "Chemin Esports",
    src: Chemin,
    info: "Web Development",
    year: "2023",
    category: "Web",
    url: "http://cheminesports.com/",
  },
  {
    name: "MokshaWellnespa",
    src: Moksha,
    info: "Web Development",
    year: "2024",
    category: "Web",
    url: "https://mokshawellnessspa.com/",
  },
  {
    name: "Parveenssproducts",
    src: parveenssproducts,
    info: "Web Development",
    year: "2023",
    category: "Web",
    url: "https://parveenssproducts.in/",
  },
  {
    name: "Glaze Opticals",
    src: Glaze,
    info: "Web Development",
    year: "2024",
    category: "Web",
    url: "https://glazeopticals.com/",
  },
  {
    name: "Firdaus Media",
    src: Firdaus,
    info: "Web Development",
    year: "2024",
    category: "Web",
    url: "https://firdausmedia.com/",
  },
  {
    name: "Moksha Logo Work",
    src: Moksha_Logo,
    info: "Logo Work",
    year: "2024",
    category: "Logos",
    url: "#",
  },
  {
    name: "Glaze Optics Logo Work",
    src: Glaze_Logo,
    info: "Logo Work",
    year: "2024",
    category: "Logos",
    url: "#",
  },
  {
    name: "Bukket Logo Work",
    src: Bukket_Logo,
    info: "Logo Work",
    year: "2024",
    category: "Logos",
    url: "#",
  },
  {
    name: "Tech Bucket Logo Work",
    src: Tech_Bucket_Logo,
    info: "Logo Work",
    year: "2024",
    category: "Logos",
    url: "#",
  },
];

const Portfolio = () => {
  const { setCursorSettings } = useContextProvider();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "Web",
    "App",
    "Video Edits",
    "Logos",
    "3d / 2d",
    "Gfx / Vfx",
    "Creative",
  ];

  const titleRef = useRef(null);

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
            <span>Creative</span>
            <span>Ventures</span>
          </div>
          <div className="sort">
            {categories.map((category) => (
              <div
                className={`btn ${activeCategory === category ? "active" : ""}`}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category ? "All" : category
                  )
                }
              >
                {category}
              </div>
            ))}
          </div>
        </Title>
        <ProjectWrapper>
          <div className="animateWrapper">
            {projects
              .filter((project) =>
                activeCategory === "All"
                  ? project
                  : project.category === activeCategory
              )
              .map((item) => (
                <ProjectCard key={item.src}>
                  <a href={item.url} target={item.url != "#" ? "_blank" : ""}>
                    <ImageWrapper
                      onMouseEnter={() =>
                        setCursorSettings((prevSettings) => ({
                          ...prevSettings,
                          size: 2,
                          color: "#00000021",
                          border: "transparent",
                          text: "View",
                          isBlending: false,
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
                      <img src={item.src} alt="" />
                    </ImageWrapper>
                  </a>
                  <InfoWrapper>
                    <div className="info">
                      <p>{item.year}</p>•<p>{item.info}</p>
                    </div>
                    <h2>{item.name}</h2>
                  </InfoWrapper>
                </ProjectCard>
              ))}
          </div>
        </ProjectWrapper>
      </Container>
    </RouteTransition>
  );
};

export default Portfolio;
