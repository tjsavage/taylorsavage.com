import fs from 'fs'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

import { useRouter } from 'next/router'

import markdownToHtml from '../../lib/markdownToHtml'

import getPost from '../../lib/getPost'
import PostBody from '../../components/post-body'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import getAllPosts from '../../lib/getAllPosts'



export default function Post({ post, renderedContent }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <h1>{post.title}</h1>
            <PostBody content={renderedContent} />
        </div>
    )
}

export const getStaticProps = async ({ params }) => {

    const post = getPost(params.slug as string)
    const renderedContent = await markdownToHtml(post.content)

    return {
        props: {
            post,
            renderedContent
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts()

    const paths = posts.map((post) => {
        return {
            params: {
                slug: post.slug
            }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}