import SplitType from 'split-type';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

export default function Steps() {
  const imageRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const splitTitle = SplitType.create(titleRef.current, { types: 'chars' });

    gsap.set(splitTitle.chars, {
      opacity: 0,
      filter: 'blur(5px)',
      y: 100,
    });

    gsap.to(splitTitle.chars, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      stagger: 0.02,
      duration: 0.6,
      delay: 0.3,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    if (imageRef.current) {
      gsap.set(imageRef.current, {
        filter: 'blur(10px)',
        scale: 1.1,
      });

      gsap.to(imageRef.current, {
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.75,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);

  return (
    <div className="steps-container">
    <div className="steps-wrapper">
      <div className="steps-sidebar">
        <div ref={titleRef} className="steps-title">
          <h2 className="title-large PlayfairFont">AI Oncology Assistant</h2>
          <h2 className="title-small">SMART STEPS TO ACCESS RESEARCH DATA</h2>
        </div>
        <p className="steps-description">
          Follow these three simple steps to access real oncology research, analyze medical images, and gain data-driven insights using AI.
        </p>
      </div>
  
      {/* Steps Section */}
      <div ref={imageRef} className="steps-content">
        {[
          'INPUT TEXT OR MEDICAL IMAGES',
          'ANALYZE WITH AI-POWERED MODELS',
          'ACCESS VERIFIED RESEARCH DATA'
        ].map((title, index) => (
          <div key={index} className="step-card">
            <div>
              <span className="step-label">Step {index + 1}</span>
              <h2 className="step-title">{title}</h2>
              <p className="step-text">
                {index === 0
                  ? 'Upload medical reports, pathology images, or enter research queries to get AI-powered insights on oncology.'
                  : index === 1
                  ? 'Our AI models analyze text and images using the latest deep-learning techniques, identifying patterns and key medical insights.'
                  : 'Receive real-time access to peer-reviewed oncology research papers, clinical trial data, and expert recommendations.'}
              </p>
              <p className="step-text">
                {index === 0
                  ? 'The AI assistant supports various formats, including CT scans, MRIs, pathology slides, and research paper text.'
                  : index === 1
                  ? 'Leveraging advanced NLP and computer vision, the AI processes complex medical data to assist in research and diagnostics.'
                  : 'Data is sourced from verified medical journals, ensuring credibility, accuracy, and up-to-date information on oncology.'}
              </p>
              <button className="step-button">
                {index === 0 ? 'Upload Data' : index === 1 ? 'Start Analysis' : 'View Research'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
}
