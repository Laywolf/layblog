import { zodResolver } from '@hookform/resolvers/zod'
import { Button, TextField } from '@mui/material'
import { Box, Container } from '@mui/system'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useForm } from 'react-hook-form'

import styles from 'styles/Common.module.css'
import { z } from 'zod'

const boardSchema = z.object({
  title: z.string().min(1, '제목을 입력해 주세요.').max(80),
  author: z.string().min(1, '작성자를 입력해 주세요.').max(20),
  content: z.string().min(1, '내용을 입력해 주세요.'),
})

type Board = z.infer<typeof boardSchema>

const CreateBoard: NextPage = () => {
  const router = useRouter()

  const defaultValues: Board = {
    title: '',
    author: '',
    content: '',
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(boardSchema),
  })

  const onSubmit = (...args): void => {
    console.log('hello?')
    void (async () => await handleSubmit(submit)(...args))()
  }

  const submit: SubmitHandler<Board> = (data) => {
    // 이거 왜 호출이 안되지?
    console.log(data)
  }

  const goBack = (): void => {
    void (async () => await router.push('/board'))()
  }

  return (
    <Container>
      <h1 className={styles.title}>글쓰기</h1>
      <p className={styles.description}>여러분의 글을 자유롭게 써주세요.</p>
      <Box
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={onSubmit}
        sx={{
          '& > :not(style)': { m: '8px 0', width: '100%' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            '& > :not(style)': { width: '100%' },
          }}
        >
          <TextField required autoFocus id="title" label="제목" />
          <TextField required id="author" label="작성자" defaultValue="익명" />
        </Box>
        <TextField required id="content" label="내용" multiline minRows={8} />
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'right',
          }}
        >
          <Button type="submit" variant="contained">
            등록하기
          </Button>
          <Button onClick={goBack} variant="outlined">
            취소하기
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default CreateBoard
