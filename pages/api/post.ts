import { Prisma, PrismaClient } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'

interface NextApiRequestForPost extends NextApiRequest {
  body: Prisma.PostGetPayload<true>
}

interface Result {
  success: boolean
  message: string | Record<string, unknown> | Array<Record<string, unknown>>
}

const prisma = new PrismaClient()

const Post = async (
  req: NextApiRequestForPost,
  res: NextApiResponse<Result>,
): Promise<void> => {
  if (req.method === 'POST') {
    const post = req.body
    post.published = true

    try {
      await prisma.post.create({
        data: post,
      })
      res.status(200).json({ success: true, message: post })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error occured while adding a new GuestBook.',
      })
    }
  } else if (req.method === 'GET') {
    const { pid } = req.query

    if (pid === 'all') {
      try {
        const posts = await prisma.post.findMany()
        res.status(200).json({ success: true, message: posts })
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error occured while adding a new GuestBook.',
        })
      }
    } else if (typeof pid === 'string') {
      try {
        const post = await prisma.post.findFirstOrThrow()
        res.status(200).json({ success: true, message: post })
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error occured while adding a new GuestBook.',
        })
      }
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' })
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' })
  }
}

export default Post
