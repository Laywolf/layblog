import { Button, TextField } from '@mui/material'
import { Box, Container } from '@mui/system'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import styles from 'styles/Common.module.css'

const CreateBoard: NextPage = () => {
  const router = useRouter()

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
        onSubmit={goBack}
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
          <TextField id="title" label="제목" />
          <TextField id="author" label="작성자" defaultValue="익명" />
        </Box>
        <TextField id="content" label="내용" multiline minRows={8} />
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
