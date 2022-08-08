import React from "react";
import { ContainerProps } from "react-bootstrap";
import { Container as BaseContainer } from "./styled"

export type IContainer = ContainerProps;

export const MainContainer: React.FC<IContainer> = ({ ...rest }) => {
  return <BaseContainer {...rest} />;
};
