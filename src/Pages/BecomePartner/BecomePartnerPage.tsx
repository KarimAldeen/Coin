import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useGetPartnerInfo } from '../../api/Partner'
import EditPartnerModal from './EditPartnerModal'

function BecomePartnerPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetPartnerInfo()

    console.log(data);
  
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader  showAddButton={false} title={'BecomePartner'}></DashHeader>

      <LyTable
        data={data?.data}
        total={data?.pagination?.total}
        is_pagination={true}
        isLoading={false}
        columns={column}
      />

      <EditPartnerModal />

    </DashBody>
  )
}

export default BecomePartnerPage

