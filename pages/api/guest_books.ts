import { Prisma } from '@prisma/client'
import prisma from 'lib/prisma'

import type { NextApiRequest, NextApiResponse } from 'next'

interface NextApiRequestForGuestBook extends NextApiRequest {
  body: Prisma.GuestBookGetPayload<true>
}

interface Result {
  success: boolean
  message: string | Record<string, unknown>
}

const guestBook = async (
  req: NextApiRequestForGuestBook,
  res: NextApiResponse<Result>,
): Promise<void> => {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json({ success: false, message: 'Only POST requests allowed' })
    return
  }

  const guestBook = req.body

  try {
    await prisma.guestBook.create({
      data: guestBook,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error occured while adding a new GuestBook.',
    })
    return
  }

  res.status(200).json({ success: true, message: guestBook })
}

export default guestBook
