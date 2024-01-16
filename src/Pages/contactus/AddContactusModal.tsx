

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormContactus from './FormContactus'
import { useAddContactus } from '../../api/contactus'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddContactusModal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddContactus()
  const handelSubmit = (values:any )=>{

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
     headerText={t('Add') +t('contactus')}
     
     getValidationSchema={getValidationSchema()}>

    <FormContactus />
  </LayoutModal>
  )
}

export default AddContactusModal

