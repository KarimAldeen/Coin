
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
      {
        name: t("image"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.product_image} />
          )
        }
      },
      {
        name: t("Name"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.name
      },
     
      {
        name: t("Price"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.price
      },
      {
        name: t("created_at"),
        sortable: false,
        center: "true",
        cell: (row:any) => {
          
          const inputDate = new Date(row?.created_at)
          console.log(inputDate);
          
           return   `${inputDate.getFullYear()}-${(inputDate.getMonth() + 1)}-${(inputDate.getDate())} ${(inputDate.getHours())}:${(inputDate.getMinutes())}:${(inputDate.getSeconds())}`;

        }
      },
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <Actions
            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=>{}}
              objectToEdit={row}
              showEdit={true}
              showView={false}
              showDelete={false}
              // showDelete={false}
              onDelete={() => fnDelete({ id: row.id })}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

