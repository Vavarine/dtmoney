import styled from "styled-components";
import { darken, transparentize } from "polished";

import { theme } from "styles/theme";
import { rem } from "styles/mixins";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 2rem;
  }

  input {
    height: 4rem;
    margin-bottom: 1rem;
    padding: 0 ${rem(24)};

    background-color: #e7e9ee;
    border: solid 1px #d7d7d7;
    border-radius: 5px;

    font-size: 16px;
    color: ${theme.color.text};

    ::placeholder {
      color: ${theme.color.text};
    }
  }

  button[type="submit"] {
    height: 4rem;
    margin-top: 0.5rem;

    border-radius: 5px;
    background-color: ${theme.color.green};
    color: ${theme.color.white};
    font-size: 1rem;

    transition: all 0.2s;

    :hover {
      filter: brightness(0.95);
    }

    :active {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin-bottom: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  background-color: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, theme.color[activeColor]) : "transparent"};
  border-radius: 5px;
  border: solid 1.5px #d7d7d7;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;

  font-size: 1rem;
  color: ${theme.color.title};
  transition: all 0.2s;

  :hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  :active {
    border-color: ${darken(0.2, "#d7d7d7")};
  }

  img {
    height: 24px;
    width: 24px;
  }
`;
