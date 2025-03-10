

import { useCallback } from "react";
import React, { useEffect, useRef } from "react";
import abbas from '../assets/Images/Rizvi Ahmed Abbas2.png';
import Typewriter from 'typewriter-effect';
import * as THREE from "three"; 
import VANTA from "vanta/dist/vanta.globe.min"; 
import gsap from "gsap";
import SplitType from "split-type";
import { useContextProvider } from "../utils/GlobleContextProvider";

export default function Content() {
    const vantaRef = useRef(null);
    const cesaRef = useRef(null);
    const andRef = useRef(null);
    const csiRef = useRef(null);
    const vppcoeRef = useRef(null);
    const headerTextRef = useRef(null);
    const infoRef = useRef(null);
    const infoRef2 = useRef(null);
    const showReelRef = useRef(null);
    const heroRef = useRef(null);



    const {
        setCursorSettings,
        preloader, 
      } = useContextProvider();
    
    
      useEffect(() => {
        let vantaEffect;
        if (!vantaEffect) {
          vantaEffect = VANTA({
            el: vantaRef.current,
            THREE, 
            mouseControls: true,
            touchControls: true,
            minHeight: 100.0,
            minWidth: 100.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x0, 
            color2: 0x0,
            backgroundColor: 0xffffff, 
          });
        }

        
        return () => {
            if (vantaEffect) vantaEffect.destroy();
          };
        }, []);



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
        
          
        
          useEffect(() => {
            if (!preloader) {
              
              const cesaSplit = SplitType.create(cesaRef.current, { types: "chars" });
              const andSplit = SplitType.create(andRef.current, { types: "chars" });
              const csiSplit = SplitType.create(csiRef.current, { types: "chars" });
              const VPPCOE = SplitType.create(vppcoeRef.current, { types: "chars" });
        
              const timeline = gsap.timeline();
        
              timeline
                .set(cesaSplit.chars, { yPercent: -100, opacity: 0 })
                .set(andSplit.chars, { yPercent: 100, opacity: 0 })
                .set(csiSplit.chars, { yPercent: 100, opacity: 0 })
                .set(VPPCOE.chars, { yPercent: 100, opacity: 0 })
        
                .to([cesaSplit.chars, andSplit.chars, csiSplit.chars, VPPCOE.chars], {
                  yPercent: 0,
                  opacity: 1,
                  duration: 1,
                  stagger: 0.05, 
                  ease: "power4.out",
                });
            }
          }, [preloader]);
   
    return(
        <div className="mainPage">
            <div
        ref={vantaRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, 
        }}
      ></div>
       
        <div className="frontPage">
            <div className="ismyPhoto">
                <img className="rizvi" 
                    src="https://res.cloudinary.com/dtnotszn5/image/upload/v1740779173/Rizvi_r06umi.png"
                />

            </div>

            <div className="Descriptions">
                <div  id='Introduction' className="PlayfairFont">
                <p>hello there,</p><p>  My Name is </p>
                </div>
                <div id="MyName" className="oswarld" > 
               <h2>Rizvi Ahmed Abbas</h2>
                </div>
                <div id='Multiples-skills-text' className="oswarld"  > 
                    <h4>I'm a Professional <div className='MultiText '> <Typewriter 
                                                options={{
                                                        strings: [
                                                        'MERN Stack Developer', 
                                                        'Python Developer',
                                                        'Cloud Engineer'
                                                        ],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}/></div></h4>
                </div>
                <div id='downloadAndContactBTN'>
                    <button>Downlaod CV</button>
                    <button>About Me</button>
                </div>
            </div>
        </div>
        </div>



    );

}




