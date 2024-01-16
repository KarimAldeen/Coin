
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { HovarableImage } from "../../Components/Ui";
import { BaseURL } from "../../api/config";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import { useDeleteSocialMedia, useUpdateSocialMediaStatus } from "../../api/socialMedia";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
import { Switch } from "antd";


const useTableColumns :any = () => {
  const [t] = useTranslation();
  const toggleMutation = useUpdateSocialMediaStatus();
  const deleteMutation = useDeleteSocialMedia();
  const handleChange = (row:any)=> {
    const status = row?.is_active == '1' ? false  : true;  

    toggleMutation.mutate({id:row?.id,new_status:status})
      
  }

  return useMemo(
    () => [
 
      {
        name: t("image"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.social_media_image} />
          )
        }
      },
      {
        name: t("link"),
        center: "true",
        cell: (row: any) => row?.social_media_link
      },
      {
        name: t("sort"),
        center: "true",
        cell: (row: any) => row?.social_media_sort
      },
      
      {
        name: t("status"),
        center: "true",
        cell: (row:any) => {
          console.log(row?.is_active);
          
          if(toggleMutation?.isLoading && row?.is_active == '0'){
            return <LoadingSpinner />  
          }
          return (
            <div>
              <p style={{margin:"0"}}>{t('pending')}</p>
                <label>
                  <Switch onChange={()=>handleChange(row)} checked={row?.is_active == '1'} />
                </label>
            </div>
          )
          
        },
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
              objectToEdit={row}
              showEdit={true}
              showView={false}
              onDelete={() => deleteMutation.mutate({ id: row.id })}
              />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

