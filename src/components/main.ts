'use client'

import styled from 'styled-components'

export const Breakpoint = 800

const Main = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-self: center;
	flex-direction: column;
	border-radius: 1rem;
	margin: 2.5% 10%;
	padding: 1rem;
	word-wrap: break-word;

	background: rgba(0, 0, 0, 0.5);
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
	backdrop-filter: blur(10rem);

	@media (max-width: ${Breakpoint}px) {
		position: absolute;
		margin: 0;
		top: 0;
		left: 0;
		width: 100vw;
		padding: 0.5rem;
		box-shadow: none;
		border-radius: 0;
		overflow-x: hidden;

		* > * {
			transform: scale(0.9);
		}
	}
`

export default Main
