import React from "react";
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const LangSwitch: React.FC = ({ ...rest }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("language", lang);
  };

  return (
    <ButtonGroup aria-label="Language Switch">
      <Button variant={i18n.language === "ru" ? "success" : "light"} onClick={() => changeLanguage("ru")}>🇷🇺 Русский</Button>
      <Button data-testid="ru-btn" variant={i18n.language === "en" ? "success" : "light"} onClick={() => changeLanguage("en")}>🇺🇸 English</Button>
    </ButtonGroup>
  );
};
