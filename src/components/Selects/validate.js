const validate = (values, props) => {
  // console.log('values', values);
  
  const errors = {}
  if (!values.ti1 || values.ti1 === 'None') {
    errors.ti1 = 'Required'
  }
  if (values.ti1 && values.ti1 !== 'None' && (!values.ti2 || values.ti2 === 'None')) {
    errors.ti2 = 'Required'
  }

  if (values.ti2 && values.ti2 !== 'None' && (!values.ti3 || values.ti1 === 'None')) {
    errors.ti3 = 'Required'
  }

  return errors
}

export default validate