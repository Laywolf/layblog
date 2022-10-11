// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string
}

const hello = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({ name: 'Kanata Hanayuki' })
}

export default hello
