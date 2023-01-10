import MuiTextField, { TextFieldProps } from '@mui/material/TextField'
import { useCallback } from 'react'

import {
  Control,
  Controller,
  UseControllerProps,
  UseControllerReturn,
} from 'react-hook-form'

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  rules?: UseControllerProps['rules']
  [x: string]: unknown
}

const TextField: React.FC<IProps & TextFieldProps> = (props) => {
  const { control, rules, ...textFieldProps } = props

  const handleRender = useCallback(
    ({
      field: { value, onChange },
      fieldState: { error },
      formState,
    }: UseControllerReturn) => (
      <MuiTextField
        {...textFieldProps}
        value={value}
        onChange={onChange}
        error={error !== undefined}
        helperText={error?.message}
      />
    ),
    [textFieldProps],
  )

  return (
    <Controller
      name={textFieldProps.id as string}
      rules={rules}
      control={control}
      render={handleRender}
    />
  )
}

export default TextField
