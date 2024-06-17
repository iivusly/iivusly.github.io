import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'
import { cache } from 'react'
import Post, { PostData } from '../types/post'

const POST_DIR = './src/blog/'

export const getPosts = cache(async () => {
	const posts = await fs.readdir(POST_DIR)

	const postsWithMetadata = await Promise.all(
		posts
			.filter(
				(file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
			)
			.map(async (file) => {
				const file_content = await fs.readFile(`${POST_DIR}${file}`, 'utf-8')
				const { data, content } = matter(file_content) as unknown as {
					data: PostData
					content: String
				}

				if (data.published === false) {
					return null
				}

				let slug = path.parse(file).name

				return { data, content, slug } as Post
			})
	)

	const filtered = postsWithMetadata.filter((post) => post !== null) as Post[]

	return filtered
})

export async function getPost(slug: string) {
	const posts = await getPosts()
	return posts.find((post) => post.slug === slug)
}
