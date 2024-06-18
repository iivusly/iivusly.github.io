'use client'

import Markdown from 'react-markdown'
import styled from 'styled-components'

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: red;
	border-radius: 1rem;
	margin: 2.5% 10%;
	padding: 1rem;
`

const PFP = styled.img`
	border-radius: 50%;
	width: 5rem;
	height: 5rem;
`

export default async function Page() {
	const README = await (
		await fetch(
			'https://raw.githubusercontent.com/iivusly/iivusly/main/README.md'
		)
	).text()

	return (
		<Main>
			<PFP src={'https://github.com/iivusly.png'} />
			<h1>Hello</h1>
			<div className={'markdown-body'}>
				<Markdown>{README}</Markdown>
			</div>
		</Main>
	)
}
