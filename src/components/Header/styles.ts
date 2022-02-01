import styled from "styled-components";
import { rem } from "../../styles/mixins";
import { theme } from "../../styles/theme";

export const Container = styled.header`
  padding: ${rem(32)} 10px ${rem(132)} 10px;
  background-color: ${theme.color.blue};
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1220px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: ${rem(12)} ${rem(32)};
    background-color: ${theme.color.blueLight};
    border-radius: 5px;

    font-size: ${rem(16)};
    font-weight: 600;
    color: ${theme.color.white};

    transition: all 0.2s;

    :hover {
      filter: brightness(0.95);
    }

    :active {
      filter: brightness(0.9);
    }
  }
`;
