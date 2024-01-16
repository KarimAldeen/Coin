
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormAds from './FormAds'
import { getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'

function EditAdsModal() {
  const {objectToEdit} = usePageState()
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormAds />
    </LayoutModal>
  )
}

export default EditAdsModal
