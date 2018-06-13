import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import brandImage from "./brandImage.png";
import productImage from "./productImage.png";
import mainImage from "./mainImage.jpg";
import gradientBackground from "./gradientBackground.jpg";

function App() {
  return (
    <div style={{ width: "1142px", height: "132px", position: "relative" }}>
      <img src={mainImage} style={{ position: "absolute", zIndex: -1 }} />
      <img
        src={gradientBackground}
        style={{ position: "absolute", zIndex: -1 }}
      />
      <div
        style={{
          zIndex: 55,
          display: "flex",
          alignItems: "center",
          height: "132px",
          margin: "0 6rem",
          justifyContent: "space-around"
        }}
      >
        <SponsorLink>KNOW MORE</SponsorLink>
        <SponsorLink style={{ margin: "0 2rem 0 0" }}>BUY</SponsorLink>
        <img src={productImage} style={{}} />
        <img src={brandImage} style={{}} />
      </div>
    </div>
  );
}

const SponsorLink = styled.a`
  border-radius: 4.8px;
  border: 3.6px solid;
  font-family: BarlowCondensed-Regular;
  font-size: 21.6px;
  color: #00c7ff;
  width: 212px;
  letter-spacing: 1.71px;
  padding: 0.75rem 0;
  text-align: center;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
