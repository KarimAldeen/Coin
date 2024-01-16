
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import AddProductsModal from './AddProducts'
import EditProducts from './EditProducts'
import { useGetProducts } from '../../api/owner_products'

function ProductsPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetProducts("")
    console.log(data);
    
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'social_media'}></DashHeader>
      
      <LyTable
        data={data?.data}
        isLoading={false}
        columns={column}
    />
      
    <AddProductsModal />
    <EditProducts/>
    </DashBody>
  )
}

export default ProductsPage

