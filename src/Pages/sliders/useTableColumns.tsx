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
        name: t("image"),
        sortable: false,
        center: true,
        selector: "slider_image",
        cell: (row:any) => (
          <ColumnsImage  src={row?.slider_image}  />
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
        name: t("is_ads"),
        center: true,
        cell: (row:any) => (
         <>{row?.is_ads + ''}</>
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
