import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw;  
  background-color: #f9f9f9; 

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    background: #ffffff;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    min-width: 400px; 
    max-width: 600px; 
    text-align: center;
  }

  h4 {
    font-weight: bold;
    color: #333;
    margin-bottom: 12px;
  }

  p {
    color: #666;
    font-size: 16px;
    margin-bottom: 16px;
  }

  .button-group {
    display: flex;
    gap: 12px;
  }
`;

export default BoxContainer;
