// import BG1 from "../assets/Images/bg1.png";
// import BG2 from "../assets/Images/bg2.png";
// import BG3 from "../assets/Images/bg3.png";

// const Title = styled.div`
//   display: flex;
//   align-items: flex-end;
//   justify-content: space-between;
//   padding: 0 3rem;
//   margin-bottom: 3rem;
//   h2 {
//     font-size: 6rem;
//     font-weight: 600;
//     text-transform: uppercase;
//     span {
//       line-height: 1;
//       display: block;
//     }
//   }
//   @media (max-width: 768px) {
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//     padding: 0;
//     h2 {
//       font-size: 2.8rem;
//     }
//   }
// `;

// const HorizontalWrapper = styled.div`
//   width: max-content;
//   display: flex;
//   gap: 1rem;
//   padding: 0 3rem;

//   .card {
//     opacity: 1;
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//     padding: 1.5rem;
//     height: 60vh;
//     width: 20vw;
//     background-color: #f0f0f0;
//     border-radius: 30px;
//     overflow: hidden;
//     transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);

//     .image {
//       height: 100%;
//       width: 100%;
//       position: absolute;
//       top: 0;
//       left: 0;
//       z-index: 1;
//       transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);

//       img {
//         height: 100%;
//         width: 100%;
//         object-fit: cover;
//       }
//     }

//     .info {
//       z-index: 2;
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       width: 95%;

//       .tag {
//         padding: 0.8rem 1.5rem;
//         width: fit-content;
//         background-color: #fff;
//         border-radius: 20px;
//         font-family: "Mona Sans";
//         font-size: 0.9rem;
//         font-weight: 500;
//       }

//       span {
//         color: #f0f0f0;
//         font-family: "Mona Sans";
//         font-size: 1.1rem;
//         font-weight: 400;
//         line-height: 1.4;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     margin-top: 2rem;
//     padding: 0;
//     .card {
//       width: 80vw;
//     }
//   }
// `;

// const Cards = [
//   {
//     image: BG1,
//     service: "Web Dev",
//     info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
//   },
//   {
//     image: BG2,
//     service: "App Dev",
//     info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
//   },
//   {
//     image: BG3,
//     service: "Backend Dev",
//     info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
//   },
//   {
//     image: BG1,
//     service: "Web Dev",
//     info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
//   },
//   {
//     image: BG2,
//     service: "Web Dev",
//     info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
//   },
//   {
//     image: BG1,
//     service: "Web Dev",
//     info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
//   },
//   {
//     image: BG2,
//     service: "Web Dev",
//     info: "We specialize in crafting tailored web development solutions that elevate your online presence and drive business growth.",
//   },
// ];

// const containerRef = useRef(null);
// const horizontalSection = useRef(null);

// const cardsRef = useRef([]);

// useGSAP(() => {
//   let mm = gsap.matchMedia();
//   mm.add("(min-width: 1080px)", () => {
//     gsap.to(horizontalSection.current, {
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top -10%",
//         pin: true,
//         scrub: 0.6,
//         end: "+=1200px",
//       },
//       x: -(horizontalSection.current.offsetWidth - window.innerWidth),
//     });
//   });
// });

// const animateCards = (id) => {
//   const tl = gsap.timeline({
//     defaults: {
//       duration: 0.05,
//       ease: "expo.out",
//       filter: "blur(0)",
//       scale: 1,
//     },
//   });

//   if (id !== null) {
//     tl.to(cardsRef.current, {
//       opacity: 0.7,
//       filter: "blur(2px)",
//     }).to(
//       cardsRef.current[id],
//       {
//         opacity: 1,
//         scale: 1.025,
//       },
//       "-=0.05"
//     );
//   } else {
//     tl.to(cardsRef.current, {
//       opacity: 1,
//     });
//   }
// };
{
  /* <Title>
        <h2>
          <span>Our</span> <span>Services</span>
        </h2>
      </Title>
      <HorizontalWrapper ref={horizontalSection}>
        {Cards.map((item, index) => (
          <div
            className="card"
            key={index}
            ref={(element) => (cardsRef.current[index] = element)}
            onMouseEnter={() => animateCards(index)}
            onMouseLeave={() => animateCards(null)}
          >
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="info">
              <div className="tag">{item.service}</div>
              <span>{item.info}</span>
            </div>
          </div>
        ))}
      </HorizontalWrapper> */
}
{
  /* <div className="title">
          <span>Awards</span>
        </div> */
}
