import React, { useRef } from 'react'
import { CancelOrderRafeeq, useGetSingleOrder } from 'api/orders';
import { useParams } from 'react-router-dom';
import Error404 from 'views/pages/misc/error/404';
import SpinnerComponent from 'components/@vuexy/spinner/Fallback-spinner';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle } from 'reactstrap';
import {  useBackendLanguageCode, useTranslation } from 'utility/language';
import StatusActionController from 'components/StatusActionController';
import OrderForm from './OrderForm';
import { history } from "../../../../history";
import DataTable from 'react-data-table-component';
import useTableColumns from './useTableColumns';
import { TableSpinner } from 'views/components/TableSpinner';



import { LoadingButton } from 'components/input';



export default function Order() {
    const { id } = useParams();
    const t = useTranslation();

   

    
    const deletorder = CancelOrderRafeeq()
    const { data, isLoading, notFound } = useGetSingleOrder({order_id: id })

   
    const order = data || {};

    const columns = useTableColumns();
    const items = order?.items || [];




    
    if (isLoading) {
        return (<SpinnerComponent />)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>

                    <p>{t("order_code")} : {order?.order_code}</p>
                </CardTitle>

              <span style={{display:"flex" , height:37, marginRight:7, }}>
         
                <Button
                    onClick={() => history.goBack()}
                    color="danger"
                >
                    {t("back")}
                </Button>
              </span>
                

            </CardHeader>
            <div style={{padding:"1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}>

  
                <StatusActionController order_status={order.order_status} order_id={order.id} />
            

          <div>
   
          </div>
            </div>


      



            <CardBody style={{padding:"0rem 1.5rem"}}>

                <OrderForm order={order} />
                <DataTable
                    columns={columns}
                    data={JSON.parse(items)}
                    progressPending={isLoading}
                    progressComponent={<TableSpinner />}
                    noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
                    noHeader
                
                />

            </CardBody>
   
        </Card>


    )
}
