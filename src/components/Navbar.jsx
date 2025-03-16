import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useContextProvider } from "../utils/GlobleContextProvider";
import gsap from "gsap";

const Container = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100%;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 3rem;
  @media (max-width: 768px) {
    margin: 1rem 1rem;
  }
`;

const Logo = styled(Link)`
  width: 6rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuBtn = styled.div`
  height: 40px;
  width: 6rem;
  border-radius: 1.6rem;
  color: #fff;
  overflow: hidden;
  position: relative;
  top: 0;
  right: 0;
  z-index: 99999;
  cursor: pointer;
  .menu_slider {
    position: relative;
    height: 100%;
    width: 100%;
    .btn {
      height: 100%;
      width: 100%;
      background-color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      user-select: none;
      &:nth-of-type(2) {
        position: absolute;
        top: 100%;
        background-color: #ffffff;
        color: #000;
      }
    }
  }
`;

const NavContainer = styled.div`
  position: absolute;
  background-color: #000000;
  top: 0;
  right: 0;
  height: 40px;
  width: 6rem;
  border-radius: 1.6rem;
  margin: 2rem 3rem;
  z-index: 99998;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 1rem 1rem;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  opacity: 0;
  z-index: 9999;
`;

const Navlinks = styled.div`
  padding: 3rem;
  padding-top: 6rem;
  height: max-content;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      list-style: none;
      display: block;
      position: relative;
      width: fit-content;
      a {
        font-size: 3rem;
        color: #fff;
      }
      .hover_link {
        position: absolute;
        left: 0;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 6rem;
    ul {
      li {
        a {
          font-size: 2.5rem;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  padding: 3rem;
  ul {
    display: flex;
    justify-content: flex-end;
    li {
      padding: 0 0.5rem;
      list-style: none;
      a {
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 2rem;
    ul {
      li {
        padding: 0 0.3rem;
        a {
          font-size: 0.7rem;
        }
      }
    }
  }
`;

const Links = [
  {
    title: "Our Most Efficient Model",
    href: "/",
  },
  {
    title: "Thinking Model",
    href: "/aboutus",
  },
  {
    title: "Image Generations",
    href: "/team",
  },
 
];

const SocialLink = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/cleverstudioin/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/cleverstudio.in?igsh=MTQ1Zjhreml4N2NtMA==",
  },
  {
    title: "Facebook",
    href: "https://m.facebook.com/people/CleverStudio/100090029329206/",
  },
  {
    title: "Discord",
    href: "https://discord.com/invite/RtmJusy4",
  },
  {
    title: "Whatsapp",
    href: "https://chat.whatsapp.com/J7fzQ9edJRf0tWJUonIECj",
  },
];

const Navbar = () => {
  const { setCursorSettings } = useContextProvider();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null);
  const containerRef = useRef(null);
  const backdropRef = useRef(null);
  const liRefs = useRef([]);
  const socialRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    isOpen && toggleMenu();
  }, [location]);

  const toggleMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add(
      { isMobile: "(max-width: 768px)", isDesktop: "(min-width: 769px)" },
      (context) => {
        let { isMobile } = context.conditions;

        const width = isOpen ? (isMobile ? "90vw" : "30vw") : "6rem";
        const height = isOpen ? (isMobile ? "90vw" : "30vw") : "6rem";
        const top = isOpen ? (isMobile ? "-10px" : "-20px") : "0";
        const right = isOpen ? (isMobile ? "-10px" : "-20px") : "0";

        gsap.to(menuRef.current, {
          y: isOpen ? "-100%" : "0",
        });

        gsap.to(containerRef.current, {
          height: isOpen ? "80vh" : "40px",
          width: width,
          top: top,
          right: right,
          delay: isOpen ? 0 : 0.4,
          duration: 0.6,
          ease: "power4.out",
          onComplete: () => setIsAnimating(false),
        });

        gsap.set(socialRefs.current, {
          y: isOpen ? 100 : 0,
        });

        gsap.set(liRefs.current, {
          y: isOpen ? 100 : 0,
        });

        gsap.to(liRefs.current, {
          opacity: isOpen ? 1 : 0,
          y: 0,
          stagger: 0.05,
          duration: 0.75,
          delay: isOpen ? 0.25 : 0,
          ease: "power3.out",
        });

        gsap.to(socialRefs.current, {
          opacity: isOpen ? 1 : 0,
          y: 0,
          stagger: 0.03,
          duration: 0.75,
          delay: 0.5,
          ease: "power3.out",
        });

        gsap.to(backdropRef.current, {
          opacity: isOpen ? 1 : 0,
          display: isOpen ? "block" : "none",
          delay: isOpen ? 0 : 0.3,
          duration: 0.5,
        });
      }
    );
  }, [isOpen]);

  useEffect(() => {
    const hideLogo = () => {
      gsap.to(".logo", {
        opacity: window.scrollY > 500 ? 0 : 1,
      });
    };

    window.addEventListener("scroll", hideLogo);
    return () => {
      window.removeEventListener("scroll", hideLogo);
    };
  }, []);

  return (
    <Container>
      <Nav>
        <Logo to="/" className="logo">
        <h1>OnCology.AI</h1>
        </Logo>
        <MenuBtn
          onClick={() => toggleMenu()}
          onMouseEnter={() =>
            setCursorSettings((prevSettings) => ({
              ...prevSettings,
              size: 1.5,
            }))
          }
          onMouseLeave={() => {
            setCursorSettings((prevSettings) => ({
              ...prevSettings,
              size: 1,
            }));
          }}
        >
          <div className="menu_slider" ref={menuRef}>
            <div className="btn">
              <p>Menu</p>
            </div>
            <div className="btn">
              <p>Close</p>
            </div>
          </div>
        </MenuBtn>

        <NavContainer ref={containerRef}>
          <Navlinks>
            <ul>
              {Links.map((link, index) => (
                <li
                  key={index}
                  ref={(element) => (liRefs.current[index] = element)}
                >
                  <Link to={link.href}>{link.title}</Link>
                  {/* <Link className="hover_link" to={link.href}>
                    {link.title}
                  </Link> */}
                </li>
              ))}
            </ul>
          </Navlinks>
          <SocialLinks>
            <ul>
              {SocialLink.map((link, index) => (
                <li
                  key={index}
                  ref={(element) => (socialRefs.current[index] = element)}
                >
                  <a href={link.href} target="_blank">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </SocialLinks>
        </NavContainer>
      </Nav>

      <Backdrop ref={backdropRef} />
    </Container>
  );
};

export default Navbar;
