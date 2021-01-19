import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import getAllPosts from '../lib/getAllPosts'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import PostPreview from '../components/PostPreview'

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Taylor's blog
        </h1>
        
        {posts.map((post) => {
          return (<PostPreview post={post} />)
        })}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const posts = getAllPosts();

  console.log(posts);

  return {
    props: {
      posts
    }
  }
}