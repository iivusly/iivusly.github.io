import { PostBody } from '@components/mdx/postBody'
import { getPost, getPosts } from '@lib/get-posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const posts = await getPosts()
	return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await getPost(params.slug)

	if (!post) {
		return notFound()
	}

	return <PostBody>{post?.content}</PostBody>
}
