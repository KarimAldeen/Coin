
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetSliders} from '../../api/sliders'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditSlidersModal from './EditSlidersModal'
import AddSlidersModal from './AddSlidersModal'

function SlidersPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetSliders()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'slider'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
      />
      
      <EditSlidersModal />
      <AddSlidersModal />
      
    </DashBody>
  )
}

export default SlidersPage

