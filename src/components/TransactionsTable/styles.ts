import styled from "styled-components";
import { rem } from "../../styles/mixins";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: ${rem(52)};
  max-width: 1220px;
  padding: 0 10px;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    font-size: 1rem;

    th {
      color: ${theme.color.text};
      font-weight: 400;
      padding: 1rem ${rem(32)};
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: ${rem(20)} ${rem(32)};
      background-color: ${theme.color.shape};

      border-radius: 5px;
      border: 0;

      &:first-child {
        color: ${theme.color.title};
      }

      &.withdraw {
        color: ${theme.color.red};
      }

      &.deposit {
        color: ${theme.color.green};
      }
    }
  }
`;
