import React from "react";
import { CardProps } from "react-bootstrap";
import { Card as BaseCard } from "./styled"

export type ICard = CardProps;

export const ShadowCard: React.FC<ICard> = ({ ...rest }) => {
  return <BaseCard {...rest} />;
};
