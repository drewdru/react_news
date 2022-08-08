import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { Button } from "components";

export const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <Container>
        <h1 className="display-2 text-white">{t("home.ReactNewsApp")}</h1>
        <LinkContainer to="/news">
          <Button
            variant="primary"
            size="lg"
          >
            {t("home.GoToNews")}
          </Button>
        </LinkContainer>
      </Container>
    </div>
  );
};
