import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PrintOneImgBox from "./PrintOneImgBox";
import { useEffect, useState } from "react";

const AfterHeaderDiv = styled.div`
  width: 100%;
  padding-top: 70px;

  .img-container {
    width: 100%;
    padding: 10px 0;
  }

  p {
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
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

  picture {
    position: relative;
  }

  picture::after {
    position: absolute;
    content: "OCTOBER'S VERY OWN CLASSIC COLLECTION";
    bottom: -16px;
    left: 0;

    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const AfterHeader = () => {
  /*let imgDataArr = [
    {
      onLoadImg: "/img/heroHover/heroimg01.jpg",
      onHoverImg: "/img/heroHover/hoverHeroimg01.jpg",
      onLoadTitle: "24k classic collection",
      onLoadSubTitles: "",
      hoverSubTitles: [""],
    },
    {
      onLoadImg: "/img/heroHover/heroimg02.jpg",
      onHoverImg: "/img/heroHover/hoverHeroimg02.jpg",
      onLoadTitle: "",
      onLoadSubTitles: "",
      hoverSubTitles: [""],
    },
  ];*/

  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState([]);

  let catagory = "home-welcome";
  let serverLink = "https://zeyad-back-end.onrender.com";

  useEffect(() => {
    (async () => {
      let url = `${serverLink}/api/data/${catagory}`;

      let res = await fetch(url);
      let data = await res.json();

      let arr = data.data;

      let imgDataArr = [];
      let chunkSize = 2;
      let totalChunk = arr.length / chunkSize;
      for (let i = 0; i < totalChunk + 1; i++) {
        let chunk = arr.slice(i * chunkSize, i * chunkSize + chunkSize);

        if (chunk[0]) {
          if (chunk[1]) {
            let { title: onLoadTitle } = chunk[0];
            let mapImg = {
              onLoadTitle,
              onLoadImg: chunk[0].img.join(""),
              onHoverImg: chunk[1].img.join(""),
              onLoadSubTitles: "",
              hoverSubTitles: [""],
            };
            imgDataArr.push(mapImg);
          }
        }
      }

      setCounter(imgDataArr);

      setIsLoading(false);
    })();
  }, [catagory, serverLink]);

  return (
    <AfterHeaderDiv>
      <div className="img-container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={1.3}
            sx={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            {isLoading && (
              <Grid item sm={6} xs={6} md={3}>
                loading..
              </Grid>
            )}

            {counter.length > 0 &&
              counter.map((obj, i) => (
                <Grid item sm={6} md={3} key={i}>
                  <div className="single-img-container">
                    <PrintOneImgBox obj={obj} />
                  </div>
                </Grid>
              ))}
          </Grid>
        </Box>

        <Grid container spacing={1.3}>
          <Grid item xs={12}>
            <p className="dynamic-bracket" style={{ padding: "10px" }}>
              Atlanta (24ºc)
            </p>
          </Grid>

          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    </AfterHeaderDiv>
  );
};

export default AfterHeader;
