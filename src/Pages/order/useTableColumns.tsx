import React, { useMemo } from "react";
// import { history } from "../../../history";
// import { GrView } from "react-icons/gr";
// import OrderStatus from "components/OrderStatus";
// import Actions from "components/table/TableActions";
import { useTranslation } from "react-i18next";
import { useDeleteOrder } from "../../api/order";
import { GrView } from "react-icons/gr";
import Actions from "../../Components/Ui/tables/Actions";
import { history } from "../../ProviderContainer";
import { useNavigate } from "react-router-dom";

const useTableColumns = () => {
  const [t] = useTranslation();
  const navigate = useNavigate()
  const deleteMutation = useDeleteOrder()
   
    let column =  [
      {
        name: t("order_code"),
        sortable: false,
        center:true,
        selector:(row:any) => row?.order_code,
      },
      {
        name: t("customer_name"),
        sortable: false,
        center:true,
        selector:(row:any) => row?.customer?.name,
      },
    
      {
        name: t("customer_phone"),
        sortable: false,
        center:true,
        selector:(row:any) => row?.customer?.phone,
      },
      {
        name: t("status"),
        center: true,
        
        cell:(row:any)=>{

          return row?.order_status;
          // return <OrderStatus  order_status={row?.order_status}/>

        }
      },
      {
        name: t("payment_method"),
        selector: "payment_method",
        center: true,
        cell:(row:any)=>{
          return t(row?.payment_method)
        }
      },
      {
        name: t("price"),
        center: true,
        cell:(row:any)=>{
          console.log(row);
          
          return (row?.order_total)
        }
      },
      {
        name: "#",
        center: true,
        cell: (row:any) =>
            <span style={{display:"flex" , alignItems:"center" , justifyContent:"space-around" , width:"100px" }}   >
          
            <Actions
            showDelete={true}
            objectToEdit={row}
            onDelete={() => deleteMutation.mutate({order_id:row.id })}  
            showEdit={false}
            onView={()=>navigate(`/order/${row?.id}` , {replace:true})}
            />
            
            </span>
          
          
      },

     
    
    
    ]


  
        
    
    return column 

};

export default useTableColumns;
