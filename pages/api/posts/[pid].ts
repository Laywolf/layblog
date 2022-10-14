import { Prisma } from '@prisma/client'
import { getPost } from 'lib/prisma/posts'

import type { NextApiRequest, NextApiResponse } from 'next'

type TPost = Prisma.PostGetPayload<true>

interface NextApiRequestForPost extends NextApiRequest {
  body: TPost
}

interface Result {
  success: boolean
  message: string | Record<string, unknown> | Array<Record<string, unknown>>
}

const PostId = async (
  req: NextApiRequestForPost,
  res: NextApiResponse<Result>,
): Promise<void> => {
  if (req.method === 'PUT') {
    // const post = req.body
    // post.published = true
    // try {
    //   await prisma.post.create({
    //     data: post,
    //   })
    //   res.status(200).json({ success: true, message: post })
    // } catch (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Error occured while adding a new GuestBook.',
    //   })
    // }
  } else if (req.method === 'GET') {
    const { pid } = req.query

    if (typeof pid === 'string') {
      try {
        const id = parseInt(pid)
        if (isNaN(id)) throw Error()

        const post = await getPost(id)
        res.status(200).json({ success: true, message: post })
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error occured while reading a Post.',
        })
      }
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' })
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' })
  }
}

export default PostId
