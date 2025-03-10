import React, { useEffect, useState } from "react";
import RouteTransition from "../components/RouteTransition";
import styled from "styled-components";

const Contact = () => {
  const Container = styled.div`
    height: 100dvh;
    padding: 7rem;
    padding-bottom: 0;

    @media (max-width: 768px) {
      padding: 5rem 2rem;
    }

    @media (max-width: 568px) {
      padding: 7rem 1rem;
    }
  `;

  const ContactWrapper = styled.div`
    display: flex;
    /* align-items: flex-end; */

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
  `;

  const InfoSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h1 {
      display: flex;
      flex-direction: column;
      font-family: "Mona Sans";
      font-weight: 800;
      font-size: 5vw;

      span {
        line-height: 1;
      }
    }
    p {
      width: 50%;
      font-family: "Mona Sans";
      font-weight: 400;
      font-size: 2rem;
    }

    .socials {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .social {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        span {
          opacity: 0.5;
          font-size: 1.2rem;
        }
        p {
          line-height: 1.4;
          width: 100%;
          font-size: 1.2rem;
        }
        a {
          margin-top: 0.5rem;
          text-decoration: underline;
          text-underline-offset: 0.4rem;
          color: #000;
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
    }

    @media (max-width: 1024px) {
      h1 {
        font-size: 5rem;
      }

      p {
        width: 60%;
        font-size: 1.5rem;
      }
    }

    @media (max-width: 900px) {
      h1 {
        font-size: 4rem;
      }
    }

    @media (max-width: 768px) {
      gap: 3rem;
      width: 100%;

      p {
        width: 50%;
      }
    }

    @media (max-width: 400px) {
      h1 {
        font-size: 3.5rem;
      }

      p {
        width: 100%;
      }
    }
  `;

  const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 50%;

    .formHeader {
      display: flex;
      gap: 1.5rem;

      svg {
        width: 2.5rem;
      }

      span {
        font-size: 3rem;
      }

      .italic {
        font-style: italic;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      .dualInput,
      .singleInput {
        width: 100%;
        display: flex;
        gap: 1.5rem;
        .input {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          height: 100%;
          width: 100%;

          span {
            font-weight: 500;
            color: #000000d1;
          }

          .highlighted {
            color: #ff3939;
          }

          input,
          textarea {
            width: 100%;
            font-family: "Mona Sans";
            font-size: 1rem;
            font-weight: 400;
            outline: none;
            padding: 0.8rem 1rem;
            border: 1.5px solid #00000018;
            border-bottom: 3px solid #00000016;
            border-radius: 8px;
            transition: all 0.2s ease-in-out;

            &:focus {
              border: 1.5px solid #0000006a;
              border-bottom: 3px solid #000000c0;
            }
          }
        }
      }

      .submit {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        width: fit-content;
        padding: 1rem 2.5rem;
        border: 1px solid #000;
        border-radius: 99px;

        svg {
          margin-top: -2px;
        }
      }
    }

    @media (max-width: 1024px) {
      .formHeader {
        svg {
          display: none;
        }
      }
    }
    @media (max-width: 900px) {
      .formHeader {
        span {
          font-size: 2.5rem;
        }
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      .formHeader {
        span {
          font-size: 2.5rem;
        }
      }
    }
  `;

  return (
    <RouteTransition>
      <Container>
        <ContactWrapper>
          <InfoSection>
            <h1>
              <span>CONNECT</span>
              <span>WITH US</span>
            </h1>
            <p>Reach out to us for innovative solutions.</p>
            <div className="socials">
              <div className="social">
                <span>Phone</span>
                <p>+91 77109 48801</p>
              </div>
              <div className="social">
                <span>Email</span>
                <p>ritesh@cleverstudio.in</p>
              </div>
              <div className="social">
                <span>Office</span>
                <p>Bhandup Mumbai 400078</p>
                <a href="#">Map Us</a>
              </div>
            </div>
          </InfoSection>
          <FormSection>
            <div className="formHeader">
              <svg
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.057 13.0608C31.6445 12.4767 31.6473 11.527 31.0632 10.9395L21.5448 1.36607C20.9607 0.778593 20.011 0.775852 19.4235 1.35995C18.836 1.94404 18.8333 2.89378 19.4174 3.48126L27.8781 11.991L19.3684 20.4518C18.7809 21.0358 18.7782 21.9856 19.3623 22.5731C19.9464 23.1605 20.8961 23.1633 21.4836 22.5792L31.057 13.0608ZM-0.00475599 13.4105L29.9951 13.4971L30.0038 10.4971L0.0039015 10.4105L-0.00475599 13.4105Z"
                  fill="black"
                />
              </svg>

              <span>
                Let's <span className="italic">level up</span> your brand,
                together!
              </span>
            </div>
            <div className="form">
              <div className="dualInput">
                <div className="input">
                  <span>
                    Name <span className="highlighted">*</span>
                  </span>
                  <input type="text" name="name" />
                </div>
                <div className="input">
                  <span>
                    Working for <span className="highlighted">*</span>
                  </span>
                  <input type="text" name="company" />
                </div>
              </div>
              <div className="singleInput">
                <div className="input">
                  <span>
                    Email <span className="highlighted">*</span>
                  </span>
                  <input type="email" name="email" />
                </div>
              </div>
              <div className="dualInput">
                <div className="input">
                  <span>
                    Phone <span className="highlighted">*</span>
                  </span>
                  <input type="text" name="name" />
                </div>
                <div className="input">
                  <span>Budget</span>
                  <input type="text" name="company" />
                </div>
              </div>
              <div className="singleInput">
                <div className="input">
                  <span>
                    Interested in <span className="highlighted">*</span>
                  </span>
                  <input type="text" name="name" />
                </div>
              </div>
              <div className="singleInput">
                <div className="input">
                  <span>Additional details</span>
                  <textarea rows={5} name="name" />
                </div>
              </div>
              <div className="submit">
                <span>Submit</span>
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989592 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM0 6.75H17V5.25H0V6.75Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </FormSection>
        </ContactWrapper>
      </Container>
    </RouteTransition>
  );
};
export default Contact;
