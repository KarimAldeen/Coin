
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import { getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import FormPartner from './FormPartner'

function EditPartnerModal() {
  const {objectToEdit} = usePageState()

  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>

      <FormPartner />
    </LayoutModal>
  )
}

export default EditPartnerModal
