import styled from "styled-components";

export const StyledTable = styled.table`
  width: 1077px;
  height: 540px;
  background: #ffffff;
  margin-top: 15px;
  border-collapse: collapse;
  text-align: center;
  box-shadow: 0px 4px 27px rgba(230, 231, 234, 0.78);
  transition-duration: 0.5s;
  thead {
    background-color: #474955;
    height: 54px;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 137.69%;
    

    color: #ffffff;
  }
  div{
    display: flex;
    cursor: pointer;
    justify-content: space-around ;
    align-items: center ;
    padding: 0px 10px;
    transition-duration: 0.3s;
    &:hover{
      
      color: #7EBC3C;
    }
  }
  tbody {
    td {
      padding: 11px;
      border: 1px solid #e3e6ec;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 137.69%;
      color: #474955;
    }
  }
`;
