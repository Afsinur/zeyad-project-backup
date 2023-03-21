import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const StickyCollectionDiv = styled.div`
  width: 100%;
  margin-top: 00px;

  .view-collection-link {
    margin-top: 10px;
  }

  h3 {
    font-weight: 500;
    font-size: 3.2em;

    @media screen and (max-width: 1200px) {
      font-size: 2.4rem;
      margin-top: 15px;
    }

    @media screen and (max-width: 900px) {
      font-size: 1.25rem;
      margin-top: 15px;
    }
  }

  p {
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
      font-size: 0.85rem;
    }
    @media screen and (max-width: 900px) {
      font-size: 0.85rem;
    }
  }

  .main {
    padding: 10px;
  }

  .grid-container {
    padding: 10px;
    .cmgsnimg {
      width: 200px;
      text-align: center;
      img {
        width: 100%;
      }
    }
    @media screen and (max-width: 900px) {
      .cmgsnimg {
        width: 100%;
        text-align: center;
        padding: 80px 0px;
        p {
          font-size: 0.9em;
        }
        span {
          font-size: 0.7em;
        }
        img {
          width: 100%;
        }
      }
    }
    @media screen and (max-width: 600px) {
      .cmgsnimg {
        width: 100%;
        text-align: center;
        padding: 80px 0px;
        p {
          font-size: 0.9em;
        }
        span {
          font-size: 0.7em;
        }
        img {
          width: 100%;
        }
      }
    }
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

  .right-large-img-container {
    position: relative;
    height: 100%;

    .absolute-links {
      position: absolute;

      font-size: 0.75rem;
      font-weight: 500;
      background-color: #fff;
      padding: 2px;
    }

    .absolute-link-1 {
      top: 50%;
      left: 56px;

      transform: translate(0%, -50%);
      @media screen and (max-width: 1200px) {
        left: 36px;
        top: 41%;
      }
    }

    .absolute-link-2 {
      top: 508px;
      right: 40px;
      @media screen and (max-width: 1200px) {
        top: 388px;
      }
    }
  }
`;

const StickyCollection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState([]);

  let catagory = "home-middle";
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
    <StickyCollectionDiv>
      <Box
        sx={
          {
            // display: {
            //   xs: "none",
            //   sm: "none",
            //   md: "inherit",
            // },
          }
        }
      >
        <div className="grid-container">
          <Grid container spacing={1.3}>
            <Grid item xl={6} lg={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
                  <div className="cmgsnimg">
                    <img src="/img/comingsoon.png" alt="img" />
                    <div className="textcenter">
                      <p>Embroidery Collection</p>
                      <span>coming soon...</span>
                    </div>
                  </div>
                  <div className="cmgsnimg">
                    <img src="/img/logo.png" alt="img" />
                    <div className="textcenter">
                      <p>Embroidery Collection</p>
                      <span>coming soon...</span>
                    </div>
                  </div>
                </Box>
                <div>
                  <h3>24KFOREVER</h3>
                  <p>
                    “NATURES FIRST GREEN IS GOLD” <br /> ©2023 — STAYGOLDSTUDIOS
                  </p>
                  <p></p>
                </div>
              </Box>
            </Grid>

            <Grid item xl={6} lg={6} md={8}>
              {isLoading && (
                <Grid item sm={6} xs={6} md={3}>
                  loading..
                </Grid>
              )}

              {counter.length > 0 &&
                counter.map((obj, i) => (
                  <RightImg key={i} src={obj.onLoadImg} />
                ))}
            </Grid>
          </Grid>
        </div>
      </Box>
    </StickyCollectionDiv>
  );
};

function RightImg({ src }) {
  return (
    <div className="right-large-img-container">
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={src}
        alt="img-alt"
      />

      <Link
        to="/product/classic-mafia-long-sleeve"
        className="absolute-links absolute-link-1"
        style={{ textTransform: "uppercase" }}
      >
        {"[1]"} classic mafia long sleeve
      </Link>

      <Link
        to="/product/classic-24k-long-sleeve"
        className="absolute-links absolute-link-2"
        style={{ textTransform: "uppercase" }}
      >
        {"[2]"} classic 24k long sleeve
      </Link>
    </div>
  );
}

export default StickyCollection;
