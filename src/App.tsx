import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import styled from 'styled-components'

const Main = styled.div`
	text-align: center;
	background-color: rgb(40, 40, 40);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
`

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;

  // Styling
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 1rem 2rem 0 rgba(38, 38, 38, 0.25);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  display: flex;
  align-items: center;
  padding: 0.25rem;
`

const Link = styled.a`
  transition: top 0.5s;
  position: relative;
  color: white;
  :hover {
    top: -0.05rem;
  }
`

const GlassButton = styled.button`
  transition: all 0.25s;

  height: 3rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0.5rem 2rem 0 rgba(219, 219, 219, 0.25);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;

  color: white;
  
  :hover {
    box-shadow: 0 1rem 3rem 0 rgba(219, 219, 219, 0.5);
  }

  :active {
    transform: translateY(0.25rem);
  }
`

function App() {
	return (
		<Main>
      <h1>Hi, I'm <i>iivusly</i></h1>
      <p>This website is WIP</p>
      <form action="https://github.com/iivusly">
        <GlassButton>My GitHub</GlassButton>
      </form>
		</Main>
	)
}

export default App
