import { Field, reduxForm } from 'redux-form'
import React, { useEffect } from 'react'
import { getItemsByTableId, getSectionsToReset } from '../../store/selectors/selects'

import RenderField from '../RenderField'
import { connect } from 'react-redux'
import { rootSelectSetSelected } from '../../store/actions'
import validate from './validate'

let Selects = props => {
  const {
    handleSubmit,
    submitting,
    roootSelectOptons,
    secondSelectOptons,
    thirdSelectOptons,
    rootSelectSetSelected,
    resetSection,
    getSectionsToReset
  } = props
  useEffect(() => {
    getSectionsToReset.length && resetSection(...getSectionsToReset)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSectionsToReset])

  return (
    <form onSubmit={handleSubmit}>
      <Field
        onChange={(v) => {
          rootSelectSetSelected(v, 'ti1')
        }}
        name="ti1"
        options={roootSelectOptons}
        component={RenderField}
      />
      <br />
      <Field
        disabled={!secondSelectOptons.length}
        onChange={(v) => {
          rootSelectSetSelected(v, 'ti2')
        }}
        name="ti2"
        options={secondSelectOptons}
        component={RenderField}
      />
      <br />
      <Field
        disabled={!thirdSelectOptons.length}
        onChange={(v) => {
          rootSelectSetSelected(v, 'ti3')
        }}
        name="ti3"
        options={thirdSelectOptons}
        component={RenderField}
      />
      <br />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

Selects = reduxForm({
  form: 'selects',
  validate,
})(Selects)

const mapStateToProps = (state) => {
  return {
    roootSelectOptons: getItemsByTableId(state, 'ti1'),
    secondSelectOptons: getItemsByTableId(state, 'ti2'),
    thirdSelectOptons: getItemsByTableId(state, 'ti3'),
    getSectionsToReset: getSectionsToReset(state)
  }
}

const mapDispathToProps = (dispatch, props) => {
  return {
    rootSelectSetSelected: (value, id) => dispatch(rootSelectSetSelected(value, id))
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Selects)