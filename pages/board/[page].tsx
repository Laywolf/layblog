import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'

import ArticleIcon from '@mui/icons-material/Article'
import CreateIcon from '@mui/icons-material/Create'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import styles from 'styles/Common.module.css'
import { getPostCount, getPosts } from 'lib/prisma/posts'
// import { useRouter } from 'next/router'

interface IPost {
  id: number
  author: string
  title: string
  date: string
  content: string
}

const Post: React.FC<IPost> = (props) => {
  const { id, title, author, date, content } = props
  const [open, setOpen] = React.useState(false)
  // const router = useRouter()

  React.useEffect(() => {
    setOpen(false)
  }, [id])

  const handleClick = (): void => {
    setOpen(!open)
    // void (async () => await router.push('/board/view/' + id.toString()))()
  }

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          borderRadius: '8px',
          border: '1px solid lightgray',
          '& > :not(style)': { px: 1 },
        }}
      >
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText
          primary={id}
          sx={{ maxWidth: '80px', flexGrow: 0, minWidth: '24px' }}
        />
        <ListItemText
          primary={author}
          sx={{
            width: '120px',
            maxWidth: '120px',
            '& > :not(style)': {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            },
          }}
        />
        <ListItemText
          primary={title}
          sx={{
            '& > :not(style)': {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            },
          }}
        />
        <ListItemText
          sx={{ minWidth: '216px', textAlign: 'right' }}
          primary={date}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          sx={{ display: 'flex', mx: 1, border: '1px solid lightgray' }}
          component="div"
        >
          <ListItemText
            sx={{ px: 3, overflowWrap: 'break-word' }}
            primary={content}
          />
        </List>
      </Collapse>
    </>
  )
}

interface IProps {
  posts: IPost[]
  pages: number
}

const BoardPage: NextPage<IProps> = ({ posts, pages }) => {
  const router = useRouter()
  const handlePaginationClick = (_, page: number): void => {
    void (async () => await router.push(`/board/${page}`))()
  }

  return (
    <Container>
      <h1 className={styles.title}>게시판</h1>
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Link href="/board/create">
          <Button variant="contained" endIcon={<CreateIcon />}>
            작성
          </Button>
        </Link>
      </Box>
      <List
        sx={{
          width: '100%',
          minHeight: '516px',
          overflow: 'auto',
          bgcolor: 'background.paper',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          posts?.length > 0 ? undefined : (
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                width: '100%',
                padding: '160px 0',
                fontSize: '1.25rem',
                textAlign: 'center',
              }}
            >
              게시글이 존재하지 않습니다.
            </ListSubheader>
          )
        }
      >
        {posts?.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </List>
      <Pagination
        count={pages}
        color="primary"
        shape="rounded"
        sx={{ '& > :not(style)': { justifyContent: 'center' } }}
        onChange={handlePaginationClick}
      />
    </Container>
  )
}

export default BoardPage

export const getStaticProps: GetStaticProps = async (context) => {
  const page = context.params ? context.params.page : undefined
  if (typeof page !== 'string') throw Error()
  const posts = await getPosts(parseInt(page))
  const pages = Math.floor(((await getPostCount()) - 1) / 10) + 1

  return {
    props: {
      posts: posts.map(({ date, ...post }) => ({
        ...post,
        date: date.toLocaleDateString() + date.toLocaleTimeString(),
      })),
      pages,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.floor(((await getPostCount()) - 1) / 10) + 1
  return {
    fallback: true,
    paths: Array.from(Array(pages), (_, i) => ({
      params: {
        page: String(i + 1),
      },
    })),
  }
}
