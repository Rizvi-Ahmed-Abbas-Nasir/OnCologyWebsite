import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";

import {
  FaInstagram,
  FaDiscord,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 70vh;
  position: relative;
  background-color: #000;
  overflow: hidden;

  .text {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 12%;
    user-select: none;
    span {
      font-size: 13vw;
      /* color: #ffff; */

      .line {
        .word {
          .char {
            color: #fff;
          }
          &:nth-child(2) {
            font-style: italic;
          }
        }
      }
    }

    @media (width <= 1280px) {
      bottom: 15%;
    }

    @media (width <= 900px) {
      bottom: 18%;
    }

    @media (width <= 500px) {
      bottom: 28%;
    }
  }

  .sticky {
    margin: 0;
    padding: 0 5rem;
    width: 100%;
    height: 17vh;
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ffffff76;
    background-color: #000;

    .links {
      width: 20%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      a {
        width: fit-content;
        font-size: 1rem;
        color: #fff;
      }
    }

    .socials {
      display: flex;
      gap: 1.5rem;
    }

    .copyright {
      font-size: 1rem;
      color: #fff;
    }

    @media (width <= 900px) {
      flex-wrap: wrap;

      .copyright {
        width: 100%;
        text-align: center;
      }
    }

    @media (width < 500px) {
      align-items: center;
      padding: 1rem 2rem 0.5rem 2rem;

      .links {
        width: auto;
      }
    }

    @media (width < 368px) {
      .links {
        justify-content: center;
        flex-direction: row;
        width: 100%;
      }

      .socials {
        justify-content: center;
        width: 100%;
      }
    }
  }

  @media (width <= 500px) {
    height: 55vh;
  }
`;

const Content = styled.div`
  padding: 5rem 5rem 0 5rem;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .items {
    ul {
      li {
        padding: 0.6rem 0;
        list-style: none;
        opacity: 1;
        transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);

        a {
          font-size: 1.4rem;
          text-decoration: none;
          color: #fff;
        }
      }
      &:hover {
        li {
          &:is(:not(:hover)) {
            opacity: 0.5;
          }
        }
      }
    }
    &:nth-child(2) {
      text-align: right;
    }
  }

  @media (width < 500px) {
    padding: 2.5rem 2.5rem 0 2.5rem;

    .items {
      ul {
        li {
          a {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/#services");
  };

  useEffect(() => {
    const splitType = SplitType.create(textRef.current, {
      tagName: "span",
    });

    // gsap.fromTo(
    //   stickyRef.current,
    //   { yPercent: 10 },
    //   {
    //     yPercent: 0,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "top 80%",
    //       end: "bottom bottom",
    //       // markers: true,
    //       scrub: true,
    //     },
    //   }
    // );

    gsap.fromTo(
      splitType.chars,
      {
        yPercent: 55,
      },
      {
        yPercent: 8,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: splitType.chars,
          start: "top bottom",
          end: "50% 93%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <Container ref={containerRef}>
      <Content>
        <div className="items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/aboutus">About</Link>
            </li>
            <li>
              <Link to="/team">Our team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
        </div>
        <div className="items">
          <ul>
            {/* <li>
              <a onClick={handleClick}>Approach</a>
            </li> */}
            <li>
              {/* <Link to="/services">Services</Link> */}
            </li>
            {/* <li>
              <Link to="/#clients">Clients</Link>
            </li>
            <li>
              <Link to="/?showreel=true">Showreel</Link>
            </li> */}
            <li>
              {/* <Link to="/Careers">Careers</Link> */}
            </li>
            <li>
              {/* <Link to="/maintenance">Maintenance</Link> */}
            </li>
          </ul>
        </div>
      </Content>
      <div className="text">
        <span ref={textRef}>OnCology</span>
      </div>
      <div className="sticky" ref={stickyRef}>
     
        <div className="copyright">
         By Rizvi Ahmed Abbas.
        </div>
        {/* <div className="socials">
          <a
            href="https://discord.gg/evV5MwtgZa"
            target="_blank"
            className="social"
          >
            <FaDiscord size={22} color="#fff" />
          </a>
          <a
            href="https://www.instagram.com/cleverstudio.in/"
            target="_blank"
            className="social"
          >
            <FaInstagram size={22} color="#fff" />
          </a>
         
          <a
            href="https://wa.me/+918928548702"
            target="_blank"
            className="social"
          >
            <FaWhatsapp size={22} color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/company/cleverstudioin"
            target="_blank"
            className="social"
          >
            <FaLinkedinIn size={22} color="#fff" />
          </a>
       
        </div> */}
      </div>
    </Container>
  );
};

export default Footer;
