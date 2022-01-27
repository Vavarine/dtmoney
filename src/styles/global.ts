import { createGlobalStyle } from "styled-components";
import { rem } from "./mixins";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }

    @media (max-width: 1080px) {
      font-size: 93.75%
    }
  }

  body {
    background-color: ${theme.color.background};

    color: ${theme.color.text}
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.color.title}
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: none
  }

  [disabled] {
    cursor: default
  }

  .react-modal-overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  .react-modal {
    position: relative;
    width: 100%;
    max-width: 588px;

    padding: 64px 48px;

    background-color: ${theme.color.background};
    border-radius: 5px;

    .react-modal-close {
      position: absolute;
      height: ${rem(40)};
      width: ${rem(40)};
      top: .5rem;
      right: .5rem;

      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        transition: all 0.2s;
      }

      :hover {
        img {
          filter: brightness(0.9);
        }
      }

      :active {
        img {
          filter: brightness(.8);
        }
      }
    }
  }
`;
