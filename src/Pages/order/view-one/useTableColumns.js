import React from 'react'
import { useTranslation } from 'react-i18next';
import ColumnsImage from '../../../Components/Columns/ColumnsImage';
import { mapTranslatedProperties } from '../../../utils/language/mapTranslatedProperties';
export default function useTableColumns() {
    const [t] = useTranslation();
    return  [
        {   
            name: t("id"),
            sortable: true, 
            center: true,
            cell:(row) => row.id
            
        },
        {
            name: `${t('name')}`,
            sortable: true,
            center: true,
            cell: (row) => mapTranslatedProperties(
                row.product_translations,
                "name",
                '1'
            )
        },

        {
            name: `${t("image")}`,
            sortable: false,
            center: true,
            cell: (row) => {
                const imgSource = row?.product_main_image
                return (
                   <ColumnsImage 
                    src={imgSource}

                   />
                );
            },
        },
      

        {
            name: t("product_quantity"),
            sortable: true,
            center: true,
            cell:(row)=>row?.product_quantity
            
        },

        {
            name: t("price"),
            sortable: true,
            center: true,
            cell: (row) => <>

                {
                    row.product_price_after_discount ? <div className='d-flex' style={{gap:"10px"}}>



                        <p>{row.product_price_after_discount}</p>
                        <p style={{ color: "red", textDecoration: "line-through" }}>{row.product_price}</p>
                    </div>
                        : <p >{row.product_price}</p>
                }
            </>

        },


    ]
}
