import { Box, Button, Container } from '@mui/material'
import { Prisma } from '@prisma/client'
import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

import styles from 'styles/Common.module.css'

type Post = Prisma.PostGetPayload<true>

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const posts = await axios.get('/api/post/all')

  return {
    props: { posts },
  }
}

interface IProps {
  posts: Post[]
}

const Board: NextPage<IProps> = ({ posts }) => {
  return (
    <Container>
      <h1 className={styles.title}>글쓰기</h1>
      <p className={styles.description}>여러분의 글을 자유롭게 써주세요.</p>
      <Box
        sx={{
          '& > :not(style)': { m: '8px 0', width: '100%' },
        }}
      ></Box>
      <Link href="/board/create">
        <Button variant="contained">작성하기</Button>
      </Link>
    </Container>
  )
}

export default Board
