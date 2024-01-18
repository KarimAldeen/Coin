
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetAds} from '../../api/ads'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditAdsModal from './EditAdsModal'
import AddAdsModal from './AddAdsModal'

function AdsPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetAds()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'ads'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
      />
      
      <EditAdsModal />
      <AddAdsModal />
      
    </DashBody>
  )
}

export default AdsPage

