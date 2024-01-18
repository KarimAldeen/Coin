
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetContactus} from '../../api/contactus'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditContactusModal from './EditContactusModal'

function ContactusPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetContactus()
  console.log(data);
  
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader  showAddButton={false} title={'Contactus'}></DashHeader>
      
      <LyTable
        data={data?.data}
        total={data?.pagination?.total}
        is_pagination={true}
        isLoading={false}
        columns={column}
      />
      
      <EditContactusModal />
      
    </DashBody>
  )
}

export default ContactusPage

