import React from "react";
import { AlertProps } from "react-bootstrap";
import { Alert as BaseAlert } from "./styled"

export type IAlert = AlertProps;

export const AnimatedAlert: React.FC<IAlert> = ({ ...rest }) => {
  return <BaseAlert {...rest} />;
};
