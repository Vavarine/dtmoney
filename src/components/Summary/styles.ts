import styled from "styled-components";
import { rem } from "styles/mixins";
import { theme } from "styles/theme";

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  margin-top: ${rem(-68)};
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  column-gap: ${rem(32)};

  div {
    flex: 1;
    height: ${rem(136)};
    padding: ${rem(24)} ${rem(20)} 0 ${rem(32)};

    background-color: ${theme.color.shape};
    border-radius: 5px;

    header {
      margin-bottom: ${rem(7.5)};

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    span {
      font-size: ${rem(36)};
      color: ${theme.color.title};
      font-weight: 400;

      strong {
        font-weight: 500;
      }
    }

    &.highlight {
      background-color: ${theme.color.green};

      color: ${theme.color.white};

      span {
        color: ${theme.color.white};
      }
    }
  }
`;
