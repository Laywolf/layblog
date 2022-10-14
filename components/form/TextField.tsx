import MuiTextField, { TextFieldProps } from '@mui/material/TextField'

import { Control, Controller, UseControllerProps } from 'react-hook-form'

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  rules?: UseControllerProps['rules']
  [x: string]: unknown
}

const TextField: React.FC<IProps & TextFieldProps> = (props) => {
  const { control, rules, ...textFieldProps } = props

  return (
    <Controller
      name={textFieldProps.id as string}
      rules={rules}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <MuiTextField
          {...textFieldProps}
          value={value}
          onChange={onChange}
          error={error !== undefined}
          helperText={error?.message}
        />
      )}
    />
  )
}

export default TextField
