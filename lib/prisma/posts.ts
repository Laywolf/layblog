import { Prisma } from '@prisma/client'
import prisma from 'lib/prisma'

type TPost = Prisma.PostGetPayload<true>

interface IPost {
  id: number
  author: string
  title: string
  date: Date
  content: string
  [x: string]: unknown
}

export const addPost = async (post: TPost): Promise<void> => {
  post.published = true

  await prisma.post.create({
    data: post,
  })
}

export const getPosts = async (page?: number): Promise<IPost[]> => {
  console.log('fetching posts...')
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
  console.log('fetching posts finished.')
  return posts
}

export const getPostCount = async (): Promise<number> => {
  return await prisma.post.count()
}

export const getPost = async (pid: number): Promise<TPost> => {
  const post = await prisma.post.findFirstOrThrow({
    where: {
      id: pid,
      published: true,
    },
  })
  return post
}
