import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {Container, ModalContainer, FontAwesomeIcon, Btn, SubmitNote, DecisionNote} from "./Modal.styled"




export function Modal({isClose, onClick}:{isClose:boolean, onClick: ()=>void}) {

if(isClose){
    return null
}

  return (
    <Container>

    <ModalContainer>

      <FontAwesomeIcon icon={faCheck} />
      <h2>Thank You!</h2>
      <SubmitNote>Your application was successfully submitted.</SubmitNote>
      <DecisionNote>We'll contact you when decision is made.</DecisionNote>

      <Btn onClick={onClick}>OK</Btn>
    </ModalContainer>



    </Container>
  );
}
