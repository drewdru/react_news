import React from "react";
import { HeaderLogo } from "./styled";

export const Logo: React.FC = () => {
  const src = (
    process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_IMAGE_PREFIX}icons/logo.svg`
    : "/icons/logo.svg"
  )
  return <HeaderLogo src={src} alt="logo" />;
};
