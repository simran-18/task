import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Link Component
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1976d2;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #1565c0;
    text-decoration: underline;
  }

  &.active {
    color:rgb(63, 129, 204);  // Active link color
  }
`;
