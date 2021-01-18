import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import getAllPosts from '../lib/getAllPosts'
import styles from '../styles/Home.module.css'

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Taylor's blog
        </h1>
        {posts.map((post) => {
          return (<h3>{post.title}</h3>)
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