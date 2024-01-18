import React, { useMemo } from "react";

import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { useTranslation } from "react-i18next";
import { useDeleteSliders, useUpdateSliderStatus } from "../../api/sliders";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import Actions from "../../Components/Ui/tables/Actions";

const useTableColumns = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteSliders();
  const toggleMutation = useUpdateSliderStatus();
  return useMemo(
    () => [

      {
        name: t("image_en"),
        sortable: false,
        center: true,
        selector: "slider_image",
        cell: (row:any) => (
          <ColumnsImage  src={row?.slider_translations.find((translate:any) => translate.locale == '1')?.image}  />
        ),
      },
      
      {
        name: t("image_ar"),
        sortable: false,
        center: true,
        selector: "slider_image",
        cell: (row:any) => (
          <ColumnsImage  src={row?.slider_translations.find((translate:any) => translate.locale == '2')?.image}  />
        ),
      },
      {
        name: t("status"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          <ToggleStatus  object={row} toggleMutation={toggleMutation} />
        ),
      },
     
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
            <Actions

            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=>{}}
              objectToEdit={row}
              showEdit={true}
              showView={false}
              onDelete={() => deleteMutation.mutate({ id: row.id })}
              />
        ),
      },
    ],
    [t, deleteMutation, toggleMutation]
  );
};

export default useTableColumns;
