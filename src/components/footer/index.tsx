import React from "react";

export const Footer: React.FC = () => {
  const drewdru_logo_white = (
    process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_IMAGE_PREFIX}icons/drewdru_logo_white.svg`
    : "/icons/drewdru_logo_white.svg"
  )
  const github_icon = (
    process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_IMAGE_PREFIX}icons/github-icon.svg`
    : "/icons/github-icon.svg"
  )
  const linkedin_icon = (
    process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_IMAGE_PREFIX}icons/linkedin-icon.svg`
    : "/icons/linkedin-icon.svg"
  )
  return (
    <div className="text-center py-4" style={{ marginTop: "1rem", backgroundColor: "#282c34" }}>
      <a
        href="https://career.drewdru.com/"
        rel="noreferrer"
        target="_blank"
        className="d-block mb-3"
        data-testid="drewdru-logo"
      >
        <img
          src={drewdru_logo_white}
          alt="drewdru"
          width="30"
          height="30"
        />
        <strong className="fs-1 ml-1 text-white">Drew Dru</strong>
      </a>

      <ul
        className="d-flex justify-content-center list-unstyled p-0 m-0"
        data-testid="icons-container"
      >
        <li className="mx-2">
          <a
            href="https://github.com/drewdru"
            rel="noreferrer"
            target="_blank"
            className="d-block mb-3"
            data-testid="github-logo"
          >
            <img
              src={github_icon}
              alt="github"
              width="28"
              height="29"
            />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://www.linkedin.com/in/andrew-ovsyannikov-b97479169/"
            rel="noreferrer"
            target="_blank"
            className="d-block mb-3"
            data-testid="linkedin-logo"
          >
            <img
              src={linkedin_icon}
              alt="linkedin"
              width="28"
              height="32"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
