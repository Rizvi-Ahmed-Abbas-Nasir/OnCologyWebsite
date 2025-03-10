import styled from "styled-components";
import RouteTransition from "../components/RouteTransition";

//React icons
import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

import Ritesh from "../assets/Images/Team/Ritesh.jpg";
import Aakash from "../assets/Images/Team/Aakash.png";
import Aditya from "../assets/Images/Team/aditya.png";
import Kushal from "../assets/Images/Team/kushal.png";
import HarshPal from "../assets/Images/Team/harshPal.jpg";
import Nawaz from "../assets/Images/Team/nawaz.jpg";

const Container = styled.div`
  padding: 10rem 6rem 4rem 6rem;
  @media (max-width: 1080px) {
    padding: 0 2rem;
    padding-top: 6rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 6rem;
  }
`;

const InnerContent = styled.div`
  .divider {
    height: 1px;
    margin: 3rem 0;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (width < 768px) {
    .divider {
      margin: 2rem 0;
    }
  }
`;

const Title = styled.div`
  .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .tag {
      font-weight: 500;
      padding: 0.3rem 1rem;
      border-radius: 99px;
      border: 1px solid black;
    }
  }

  .heading {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;

    span {
      font-size: 3.5rem;
      font-weight: 600;
      line-height: 1;
    }
  }

  @media (width < 530px) {
    .heading {
      span {
        font-size: 3rem;
      }
    }
  }
  @media (width < 455px) {
    .tags {
      gap: 0.3rem;
      .tag {
        font-size: 0.7rem;
      }
    }

    .heading {
      span {
        font-size: 2.5rem;
      }
    }
  }
`;

const Description = styled.div`
  display: flex;
  gap: 4rem;

  .descriptiveHeading {
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .additional {
    font-size: 1.2rem;
    line-height: 1.4;
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (width < 768px) {
    flex-direction: column;
    gap: 1rem;
    .descriptiveHeading,
    .additional {
      flex-basis: auto;
    }
  }

  @media (width < 568px) {
    .descriptiveHeading {
      font-size: 1.1rem;
    }
    .additional {
      font-size: 1rem;
    }
  }
`;

