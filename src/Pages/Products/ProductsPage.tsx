
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import AddProductsModal from './AddProducts'
import EditProducts from './EditProducts'
import { useGetProducts } from '../../api/owner_products'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import AddButton from '../../Layout/Dashboard/AddButton/AddButton'

function ProductsPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetProducts("")
    console.log(data);
    const [t] = useTranslation()
    const navigate = useNavigate()
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'products'}>
        <AddButton  onClick={()=>navigate('/products/add',{replace:true})}></AddButton>
      </DashHeader>
      
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

