import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon as ErrorIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  margin-top: 100px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 570px) {
    display: flex;
    justify-content: center;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormTemplate = styled.form`
  width: 450px;
  padding: 15px;
  height: 700px;
  background-color: white;
  border-radius: 0px 10px 10px 0px;

  @media (max-width: 570px) {
    width: 350px;
    height: 670px;
    border-radius: 10px;
  }

  @media (max-width: 821px) {
      width: 350px;
      height: 700px;
  }
`;

export const Img = styled.img`
  width: 450px;
  height: 700px;
  object-fit: cover;
  border-radius: 10px 0px 0px 10px;

  @media (max-width: 570px) {
    display: none;
  }

   @media (max-width: 821px) {
      width: 350px;
      height: 700px;
  }
`;

export const Header = styled.h1`
  padding: 10px;
  color: #2b3034;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  color: black;
  outline: none;
  font-size: 15px;
  border-radius: 5px;
  padding: 0 10px 0 35px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 570px) {
    width: 100%;
    height: 30px;
    font-size: 12px;
    border-radius: 5px;
    padding: 0 10px 0 30px;
  }
`;

export const FontAwesomeIcon = styled(Icon)`
  left: 25px;
  color: gray;
  position: relative;
`;

export const ErrorFontAwesomeIcon = styled(ErrorIcon)`
  color: #ef4444;
`;

export const Span = styled.span`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  ::-webkit-input-placeholder {
    color: #a1a6a0;
    text-align: start;
  }
`;

export const LabelSpan = styled.span`
  display: flex;
  color: #2b3034;
  font-size: 17px;
  align-items: center;
  margin: 20px 0px 5px 15px;
  justify-content: space-between;
`;

export const Btn = styled.button`
  height: 40px;
  width: 150px;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
  margin-left: 15px;
  border-radius: 7px;
  background-color: #2b3034;
`;

export const Terms = styled.div`
  padding: 15px;
  font-size: 15px;
`;

export const TermsLabel = styled.label`
  margin-left: 5px;
`;

export const Anchor = styled.a`
  color: #7277c5;
  margin-left: 5px;
  text-decoration: none;
`;

export const CheckBox = styled.input`
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

export const ErrorMsg = styled.p`
  margin: 0;
  color: #ef4444;
  font-size: 13px;
  padding: 3px 5px;
  font-weight: 100px;
  border-radius: 5px;
  text-align: center;
`;

