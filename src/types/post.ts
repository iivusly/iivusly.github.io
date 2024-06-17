export default interface Post {
    data: PostData,
    content: string,
    slug: string
}

export interface PostData {
    published?: boolean
}