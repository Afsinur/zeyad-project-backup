import styled from "@emotion/styled";

let ImgInfoContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 16px;
  height: 740px;
  @media screen and (max-width: 1536px) {
    height: 540px;
  }
  @media screen and (max-width: 1200px) {
    height: 440px;
  }
  @media screen and (max-width: 900px) {
    height: 450px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 500px) {
    height: 265px;
    margin-bottom: 5px;
    p,
    li {
      font-size: 0.6rem !important;
    }
  }
  .relative {
    width: 100%;
    height: 90%;
  }
  &:hover {
    .dynamic-img-title-container {
      .dflex {
        display: flex;
        justify-content: space-between;

        &.dnone {
          display: none;
        }
      }

      .absoluteData {
        display: flex;
        width: 100%;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p,
  li {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      margin: 6px 12px 0 0;
      cursor: pointer;
    }
  }

  .dynamic-img-title-container {
    position: relative;
    .dflex {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    .absoluteData {
      position: absolute;
      width: 100%;
      top: 0px;
      display: none;
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
`;

const PrintOneImgBox = ({ obj }) => {
  let { onLoadImg, onLoadTitle, onLoadSubTitles, hoverSubTitles } = obj;

  return (
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
  );
};

export default PrintOneImgBox;
