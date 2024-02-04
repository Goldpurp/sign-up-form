import styled from "styled-components";
import { FontAwesomeIcon as DoneIcon } from "@fortawesome/react-fontawesome";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: rgba(0,0,0,0.8);

`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: fit-content;
  height: fit-content;
  background-color: #F5F5F5;
  border-radius: 10px;
  padding: 20px;
  border: 5px solid #DDDDDD;

  @media (max-width: 320px) {
    padding: 3px;
}
`;

export const FontAwesomeIcon = styled(DoneIcon)`
  color: #12B823;
  font-size: 80px;
  margin: none;

  @media (max-width: 570px) {
    font-size: 40px;
}
`;

export const Btn = styled.button`
 background-color: #12B823;
 color: white;
 width: 150px;
 padding: 7px;
 font-size: 20px;
 font-weight: 900;
 border: 1px solid #DDDDDD;
 border-radius: 5px;
 
 &:hover {
   cursor: pointer;
   background-color: #65B749;
  }

 
`;

export const SubmitNote = styled.p`
 font-size: 20px;
 font-weight: 900;

 @media (max-width: 570px) {
    font-size: 15px;
}
`;

export const DecisionNote = styled.p`
 font-size: 15px;
 font-weight: 100;

 @media (max-width: 570px) {
    font-size: 10px;
}
`;

