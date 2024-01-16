

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormAds from './FormAds'
import { useAddAds } from '../../api/ads'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddAdsModal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddAds()
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
     headerText={t('Add') +t('ads')}
     
     getValidationSchema={getValidationSchema()}>

    <FormAds />
  </LayoutModal>
  )
}

export default AddAdsModal

