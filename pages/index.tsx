import { NextPage } from 'next'
import styles from 'styles/Common.module.css'

const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>
        ここは彼方花雪の
        <br />
        秘密箱です。
      </h1>

      <p className={styles.description}>
        彼方花雪(かなた はなゆき、카나타 하나유키) 라는 <br />
        VRC 유저의 개인 블로그 입니다.
      </p>

      <p className={styles.description}>好きな曲 &darr;</p>
      <div className={styles['video-anchor']}>
        <div className={styles['video-container']}>
          <iframe
            width="560"
            height="315"
            style={{ border: 0 }}
            src="https://www.youtube.com/embed/2b1IexhKPz4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Home