const TeamSection = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  .member {
    position: relative;
    height: max-content;
    width: 100%;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50px 0 50px 0;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5rem 0;
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      h1 {
        width: fit-content;
        font-size: 1.4rem;
        font-weight: 600;
        padding: 0.3rem 1rem;
        border-radius: 99px;
        border: 1px solid black;
      }

      p {
        font-size: 1.2rem;
      }

      @media (width < 568px) {
        align-items: center;
        padding: 0.5rem 1rem 1rem 1rem;

        h1 {
          font-size: 1.2rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }

    .hover {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 50px 0 50px 0;
      background-color: black;
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);

      .upper {
        padding: 2rem;

        .socials {
          display: flex;
          gap: 0.8rem;
          .social {
            width: fit-content;
            display: flex;
            padding: 0.8rem;
            background-color: white;
            border-radius: 99px;
            transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
            cursor: pointer;

            &:hover {
              transform: scale(1.15);
            }
          }
        }

        .info {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding-top: 2rem;
          .quote {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-weight: 400;
            color: white;
          }
        }
      }

      .lower {
        .details {
          h1 {
            border: 1px solid white;
            color: white;
          }
          p {
            color: white;
          }
        }
      }

      @media (width < 300px) {
        .upper {
          padding: 1rem 1.25rem;

          .socials {
            gap: 0.5rem;

            .social {
              padding: 0.6rem;
            }
          }

          .info {
            padding-top: 1rem;

            .quote {
              font-size: 0.8rem;
            }
          }
        }
      }
    }

    @media (width > 568px) {
      &:hover {
        transform: scale(1.05);
      }
    }

    &:hover {
      .details {
        padding: 1.5rem 2rem;
      }
      .hover {
        opacity: 1;
      }
    }
  }

  @media (width < 568px) {
    gap: 1rem;
  }

  @media (width < 380px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMembers = [
  {
    name: "Ritesh Maurya",
    bio: "Ritesh Maurya is the mastermind behind Clever Studio and our resident Project Management wizard. With over three years of experience in herding software projects (and sometimes people), he’s the guy who keeps the chaos organized. Armed with a keen eye for detail, a passion for innovation, and a secret stash of caffeine, Ritesh leads the team to success, ensuring every project not only meets but absolutely crushes client expectations. If something’s exceeding expectations around here, chances are, it’s got Ritesh’s fingerprints on it!",
    image: Ritesh,
    linkedin:
      "https://www.linkedin.com/in/ritesh-maurya-aa81bb233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/ritesh___maurya?igsh=bDV2MGZhMG80M2Qz",
    role: "Founder & CEO",
  },
  {
    name: "Aakash Panchal",
    bio: `The Design Whisperer Aakash doesn’t just design, he communicates with pixels. As our Lead Developer and UI/UX wizard, he has the rare ability to make your wildest ideas look stunning and functional. Whether it's a button or a whole website, if Aakash touches it, it becomes art. He also claims his "perfect designs" are due to eating symmetrical sandwiches, but we’re still investigating.`,
    image: Aakash,
    linkedin: "https://www.linkedin.com/in/aakashpanchal2004/",
    insta: "https://www.instagram.com/_aakash.ux/",
    role: "Lead Full Stack Developer",
  },
  {
    name: "Harsh Pal",
    bio: "The Task Tamer Harsh is the glue that holds the project together. As our Junior Project Manager, he’s the master of keeping everything on track—whether it’s timelines, tasks, or keeping the team from spiraling into chaos (which, let’s be honest, happens sometimes). With a sharp focus and a talent for organization, Harsh ensures that every project runs smoothly, and everyone knows exactly what’s happening, when, and why. Outside of managing projects, Harsh is busy finding new ways to make processes more efficient (and maybe even a bit fun).",
    image: Aakash,
    role: "Quality Assurance Specialist",
  },
  {
    name: "Aditya Singh",
    bio: "The Code Conjurer Aditya has a magical way of making websites come to life—sometimes, we’re convinced he whispers spells to his keyboard. Whether it’s a tangled mess of code or a tricky bug, he tackles it with the patience of a monk and the precision of a surgeon. When not coding, Aditya can be found experimenting with productivity hacks or solving real-world problems with his ever-growing list of side projects.",
    image: Aakash,
    role: "Web Developer",
  },
  {
    name: "Kushal Shah",
    bio: " The Code Whisperer Kushal doesn’t just write code—he talks to it, calms it down when it gets cranky, and makes sure everything runs like a well-oiled machine. With his knack for spotting the tiniest details, he’s the one who ensures everything is as smooth and efficient as possible. When he’s not perfecting code, he’s usually exploring the latest tech trends or building something new to test his limits.",
    image: Aakash,
    role: "Web Dev",
  },

  {
    name: "Nawazish Chauhan",
    bio: `The Design Alchemist Nawazish doesn’t just design logos—he transforms them. With a flick of his digital pen and a dash of creative magic, he turns abstract ideas into eye-catching designs that make you say, “Why didn’t I think of that?” As the team’s Logo and Creative Designer, Nawazish can turn even the most complicated concepts into sleek, memorable visuals. When he’s not creating jaw-dropping designs, you’ll find him crafting his next big creative "masterpiece" (probably overthinking fonts for the perfect impact).`,
    image: Aakash,
    role: "Logo Designer",
  },
  {
    name: "Vasu Verma",
    bio: " The Visual Sorcerer Vasu brings pixels to life in ways that will make you question the laws of physics. As our Lead 2D/3D Artist, he’s a wizard who can transform any idea into a stunning visual masterpiece. Whether it’s crafting mesmerizing 2D illustrations or building intricate 3D worlds, Vasu’s creations are as immersive as they are mind-blowing.",
    image: Aakash,
    role: "Creative Designer",
  },
];

const Team = () => {
  return (
    <RouteTransition>
      <Container>
        <InnerContent>
          <Title>
            <div className="tags">
              <div className="symb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.1422 14.1421C10.3914 17.8929 5.30433 20 0 20C5.30433 20 10.3914 22.1071 14.1422 25.8579C17.8929 29.6086 20 34.6957 20 40C20 34.6957 22.1071 29.6086 25.8578 25.8579C29.6086 22.1071 34.6957 20 40 20C34.6957 20 29.6086 17.8929 25.8578 14.1421C22.1071 10.3914 20 5.30433 20 0C20 5.30433 17.8929 10.3914 14.1422 14.1421Z"
                    fill="#0c0c0c"
                  />
                </svg>
              </div>
              <div className="tag">WHO</div>
              <div className="tag">WE</div>
              <div className="tag">ARE</div>
            </div>
            <h1 className="heading">
              <span>A TEAM OF </span>
              <span>CREATIVE HEADS</span>
            </h1>
          </Title>
          <div className="divider"></div>
          <Description>
            <h1 className="descriptiveHeading">
              <span>
                CLEVER STUDIO STARTED AS A HUMBLE PROJECT WITH BIG DREAMS OF
                SPRINKLING CREATIVITY ACROSS INDIA. FAST FORWARD, AND NOW WE'RE
                TRUSTED WORLDWIDE.
              </span>
            </h1>
            <div className="additional">
              <span>
                Get ready for a wild ride of creativity and tech wizardry! Our
                team of project managers, web wizards, design superheroes, and
                tech geniuses work together like a perfectly tuned
                orchestra—except, it’s way cooler than that. From app
                development and web design to video editing, VFX, and 2D/3D
                animation, we’re here to turn your wildest ideas into reality
                (no magic wand required). Let’s bring your vision to life with a
                blend of creativity, tech brilliance, and a sprinkle of fun!
              </span>
            </div>
          </Description>

          <TeamSection>
            {TeamMembers.map((item, index) => (
              <div className="member" key={index}>
                <img src={item.image} alt="a-man-in-suit" />
                <div className="details">
                  <h1>{item.name}</h1>
                  <p>{item.role}</p>
                </div>
                <div className="hover">
                  <div className="upper">
                    <div className="socials">
                      {item.linkedin && (
                        <a
                          href={item.linkedin}
                          target="_blank"
                          className="social"
                        >
                          <FaLinkedinIn />
                        </a>
                      )}
                      {/* <div className="social">
                        <FaXTwitter />
                      </div> */}
                      {item.insta && (
                        <a href={item.insta} target="_blank" className="social">
                          <FaInstagram />
                        </a>
                      )}
                    </div>
                    <div className="info">
                      <div className="quote">
                        <p>{item.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lower">
                    <div className="details">
                      <h1>{item.name}</h1>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TeamSection>
        </InnerContent>
      </Container>
    </RouteTransition>
  );
};
export default Team;
