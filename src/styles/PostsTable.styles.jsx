import styled from "styled-components";
import { Box, Paper, TextField, Select } from "@mui/material";

// Centered Container
export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: #f4f4f4;
`;

// Paper Wrapper with Fixed Size
export const StyledPaper = styled(Paper)`
  width: calc(100vw - 400px);
  height: 600px;
  padding: 24px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Filters Container
export const FiltersContainer = styled(Box)`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// Styled Search Input
export const SearchField = styled(TextField)`
  background-color: #f5f5f5;
  border-radius: 8px;
  flex: 1;
`;

// Styled Select Dropdown
export const StyledSelect = styled(Select)`
  width: 150px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

// Data Grid Wrapper
export const DataGridWrapper = styled(Box)`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// Loading Container
export const LoadingContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
