import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create'
import ClearIcon from '@mui/icons-material/Clear'
import LoadingButton from '@mui/lab/LoadingButton'
import Container from '@mui/material/Container'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import styles from 'styles/Common.module.css'
import TextField from 'components/form/TextField'
import Dialog from 'components/Dialog'

interface IPost {
  title: string
  author: string
  content: string
}

const defaultValues: IPost = {
  title: '',
  author: '익명',
  content: '',
}

const helper = {
  title: '제목을 입력해 주세요.',
  author: '작성자명을 입력해 주세요.',
  content: '내용을 입력해 주세요.',
  maxName: { value: 20, message: '20자 까지 작성할 수 있습니다.' },
  maxContent: { value: 180, message: '180자 까지 작성할 수 있습니다.' },
}

interface IDialog {
  title: string
  content: string
}

const defaultDialog = (error): IDialog => ({
  title: '네트워크 오류 발생',
  content: error,
})

/**
 * CreatePost NextPage Function
 */
const CreatePost: NextPage = () => {
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

  const submit: SubmitHandler<IPost> = async (data) => {
    setLoading(true)

    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) goBack()
        else throw Error(res.statusText)
      })
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
            rules={{ required: helper.title, maxLength: helper.maxName }}
            autoFocus
            id="title"
            label="제목"
          />
          <TextField
            control={control}
            rules={{ required: helper.author, maxLength: helper.maxName }}
            id="author"
            label="작성자"
          />
        </Box>
        <TextField
          control={control}
          rules={{ required: helper.content, maxLength: helper.maxContent }}
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

export default CreatePost
