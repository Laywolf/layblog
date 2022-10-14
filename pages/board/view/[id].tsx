import { GetStaticPaths, GetStaticProps } from 'next'
import { Box, Button, Grid, Typography } from '@mui/material'

import Link from 'next/link'
import { ArrowBackIosNew } from '@mui/icons-material'
import { getPost, getPosts } from 'lib/prisma/posts'

interface IPost {
  title: string
  author: string
  date: string
  content: string
}

const Post: React.FC<IPost> = (props) => {
  const { title, author, date, content } = props

  return (
    <Box sx={{ width: '80vw' }}>
      <Grid container sx={{ display: 'flex' }}>
        <Grid item xs>
          <Typography gutterBottom variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Link href="/board">
            <Button variant="text" startIcon={<ArrowBackIosNew />}>
              목록
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Typography gutterBottom>{`${author} | ${date} `}</Typography>
      <Typography gutterBottom sx={{ overflowWrap: 'break-word' }}>
        {content}
      </Typography>
    </Box>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (params === undefined) throw Error('no param')
    if (typeof params.id !== 'string') throw Error('id is not string')

    const id = parseInt(params.id)
    if (isNaN(id)) throw Error()

    const post = await getPost(id)
    return {
      props: {
        ...post,
        date: post.date.toLocaleDateString() + post.date.toLocaleTimeString(),
      },
      revalidate: 10,
    }
  } catch (error) {
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  const paths = posts.map((post) => ({ params: { id: String(post.id) } }))
  return {
    fallback: true,
    paths,
  }
}
