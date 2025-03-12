

import { useCallback } from "react";
import React, { useEffect, useRef } from "react";
import abbas from '../assets/Images/Rizvi Ahmed Abbas2.png';
import Typewriter from 'typewriter-effect';
import * as THREE from "three"; 
import VANTA from "vanta/dist/vanta.globe.min"; 
import gsap from "gsap";
import SplitType from "split-type";
import { useContextProvider } from "../utils/GlobleContextProvider";
import ModelViewer from "../components/CarModel"
 


export default function Content() {
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
          
            <ModelViewer />
        </div>



    );

}




