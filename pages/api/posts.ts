import { Prisma, PrismaClient } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'

type TPost = Prisma.PostGetPayload<true>

interface NextApiRequestForPost extends NextApiRequest {
  body: TPost
}

interface Result {
  success: boolean
  message: string | Record<string, unknown> | Array<Record<string, unknown>>
}

const prisma = new PrismaClient()

export const addPost = async (post: TPost): Promise<void> => {
  post.published = true
  post.date = new Date()

  await prisma.post.create({
    data: post,
  })
}

interface IPosts {
  id: number
  author: string
  title: string
  date: Date
  content: string
  [x: string]: unknown
}
export const getPosts = async (page?: number): Promise<IPosts[]> => {
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
      const posts = await getPosts()
      res.status(200).json({ success: true, message: posts })
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
