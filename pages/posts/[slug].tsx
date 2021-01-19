import fs from 'fs'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

import { useRouter } from 'next/router'

import markdownToHtml from '../../lib/markdownToHtml'
import styles from '../../styles/Post.module.css'

import getPost from '../../lib/getPost'
import PostBody from '../../components/post-body'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import getAllPosts from '../../lib/getAllPosts'
import Navbar from '../../components/Navbar'
import getDate from '../../lib/getDate'



export default function Post({ post, renderedContent }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <Navbar />
            <div className={styles.postWrap}>
                <h1 className={styles.postTitle}>{post.title}</h1>
                <h2>{post.subheading}</h2>
                <p className={styles.date}>{getDate(post.date)}</p>
                <PostBody content={renderedContent} />
            </div> 
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