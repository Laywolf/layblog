import { Button } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'

const Board: NextPage = () => {
  return (
    <Link href="/board/create">
      <Button variant="contained">작성하기</Button>
    </Link>
  )
}

export default Board
