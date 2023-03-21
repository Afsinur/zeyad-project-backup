import styled from "@emotion/styled";

let ImgInfoContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: auto;
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
    display: flex;
    flex-direction: column;
  }

  .absolute {
    position: absolute;
    top: 0;
    left: 0;

    visibility: hidden;
  }

  :hover {
    .absolute {
      visibility: visible;
    }

    .relative {
      visibility: hidden;
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
  let { onLoadImg, onHoverImg, onLoadTitle, onLoadSubTitles, hoverSubTitles } =
    obj;

  return (
    <ImgInfoContainer>
      <div className="relative">
        <img src={`${onLoadImg}`} alt="img" />
        <div className="dynamic-img-title-container">
          <p className="title">{onLoadTitle}</p>
          <ul className="sub-ul">
            <li>{onLoadSubTitles}</li>
          </ul>
        </div>
      </div>

      <div className="absolute">
        <img src={`${onHoverImg}`} alt="img" />
        <div className="dynamic-img-title-container">
          <p className="title">{onLoadTitle}</p>
          <ul className="sub-ul">
            {hoverSubTitles.map((itm, i) => (
              <li className="dynamic-bracket" key={i}>
                {itm}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ImgInfoContainer>
  );
};

export default PrintOneImgBox;
