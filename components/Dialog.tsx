import MuiDialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import React from 'react'

interface IProps {
  id: string
  open: boolean
  onClose: (...args) => void
  title: string
  content: string
  ok?: string
  cancel?: string
}

const Dialog: React.FC<IProps> = (props) => {
  const { id, open, onClose, title, content, ok, cancel } = props

  const handleClose = (result: boolean) => {
    return (...args): void => {
      onClose(...args, result)
    }
  }

  const titleId = id + '-title'
  const descriptionId = id + '-description'

  return (
    <MuiDialog
      open={open}
      onClose={handleClose}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <DialogTitle id={titleId}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{<>{content}</>}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {cancel !== undefined ? (
          <Button onClick={handleClose(false)}>{cancel}</Button>
        ) : undefined}
        <Button onClick={handleClose(true)}>{ok ?? '확인'}</Button>
      </DialogActions>
    </MuiDialog>
  )
}

export default Dialog
