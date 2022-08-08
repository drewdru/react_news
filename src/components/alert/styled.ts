import styled from "styled-components/macro";
import { Alert as BaseAlert } from "react-bootstrap";

export const Alert = styled(BaseAlert)`
animation-name: apear;
animation-duration: 1s;
animation-fill-mode: forwards;

@keyframes apear {
  0%{
    opacity: 0;
    transform: rotateX(90deg);
  }
  100%{
    opacity: 1;
    transform: rotateX(0deg);
  }
}
`;
