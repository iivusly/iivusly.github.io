"use client";

import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.background.soft};

  position: relative;
  padding: 0.5rem 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    justify-content: center;

    list-style-type: none;

    a {
      display: block;
      text-decoration: none;
      padding: 14px 16px;
      color: ${(props) => props.theme.foreground.highContrast};

      &:hover {
        background-color: ${(props) => props.theme.background.highlight};
      }
    }
  }
`;

export default function Header() {
  const directory = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <HeaderContainer>
      <h1>iivusly</h1>
      <Nav>
        <ul>
          {directory.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </Nav>
    </HeaderContainer>
  );
}
