import React from "react";
import styled, { css } from "styled-components";
import instaSample from "../../images/instagram-macbook.png";
import tipprSample from "../../images/tippr-macbook.png";
import fyloSample from "../../images/fylo-macbook.png";
import PropTypes from "prop-types";

const FeaturedWorkContainerDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 60px;

  ${props =>
    props.darkmode &&
    css`
      color: white;
    `}

  p {
    display: flex;
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 1200px) {
      justify-content: space-between;
    }

    div {
      width: 100%;
      margin: 40px 0 0;

      @media (min-width: 500px) {
        max-width: 800px;
      }

      @media (min-width: 1200px) {
        max-width: 500px;
      }

      div {
        padding: 20px 0;
        width: 100%;
        opacity: 1;
        transition: 0.2s;
        display: flex;
        align-items: center;
        flex-direction: column;

        &:hover {
          opacity: 0.8;
          padding: 16px 0 24px;
        }

        h4 {
          width: 100%;
          text-align: center;
          display: block;
          letter-spacing: 4px;
          margin-top: 20px;
        }
      }
    }
  }
`;

const FeaturedWorkContainer = props => {
  return (
    <FeaturedWorkContainerDiv darkmode={props.darkmode}>
      <p name="featuredProjects">Featured Projects</p>
      <div>
        <div>
          <div>
            <a href="https://github.com/nwthomas/tippr">
              <img src={tipprSample} alt="tippr portfolio samples" />
            </a>
            <h4>tippr Payment App</h4>
          </div>
        </div>
        <div>
          <div>
            <a href="https://github.com/nwthomas/instagram-clone">
              <img src={instaSample} alt="Instagram portfolio samples" />
            </a>
            <h4>Instagram Clone</h4>
          </div>
        </div>
        <div>
          <div>
            <a href="https://github.com/nwthomas/fylo-landing-page">
              <img src={fyloSample} alt="Fylo portfolio samples" />
            </a>
            <h4>Fylo Landing Page</h4>
          </div>
        </div>
      </div>
    </FeaturedWorkContainerDiv>
  );
};

FeaturedWorkContainer.propTypes = {
  darkmode: PropTypes.bool.isRequired
};

export default FeaturedWorkContainer;
