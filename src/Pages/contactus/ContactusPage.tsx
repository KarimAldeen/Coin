
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetContactus} from '../../api/contactus'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditContactusModal from './EditContactusModal'
import AddContactusModal from './AddContactusModal'

function ContactusPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetContactus()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'Contactus'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
      />
      
      <EditContactusModal />
      <AddContactusModal />
      
    </DashBody>
  )
}

export default ContactusPage

