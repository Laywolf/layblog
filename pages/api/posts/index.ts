import { Prisma } from '@prisma/client'
import { addPost, getPostCount, getPosts } from 'lib/prisma/posts'

import type { NextApiRequest, NextApiResponse } from 'next'

type TPost = Prisma.PostGetPayload<true>

interface NextApiRequestForPost extends NextApiRequest {
  body: TPost
}

interface Result {
  success: boolean
  message: string | Record<string, unknown> | Array<Record<string, unknown>>
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
