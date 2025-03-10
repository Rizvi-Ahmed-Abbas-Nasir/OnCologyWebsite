import React, { useState } from "react";
import styled from "styled-components";
import { useContextProvider } from "../utils/GlobleContextProvider";

import Mj from "../assets/Logo/MG.png";
import Godrej from "../assets/Logo/godrej.png";
import ICICI from "../assets/Logo/icici.png";
import IIT from "../assets/Logo/iitKanpur.png";
import Zomato from "../assets/Logo/Zomato.png";
import Isnfra from "../assets/Logo/JS_infra.png";

const Container = styled.div`
  padding: 10rem 5rem;
  @media (max-width: 1080px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const BrandsWrapper = styled.div`
  margin: 0 4vw;
  overflow: hidden;
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
    margin-left: 12px;
    margin-top: -2px;

    li {
      width: 16%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -2px;
      margin-bottom: -2px;
      border-width: 0 0 1px 1px;
      border-style: solid;
      border: 1px solid #00000014;

      img {
        width: 14rem;
        transition: 0.25s ease-in-out;
        &:hover {
          scale: 1.1;
        }
      }
    }
  }

  @media (max-width: 1080px) {
    margin: 0 2rem;
    ul {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      li {
        width: 50%;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 0rem;

    ul {
      margin: 0;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      li {
        margin: 0;
        width: 50%;
      }
    }
  }
`;

const Brands = () => {
  const { setCursorSettings } = useContextProvider();
  const [brands, setBrands] = useState([
    {
      url: Mj,
    },
    {
      url: Godrej,
    },
    {
      url: ICICI,
    },
    {
      url: IIT,
    },
    {
      url: Zomato,
    },
    {
      url: Isnfra,
    },
  ]);

  return (
    <Container>
      <BrandsWrapper>
        <ul>
          {brands.map((item, index) => {
            return (
              <li
                key={index}
                onMouseEnter={() =>
                  setCursorSettings((prevSettings) => ({
                    ...prevSettings,
                    size: 2,
                    color: "#00000022",
                    border: "transparent",
                  }))
                }
                onMouseLeave={() => {
                  setCursorSettings((prevSettings) => ({
                    ...prevSettings,
                    size: 1,
                    color: "transparent",
                    border: "#00000057",
                  }));
                }}
              >
                <img src={item.url} alt="" />
              </li>
            );
          })}
        </ul>
      </BrandsWrapper>
    </Container>
  );
};

export default Brands;
