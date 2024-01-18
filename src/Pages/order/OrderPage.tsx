import React from "react";
import useTableColumns from "./useTableColumns";
import { Card, CardBody } from "reactstrap";
import DashBody from "../../Layout/Dashboard/DashBody";
import DashHeader from "../../Layout/Dashboard/DashHeader";
import { QueryStatusEnum } from "../../config/QueryStatus";
import LyTable from "../../Layout/Dashboard/LyTable";
import { useTranslation } from "react-i18next";
import { useGetOrders } from "../../api/order";
// import SearchField from "../../Components/Karimalden/View/SearchField";
const OrderPage = () => {
  const [t] = useTranslation();



  //filters
  const [search, setSearchText] = React.useState("");
 
  
  const filterIsApplied = search !== "";



  
  //Table Content -- Data + Columns
  const { data, isLoading , status  } = useGetOrders({search});
  console.log(data);
  
  const totalRows = data?.pagination?.total || 0;

  const columns = useTableColumns();

  return (
    <>
     <DashBody status={status as QueryStatusEnum} >
        <DashHeader title="orders" showAddButton={false}>
          {/* <SearchField/> */}
        </DashHeader>
        <LyTable
            data={data?.data}
            total={totalRows}
            column={columns}
          is_pagination={true}

              
      />
     </DashBody>
     
    </>
  );
};

export default OrderPage;
