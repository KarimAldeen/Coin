import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import { history } from "../../../history";
import { GrView } from "react-icons/gr";
import OrderStatus from "components/OrderStatus";
import Actions from "components/table/TableActions";
import { useDeleteOrder } from "api/orders";

const useTableColumns = (status) => {
  const t = useTranslation();

  const deleteMutation = useDeleteOrder()
   
    let column =  [
      {
        name: t("order_code"),
        sortable: false,
        center:true,
        selector:(row) => row?.order_code,
      },
      {
        name: t("customer_name"),
        sortable: false,
        center:true,
        selector:(row) => row?.customer?.full_name,
      },
    
      {
        name: t("customer_phone"),
        sortable: false,
        center:true,
        selector:(row) => row?.customer?.phone,
      },
      {
        name: t("status"),
        center: true,
        
        cell:(row)=>{


          return <OrderStatus  order_status={row?.order_status}/>

        }
      },
      {
        name: t("payment_method"),
        selector: "payment_method",
        center: true,
        cell:(row)=>{
          return t(row?.payment_method)
        }
      },
      {
        name: t("price"),
        center: true,
        cell:(row)=>{
          return (row?.order_total)
        }
      },

      
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) =>{ 
         
          return (
         <span style={{display:"flex" , alignItems:"center" , justifyContent:"space-around" , width:"100px" }}>
           <GrView
            onClick={()=>history.push(`/order/${row?.id}`)}
            size={22}
            style={{ cursor: "pointer" }}
          />
            <Actions
                showDelete={true}
                onDelete={() => deleteMutation.mutate({id:row.id })}  
                showEdit={false}
            />

         </span>
        )},
      },

     
    
    
    ]


  
        
    
    return column 

};

export default useTableColumns;
