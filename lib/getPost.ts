import path from 'path'
import fs from 'fs'

import matter from 'gray-matter'

export type Post = {
    title: string,
    slug: string,
    date: string,
    content: string
}

export default function getPost(slug: string): Post {
    const postsDirectory = path.join(process.cwd(), '_posts')
    const postFilename = path.join(postsDirectory, `${slug}.md`)

    const fileContents = fs.readFileSync(postFilename, 'utf8')
    const {data, content} = matter(fileContents)

    console.log('getPost data.date', data.date);

    return {
        title: data.title,
        slug: slug,
        date: data.date.toString(),
        content: content
    }

}