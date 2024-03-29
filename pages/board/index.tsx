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

import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useCallback, useState, useEffect } from 'react'

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

/**
 * Post React Function Component
 */
const Post: FC<IPost> = (props) => {
  const { id, title, author, date, content } = props
  const [open, setOpen] = useState(false)
  // const router = useRouter()

  useEffect(() => {
    setOpen(false)
  }, [id])

  const handleClick = useCallback((): void => {
    setOpen(!open)
    // void (async () => await router.push('/board/view/' + id.toString()))()
  }, [open])

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          maxWidth: 'calc(100vw - 2rem)',
          borderRadius: '8px',
          border: '1px solid lightgray',
          '& > :not(style)': { px: 1 },
          '@media (max-width: 767px)': {
            px: 1,
            py: 0,
            '& > :not(style)': { px: 0 },
          },
        }}
      >
        <ListItemIcon
          sx={{
            '@media (max-width: 767px)': {
              minWidth: 0,
            },
            '@media (max-width: 319px)': {
              display: 'none',
            },
          }}
        >
          <ArticleIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary={id}
          sx={{ maxWidth: '80px', flexGrow: 0, minWidth: '24px' }}
        />
        <ListItemText
          primary={author}
          sx={{
            minWidth: '40px',
            maxWidth: '130px',
            '& > :not(style)': {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            },
            '@media (max-width: 767px)': { maxWidth: '15vw' },
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
          sx={{
            '@media (max-width: 767px)': {
              minWidth: '6.3rem',
              maxWidth: '6.3rem',
            },
            textAlign: 'right',
          }}
          primary={date}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mx: 1,
            border: '1px solid lightgray',
            borderTop: 'none',
            borderBottom: 'none',
            '&:last-child': {
              borderBottom: '1px solid lightgray',
            },
            '@media (max-width: 767px)': {
              py: 0,
            },
          }}
          component="div"
        >
          <ListItemText
            sx={{
              mx: 1,
              borderBottom: '1px solid black',
              '@media (min-width: 768px)': { display: 'none' },
              overflowWrap: 'break-word',
            }}
            primary={`${author}: ${title}`}
            primaryTypographyProps={{ style: { whiteSpace: 'pre-line' } }}
          />
          <ListItemText
            sx={{
              mx: 3,
              '@media (max-width: 767px)': { mx: 1, maxWidth: '76vw' },
              overflowWrap: 'break-word',
            }}
            primary={`${content}`}
            primaryTypographyProps={{ style: { whiteSpace: 'pre-line' } }}
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

/**
 * Board NextPage Function
 */
const BoardPage: NextPage<IProps> = ({ posts, pages }) => {
  const router = useRouter()

  const defaultPage = (): number => {
    const page = router.query.page
    if (typeof page !== 'string' || isNaN(parseInt(page))) return 1
    return parseInt(page)
  }
  const [page] = useState(defaultPage())

  const handlePaginationClick = useCallback(
    (_, page: number): void => {
      void (async () => await router.push(`?page=${page}`))()
    },
    [router],
  )

  return (
    <Container
      sx={{
        '@media (max-width: 767px)': {
          px: 0,
        },
      }}
    >
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
        {posts?.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </List>
      <Pagination
        defaultPage={page}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  // context.res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=1, stale-while-revalidate=59',
  // )

  const page = context.query.page ?? '1'
  if (typeof page !== 'string' || isNaN(parseInt(page))) throw Error()

  // const baseUrl = `http://${context.req.headers.host ?? ''}`

  // const res = await fetch(baseUrl + '/api/posts?page=' + page)
  // const data = await res.json()
  // const posts = data.message.posts
  // const pages = Math.floor((data.message.pages - 1) / 10) + 1

  const posts = await getPosts(parseInt(page))
  const pages = Math.floor(((await getPostCount()) - 1) / 10) + 1

  const toKRDate = (date): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return dateObj.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
  }

  return {
    props: {
      posts: posts.map(({ date, ...post }) => ({
        ...post,
        date: toKRDate(date),
      })),
      pages,
    },
  }
}
