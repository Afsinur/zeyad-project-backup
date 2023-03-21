import styled from "@emotion/styled";
import { Box } from "@mui/system";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

import { useEffect, useState } from "react";

const SliderSectionDiv = styled.div`
  width: 100%;
  margin: 50px 0;

  button,
  a,
  h4 {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
  }

  .fix-brackets {
    ::before,
    ::after {
      bottom: 0;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: #000;
    cursor: pointer;
    display: inline-block;

    font-style: normal;
    font-weight: 500;
    line-height: 1;

    margin: 0 10px 0 0;
    outline: none;
    padding: 0;
    text-transform: uppercase;
    transition: color 0.2s ease-in-out;
    white-space: nowrap;
  }

  .container_ {
    padding: 10px;
  }

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
    }

    :hover::after {
      position: absolute;
      content: "]";
    }
  }

  .top-div {
    padding: 20px 0px 10px 0px;
    display: flex;
    justify-content: space-between;
  }

  .slider-container {
    height: 76vh;

    .sub-swiper-container {
      position: relative;
      height: 100%;
      object-fit: contain;

      img {
        width: 100%;
        height: auto;
      }

      div {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 12px;

        p {
          font-size: 0.75rem;
          font-weight: 500;
          color: #fff;
        }
      }
    }

    @media screen and (max-width: 900px) {
      height: 50vw;
    }
  }
`;

const SliderSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState([]);

  let catagory = "home-slider";
  let serverLink = "https://zeyad-back-end.onrender.com";

  useEffect(() => {
    (async () => {
      let url = `${serverLink}/api/data/${catagory}`;

      let res = await fetch(url);
      let data = await res.json();

      setCounter(
        data.data.map((itm) => {
          return {
            onLoadImg: itm.img.join(""),
            onLoadTitle: "",
            onLoadSubTitles: "",
            hoverSubTitles: "",
            customize: "",
          };
        })
      );

      setIsLoading(false);
    })();
  }, [catagory, serverLink]);

  return (
    <SliderSectionDiv>
      <div className="container_">
        <div className="top-div">
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "inherit",
              },
            }}
          >
            <div>
              <h4>Los angeles</h4>
            </div>
          </Box>

          <div>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
              }}
            >
              {/* <button>PREV</button>
              <button>NEXT</button> */}
            </Box>
          </div>

          <div>
            <Box
              sx={{
                display: "flex",
              }}
            ></Box>
          </div>
        </div>

        {isLoading && <div>loading..</div>}

        <div className="slider-container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {counter.length > 0 &&
              counter.map((obj, i) => (
                <SwiperSlide key={i}>
                  <div className="sub-swiper-container">
                    <img src={obj.onLoadImg} alt="swiper-img" />

                    <div>
                      <p>Galleria</p>
                      <p>Los angeles, California</p>
                      <p>USA</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </SliderSectionDiv>
  );
};

export default SliderSection;
