import CreateIcon from '@mui/icons-material/Create'
import ClearIcon from '@mui/icons-material/Clear'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import { Box, Container } from '@mui/system'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

import styles from 'styles/Common.module.css'
import TextField from 'components/form/TextField'
import Dialog from 'components/Dialog'

interface Board {
  title: string
  author: string
  content: string
}

const defaultValues: Board = {
  title: '',
  author: '익명',
  content: '',
}

const helper = {
  title: '제목을 입력해 주세요.',
  author: '작성자명을 입력해 주세요.',
  content: '내용을 입력해 주세요.',
}

interface IDialog {
  title: string
  content: string
}

const defaultDialog = (error): IDialog => ({
  title: '네트워크 오류 발생',
  content: error,
})

const CreateBoard: NextPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialog, setDialog] = useState(defaultDialog(''))

  const { control, handleSubmit } = useForm({
    defaultValues,
  })

  const onSubmit = (...args): void => {
    void (async () => await handleSubmit(submit, undefined)(...args))()
  }

  const submit: SubmitHandler<Board> = async (data) => {
    setLoading(true)

    try {
      await axios.post('/api/post', data)
      goBack()
    } catch (error) {
      setDialog(defaultDialog(error.message))
      setDialogOpen(true)
      setLoading(false)
    }
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
          <TextField
            control={control}
            rules={{ required: helper.title }}
            autoFocus
            id="title"
            label="제목"
          />
          <TextField
            control={control}
            rules={{ required: helper.author }}
            id="author"
            label="작성자"
          />
        </Box>
        <TextField
          control={control}
          rules={{ required: helper.content }}
          id="content"
          label="내용"
          multiline
          minRows={8}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'right',
          }}
        >
          <Button onClick={goBack} variant="outlined" endIcon={<ClearIcon />}>
            취소
          </Button>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            endIcon={<CreateIcon />}
            loadingPosition="end"
          >
            등록
          </LoadingButton>
        </Box>
      </Box>
      <Dialog
        id="board-create"
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={dialog.title}
        content={dialog.content}
      />
    </Container>
  )
}

export default CreateBoard
