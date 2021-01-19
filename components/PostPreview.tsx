import styles from '../styles/PostPreview.module.css'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import getDate from '../lib/getDate'

import { Post } from '../lib/getPost'

export default function PostPreview({ post }: {post: Post}) {


    
    return (
        <div className={styles.postPreview}>
        {/*TODO How to get type attached to post*/}
            <h3>{post.title}</h3>
            <h4 className={styles.postSubheading}>{post.subheading}</h4>
            <p className={styles.postDate}>{getDate(post.date)}</p>
            <p className={styles.postContentPreview}>{`${post.contentPreview}...`}</p>
            <Link href={`/posts/${post.slug}`}><a className={styles.readMoreBtn}>Read More</a></Link>
        </div>
    )
}

