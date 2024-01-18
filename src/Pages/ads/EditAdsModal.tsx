
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormAds from './FormAds'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useUpdateAds } from '../../api/ads'
import { QueryStatusEnum } from '../../config/QueryStatus'

function EditAdsModal() {
  const {objectToEdit} = usePageState()
  const {status , mutate  } = useUpdateAds();

  const handleSubmit = (value:any)=>{
    // console.log(value);

    const dataToSend = getDataToSend({...value})

    mutate(dataToSend)
    
}
  return (
    <LayoutModal 
     isAddModal={false}
     status={status as QueryStatusEnum}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={handleSubmit}
     headerText='edit' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      
      <FormAds />
    </LayoutModal>
  )
}

export default EditAdsModal
