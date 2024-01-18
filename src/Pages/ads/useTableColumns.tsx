
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { useDeleteAds } from "../../api/ads";


const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteAds();


  return useMemo(
    () => [
 
      {
        name: t("image_en"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.translations?.at(0)?.image} />
          )
        }
      },
      {
        name: t("image_ar"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.translations?.at(1)?.image} />
          )
        }
      },
     
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row:any) => (
            <Actions

            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=>{}}
              showView={false}
              objectToEdit={row}
              showEdit={true}
              // showDelete={false}
              onDelete={() => deleteMutation.mutate({ ads_id: row.id })}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

