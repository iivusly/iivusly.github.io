'use client'

import styled from 'styled-components'

export const Breakpoint = 800

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 1rem;
	margin: 2.5% 10%;
	padding: 1rem;

	background: rgba(0, 0, 0, 0.5);
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
	backdrop-filter: blur(10rem);

	@media (max-width: ${Breakpoint}px) {
		position: absolute;
		margin: 0;
		top: 0;
		left: 0;
		width: 100vw;
		border-radius: 0;
	}
`

export default Main
