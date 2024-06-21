import Background from '@components/background'
import Main from '@components/main'
import { PostBody } from '@components/mdx/postBody'
import PFP from '@components/pfp'

export default async function Page() {
	const README = await (
		await fetch(
			'https://raw.githubusercontent.com/iivusly/iivusly/main/README.md'
		)
	).text()

	return (
		<>
			<Main>
				<PFP src={'https://github.com/iivusly.png'} />
				<PostBody>{README}</PostBody>
			</Main>
			<Background />
		</>
	)
}
