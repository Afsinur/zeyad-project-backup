import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const FooterDiv = styled.div`
  width: 100%;
  border-top: 1px solid #ededed;
  margin-top: 50px;

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
      bottom: 0;
    }

    :hover::after {
      position: absolute;
      content: "]";
      bottom: 0;
    }
  }

  .contact-container {
    padding: 10px;

    li {
      list-style: none;
      margin: 8px 0;
    }

    .news-letter-container {
      position: relative;
      border-bottom: 1px solid #ededed;

      input {
        width: 100%;
        padding: 6px 0;
        border: none;
        outline: none;
      }

      .submit-btn {
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 500;
        position: absolute;
        right: 4px;
        top: 4px;
      }
    }
  }

  p,
  a {
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const footer = () => {
  return (
    <FooterDiv>
      <div className="contact-container">
        <Grid container spacing={1.3}>
          <Grid item xs={6} sm={4} md={3}>
            <ul className="normal-contact">
              <li>
                <Link to="/" className="dynamic-bracket">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/" className="dynamic-bracket">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="dynamic-bracket">
                  RETURN POLICY
                </Link>
              </li>
              <li>
                <Link to="/" className="dynamic-bracket">
                  TERMS {"&"} CONDITIONS
                </Link>
              </li>
              <li>
                <Link to="/" className="dynamic-bracket">
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ul className="media-contact">
              <li>
                <Link to="/" className="dynamic-bracket">
                  INSTAGRAM
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}></Grid>
          <Grid item xs={12} sm={12} md={3}>
            {/* <div className="news-letter-container">
              <input type="text" placeholder="SUBSCRIBE TO NEWSLETTER" />
              <Link to="/" className="dynamic-bracket submit-btn">
                Submit
              </Link>
            </div> */}
          </Grid>
        </Grid>

        <Grid container spacing={1.3}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>

          <Grid item xs={12} sm={6}>
            <p>COUNTRY: USA</p>
          </Grid>

          <Grid item xs={12} sm={6}>
            <p style={{ textAlign: "right" }}>©2023 — STAYGOLDSTUDIOS</p>
          </Grid>
        </Grid>
      </div>
    </FooterDiv>
  );
};

export default footer;
