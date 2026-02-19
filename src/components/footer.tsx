"use client";

import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: relative;

  height: 5rem;
  margin: 2rem calc(0px - (50vw - 50%)) -2rem;
  padding: 2rem 1.5rem;

  background-color: ${(props) => props.theme.background.soft};
  color: ${(props) => props.theme.foreground.faded};

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    z-index: 1;
    background-color: ${(props) => props.theme.foreground.faded};
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        &#xA9; {process.env.COMMIT_YEAR} iivusly -{" "}
        <Link
          href={`https://github.com/iivusly/iivusly.github.io/commit/${process.env.GIT_HASH}`}
        >
          {process.env.GIT_HASH ? process.env.GIT_HASH.slice(0, 7) : ""}
        </Link>
      </p>
    </FooterContainer>
  );
}
