import React, { useEffect, useRef } from "react";
import RouteTransition from "../components/RouteTransition";
import styled from "styled-components";
import { FaLaptopCode } from "react-icons/fa6";
import { ImMagicWand } from "react-icons/im";
import {
  MdOutlineAppShortcut,
  MdOutlineDesignServices,
  MdVideoSettings,
  MdOutlineVideocam,
  MdOutlineEventNote,
  MdOutlineSocialDistance,
  MdOutlineCampaign,
  MdAnimation,
  MdCleaningServices,
} from "react-icons/md";
import { Link } from "react-router-dom";
import gsap from "gsap";

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
  h1 {
    font-size: 7rem;
    font-weight: 600;
    display: block;
    line-height: 1;
  }

  .info {
    margin-top: 2rem;
    width: 70%;
    display: flex;
    gap: 1rem;
    .symb {
      margin-top: 9px;
    }

    .text {
      line-height: 1.4;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
  @media (max-width: 1080px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 768px) {
    margin-top: 5rem;
    h1 {
      font-size: 2.5rem;
    }
    .info {
      margin-top: 1rem;
      width: 100%;
      .text {
        font-size: 1rem;
      }
    }
  }
`;

const ServicesWrapper = styled.div`
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  border-bottom: 1px solid #00000029;
  position: relative;
  overflow: hidden;

  &:first-child {
    border-top: 1px solid #00000029;
  }
  .count {
    width: 10%;
    span {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  .service_title {
    width: 25%;
    h3 {
      font-size: 2.5rem;
      line-height: 1;
      font-weight: 600;
    }
  }
  .service_info {
    width: 30%;
    color: #000000ba;
    font-size: 1rem;
  }
  .svg_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    border-radius: 4rem;
    border: 1px solid #0000002f;
    svg {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    justify-content: start;
    padding: 2rem 0;
    flex-wrap: wrap;
    .count {
      width: 10%;
      span {
        font-size: 1rem;
      }
    }
    .service_title {
      width: 50%;
      h3 {
        font-size: 2rem;
      }
    }
    .service_info {
      margin-top: 1rem;
      width: 70%;
      margin-left: auto;
      font-size: 0.8rem;
      margin-right: 0.6rem;
    }
    .svg_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      border-radius: 4rem;
      border: 1px solid #0000002f;
      svg {
        font-size: 2rem;
      }
    }
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  margin-top: 8rem;
  a {
    padding: 1rem 2.5rem;
    font-size: 1.3rem;
    border: 1px solid #00000044;
    border-radius: 3rem;
    transition: all 0.2s linear;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const servicesData = [
  {
    name: "Website Development",
    description:
      "At Clever Studio, we create visually stunning and highly functional websites tailored to your business needs. Our expert developers ensure your site is responsive, user-friendly, and optimized for search engines to boost your online presence.",
    icon: <FaLaptopCode />,
  },
  {
    name: "App Development",
    description:
      "ransform your business with custom mobile applications designed by Clever Studio. We build intuitive, engaging apps for both iOS and Android platforms, enhancing user experience and driving customer engagement.",
    icon: <MdOutlineAppShortcut />,
  },
  {
    name: "Logo Design",
    description:
      "Your logo is the face of your brand. Clever Studio crafts unique, memorable logos that capture the essence of your business, helping you make a lasting impression and stand out in the marketplace.",
    icon: <MdOutlineDesignServices />,
  },
  {
    name: "Video Editing",
    description:
      "Bring your vision to life with Clever Studio's professional video editing services. We turn raw footage into polished, captivating videos that effectively communicate your brand’s story and message.",

    icon: <MdVideoSettings />,
  },
  {
    name: "Product Shoots",
    description:
      "Showcase your products in the best light with our high-quality product photography. Clever Studio’s skilled photographers capture detailed, vibrant images that highlight the features and benefits of your products.",
    icon: <MdOutlineVideocam />,
  },
  {
    name: "Event Shoots",
    description:
      "Capture the essence and excitement of your events with Clever Studio’s event photography and videography services. We document your special moments with precision and creativity, providing you with stunning visuals.",
    icon: <MdOutlineEventNote />,
  },
  {
    name: "Social Media Management",
    description:
      "Maximize your brand’s online presence with Clever Studio’s comprehensive social media management. We create and curate engaging content, manage your profiles, and implement strategies to grow your audience and increase engagement.",
    icon: <MdOutlineSocialDistance />,
  },
  {
    name: "Ad Campaign Management",
    description:
      "Drive traffic and conversions with Clever Studio’s targeted ad campaign management. We design and execute effective advertising campaigns across multiple platforms, ensuring your message reaches the right audience at the right time.",
    icon: <MdOutlineCampaign />,
  },
  {
    name: "2D Animation",
    description:
      "Enhance your visual storytelling with Clever Studio’s 2D animation services. We create engaging, animated content that captures attention and communicates your brand’s message in a fun and dynamic way.",
    icon: <MdAnimation />,
  },
  {
    name: "3D Animation",
    description:
      "Take your visuals to the next level with Clever Studio’s 3D animation services. Our team produces high-quality, realistic 3D animations that add depth and dimension to your brand’s storytelling.",
    icon: <MdAnimation />,
  },
  {
    name: "Branding Services",
    description:
      "Build a strong, cohesive brand identity with Clever Studio’s comprehensive branding services. From logo design to marketing materials, we ensure all aspects of your brand work together to create a powerful and memorable presence.",
    icon: <MdCleaningServices />,
  },
];

const Services = () => {
  const titleRef = useRef(null);

  return (
    <RouteTransition>
      <Container>
        <Title ref={titleRef}>
          <h1>What We Do?</h1>

          <div className="info">
            <div className="symb">
              <svg
                width="20"
                height="20"
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
              specializing in branding, design, and digital marketing solutions.
              We fuse creativity with strategic thinking to produce impactful
              results for clients spanning diverse industries.
            </div>
          </div>
        </Title>

        <ServicesWrapper>
          {servicesData.map((item, index) => (
            <ServiceCard key={index} className="service_card">
              <div className="count">
                <span>{index < 9 ? "0" + (index + 1) : index + 1}</span>
              </div>
              <div className="service_title">
                <h3>{item.name}</h3>
              </div>
              <p className="service_info">{item.description}</p>
              <div className="svg_wrapper">{item.icon}</div>
            </ServiceCard>
          ))}
        </ServicesWrapper>
        <Button>
          <Link to="/quote">Get A Quote</Link>
        </Button>
      </Container>
    </RouteTransition>
  );
};

export default Services;
