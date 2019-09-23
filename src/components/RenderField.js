import { Dropdown } from 'semantic-ui-react'
import React from 'react'
const RenderField = ({
  input,
  label,
  meta: { touched, error },
  options,
  disabled,
  value,
  ...custom,
}) => {
  // console.log('input', input.value)
  return  <div>
      <Dropdown
        disabled={disabled}
        selection
        {...input}
        {...custom}
        onChange={(_, data) => {
          input.onChange(data.value)
        }}
        options={options}
        placeholder={label}
        error={!!touched && !!error}
        
      />
      {touched &&
        ((error && <span style={{ color: 'red' }}> {error}</span>))}
    </div>
}

  export default RenderField