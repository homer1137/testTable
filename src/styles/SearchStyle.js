import styled from 'styled-components'
import { IoCloseSharp } from "react-icons/io5";

export const SearchStyle = styled.div`

width: 631px;
height: 52px;
left: 226px;
top: 209px;
background: #5A5C66;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 137.69%;
color: #B3B7BF;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 26px;
padding-right: 15px;


`
export const InputStyele=styled.input.attrs({
    type: "search",
    placeholder: "Поиск",
  })`
    
    border: none;
    outline: none;
    background-color: #5A5C66 ;
    width: 90%;
    color: white;
    &::-webkit-search-cancel-button {
        
  cursor: pointer;

  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  
  background: url('https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times.svg') no-repeat 50% 50%;
  background-color: white;
  background-size: contain;
  
}
   
    cursor: 'pointer';
    border-radius: 0.1rem ;
    &:focus {
        color: white;   
        border: 2px solid white;
        line-height: 25px;
    }
  `;