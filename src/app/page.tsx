import Background from '@lib/components/background'
import Main from '@lib/components/main'
import { PostBody } from '@lib/components/mdx/postBody'
import PFP from '@lib/components/pfp'

export default async function AppPage() {
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
