import React from "react";
import useTableColumns from "./useTableColumns";
import DataTable from "react-data-table-component";
import "assets/scss/plugins/extensions/react-paginate.scss";
import { Card, CardBody } from "reactstrap";
import DashBody from "../../Layout/Dashboard/DashBody";
import DashHeader from "../../Layout/Dashboard/DashHeader";
import { QueryStatusEnum } from "../../config/QueryStatus";
import LyTable from "../../Layout/Dashboard/LyTable";
import { useTranslation } from "react-i18next";
import { useGetOrders } from "../../api/order";
const OrderPage = () => {
  const [t] = useTranslation();



  //filters
  const [search, setSearchText] = React.useState("");
 
  
  const filterIsApplied = search !== "";



  
  //Table Content -- Data + Columns
  const { data, isLoading , status  } = useGetOrders({search});
  const totalRows = data?.pagination?.total || 0;

  const columns = useTableColumns();

  return (
    <>
     <DashBody status={status as QueryStatusEnum} >
        <DashHeader title="orders" showAddButton={false}/>
        <LyTable
            data={data}
            total={totalRows}
            column={columns}
          is_pagination={true}

              
      />
     </DashBody>
     
    </>
  );
};

export default OrderPage;
