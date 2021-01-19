import styles from '../styles/Post.module.css'

export default function PostBody({content}) {
    return (
        <div className={styles.content}>
            <div
                dangerouslySetInnerHTML={{ __html: content }}>
            </div>
        </div>
    )
}