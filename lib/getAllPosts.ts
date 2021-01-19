import path from 'path'
import fs from 'fs'
import getPost, { Post } from './getPost'

export default function getAllPosts(): Array<Post> {
    const postsDirectory = path.join(process.cwd(), '_posts')
    const filenames = fs.readdirSync(postsDirectory)

    const posts = filenames.map((filename) => {
        const slug = filename.replace('.md', '');
        return getPost(slug)
    })

    const sortedPosts = posts.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

    return sortedPosts
}