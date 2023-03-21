//Cassis24kLongSleave
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Customize from "../../../components/customize/Customize";

import { CatalogContentDivForViewCollectionRelated } from "../../../components/home/relatedViewCollection";

import { ImgInfoContainer } from "../../../components/home/PrintOneImgBoxForOnlyBottom";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ClassicMafiaTee = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState([]);

  const [isLoadingTop, setIsLoadingTop] = useState(true);
  const [topObj, setTopObj] = useState([]);

  let catagoryTop = "related-classic-mafia-tee-top";
  let catagory = "related-classic-mafia-tee-bottom";
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
            onLoadTitle: itm.title,
            onLoadSubTitles: `$${itm.price}`,
            hoverSubTitles: itm.size,
            customize: itm.routeLink,
          };
        })
      );

      setIsLoading(false);
    })();

    (async () => {
      let url = `${serverLink}/api/data/${catagoryTop}`;

      let res = await fetch(url);
      let data = await res.json();

      //----

      if (data.data.length > 0) {
        let fl = data.data.filter((itm, i) => {
          if (i === 0) return true;

          return false;
        });

        let mp = data.data.map((itm) => {
          return { src: itm.img.join("") };
        });

        let flMp = fl.map((itm) => {
          return {
            name_: itm.title,
            price_: `$${itm.price}`,
            sizes_: itm.size,
            colors_: itm.colors,
          };
        });

        let obj = {
          ...flMp[0],
          dtImgArr: mp,
        };

        //----

        setTopObj([obj]);
      }

      setIsLoadingTop(false);
    })();
  }, [catagoryTop, catagory, serverLink]);

  return (
    <>
      <main>
        <Header />
        {topObj && topObj.map((itm, i) => <Customize itm={itm} key={i} />)}

        <CatalogContentDivForViewCollectionRelated>
          <div className="top-div">
            <Grid
              container
              spacing={1.3}
              style={{
                padding: "0 10px",
              }}
            >
              {isLoadingTop && (
                <Grid item xs={12} sm={12}>
                  loading..
                </Grid>
              )}

              <Grid item xs={6} sm={3}>
                <div>
                  <h4>RELATED ITEMS</h4>
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box
                  sx={{
                    display: {
                      sm: "none",
                      md: "inherit",
                    },
                  }}
                >
                  <div>
                    <h4>24k 2023</h4>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div></div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box
                  sx={{
                    display: {
                      sm: "none",
                      md: "inherit",
                    },
                  }}
                >
                  <div>
                    {/* <h4 className="view-collection-txt-related">
                  <span>PREV</span>
                  <span>NEXT</span>
                </h4> */}
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>

          <div className="img-arr-container">
            <Grid container spacing={1.3}>
              {isLoading && (
                <Grid item sm={6} xs={6} md={3}>
                  loading..
                </Grid>
              )}

              {counter.length > 0 &&
                counter.map((obj, index) => {
                  const {
                    onLoadImg,
                    onLoadTitle,
                    onLoadSubTitles,
                    hoverSubTitles,
                  } = obj;

                  return (
                    <Grid item sm={6} xs={12} md={3} key={index}>
                      <Link to={`/product/${obj.customize}`}>
                        <div className="single-img-container">
                          <ImgInfoContainer>
                            <div className="relative">
                              <img src={`${onLoadImg}`} alt="img" />
                              <div className="dynamic-img-title-container">
                                <div className="dflex dnone">
                                  <p className="title">{onLoadTitle}</p>
                                  <ul className="sub-ul">
                                    <li>{onLoadSubTitles}</li>
                                  </ul>
                                </div>
                                <div className="dflex absoluteData">
                                  <p className="title">quick add</p>
                                  <ul className="sub-ul">
                                    {hoverSubTitles.map((itm, i) => (
                                      <li className="dynamic-bracket" key={i}>
                                        {itm}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </ImgInfoContainer>
                        </div>
                      </Link>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </CatalogContentDivForViewCollectionRelated>

        <Footer />
      </main>
    </>
  );
};

// function ShowData(obj) {
//   const { onLoadImg, onLoadTitle, onLoadSubTitles, hoverSubTitles } = obj;
//   console.log(onLoadImg, onLoadTitle, onLoadSubTitles, hoverSubTitles);
//   return (
//     <>
//       <ImgInfoContainer>
//         <div className="relative">
//           <img src={`${onLoadImg}`} alt="img" />
//           <div className="dynamic-img-title-container">
//             <div className="dflex dnone">
//               <p className="title">{onLoadTitle}</p>
//               <ul className="sub-ul">
//                 <li>{onLoadSubTitles}</li>
//               </ul>
//             </div>
//             <div className="dflex absoluteData">
//               <p className="title">quick add</p>
//               <ul className="sub-ul">
//                 {hoverSubTitles.map((itm, i) => (
//                   <li className="dynamic-bracket" key={i}>
//                     {itm}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </ImgInfoContainer>
//     </>
//   );
// }

export default ClassicMafiaTee;
