
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormSliders from './FormSliders'
import { getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'

function EditSlidersModal() {
  const {objectToEdit} = usePageState()
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     headerText='edit' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormSliders />
    </LayoutModal>
  )
}

export default EditSlidersModal
