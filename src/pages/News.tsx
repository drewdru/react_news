import React from "react";
import { MainContainer, NewsCards } from "components"

const News: React.FC = () => {
  return (
    <MainContainer>
      <h1>RSS Feed</h1>
      <NewsCards />
    </MainContainer>
  );
};

export default News;
