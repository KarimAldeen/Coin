

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormSliders from './FormSliders'
import { useAddSliders } from '../../api/sliders'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddSlidersModal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddSliders()
  const handelSubmit = (values:any )=>{
      console.log(values);
      
    const dataToSend = getDataToSend(values)

    mutate(dataToSend)
    // Submit Value
  }
  return (
    <LayoutModal
    
     isAddModal={true}
     getInitialValues={getInitialValues()} 
     handleSubmit={handelSubmit} 
     status={status as QueryStatusEnum}
     headerText={t('Add') +t('sliders')}
     
     getValidationSchema={getValidationSchema()}>

    <FormSliders />
  </LayoutModal>
  )
}

export default AddSlidersModal

