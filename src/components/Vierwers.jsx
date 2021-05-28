import React from "react";
import styled from "styled-components";

function Vierwers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
}

export default Vierwers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 80px 0 26px;

  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top:56.25%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  ${"" /* for transition "250ms" is an Ideal Time (not to fast/not to slow) */}
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    display: block;
    transition: opacity 500ms ease-in-out 0s;
    height: 100%;
    object-fit: cover;
    inset: 0px;
    opacity: 1;
    position: absolute;
    z-index: 1;
    top:0;
  }
  video {
    width: 100%;
    height: 100%;
    top: 0px;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  ${"" /* wrap:hover -->is equivalent to --> &:hover */}
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;
