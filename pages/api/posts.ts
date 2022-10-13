import { Prisma } from '@prisma/client'
import prisma from 'lib/prisma'

import type { NextApiRequest, NextApiResponse } from 'next'

type TPost = Prisma.PostGetPayload<true>

interface IPost {
  id: number
  author: string
  title: string
  date: Date
  content: string
  [x: string]: unknown
}

interface NextApiRequestForPost extends NextApiRequest {
  body: TPost
}

interface Result {
  success: boolean
  message: string | Record<string, unknown> | Array<Record<string, unknown>>
}

export const addPost = async (post: TPost): Promise<void> => {
  post.published = true
  post.date = new Date()

  await prisma.post.create({
    data: post,
  })
}

export const getPosts = async (page?: number): Promise<IPost[]> => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      author: true,
      title: true,
      date: true,
      content: true,
    },
    where: {
      published: {
        equals: true,
      },
    },
    orderBy: {
      id: 'desc',
    },
    skip: page !== undefined ? (page - 1) * 10 : undefined,
    take: page !== undefined ? 10 : undefined,
  })
  return posts
}

export const getPostCount = async (): Promise<number> => {
  return await prisma.post.count()
}

const Post = async (
  req: NextApiRequestForPost,
  res: NextApiResponse<Result>,
): Promise<void> => {
  if (req.method === 'POST') {
    const post = req.body
    try {
      await addPost(post)
      res.status(200).json({ success: true, message: post })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error occured while adding a new Post.' + (error as string),
      })
    }
  } else if (req.method === 'GET') {
    try {
      console.log(req.query)
      const { page } = req.query
      const posts =
        typeof page === 'string'
          ? await getPosts(parseInt(page))
          : await getPosts()
      const pages = await getPostCount()
      res.status(200).json({ success: true, message: { posts, pages } })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error occured while reading Posts.',
      })
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' })
  }
}

export default Post
