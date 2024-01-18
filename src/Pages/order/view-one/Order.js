import Reac  from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle } from 'reactstrap';
import OrderForm from './OrderForm';
import DataTable from 'react-data-table-component';
import useTableColumns from './useTableColumns';
import { useTranslation } from 'react-i18next';
import { useGetSingleOrder } from '../../../api/order';
import LoadingPage from '../../../Layout/app/LoadingPage';
import { history } from '../../../ProviderContainer';
import StatusOrderController from './StatusOrderController';






export default function Order() {
    const { id } = useParams();
    const [t] = useTranslation();



    const navigate  = useNavigate()
   

    const { data, isLoading, notFound } = useGetSingleOrder({order_id: id })

   
    const order = data || {};

    const columns = useTableColumns();
    const items = order?.items ? JSON.parse(order?.items || " ") : [];

    console.log(items);

console.log(order);
    
    if (isLoading) {
        return (<LoadingPage />)
    }

    return (
        <Card>
            <CardHeader style={{display:"flex" , justifyContent:"space-between" , margin:"20px"}}> 
                <CardTitle>

                    <p>{t("order_code")} : {order?.order_code}</p>
                </CardTitle>

              <span style={{display:"flex" , height:37, marginRight:7,justifyContent:"space-between" }}>
         
                <Button
                    onClick={() => navigate(-1)}
                    color="danger"
                >
                    {t("back")}
                </Button>
              </span>
                

            </CardHeader>
            <div style={{padding:"1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}>

  
                <StatusOrderController order_status={order.order_status} order_id={order.id} />
            

          <div>
   
          </div>
            </div>

            <CardBody style={{padding:"0rem 1.5rem"}}>

                <OrderForm order={order} />
                <DataTable
                    columns={columns}
                    data={items}
                    progressPending={isLoading}
               
                    // noDataComponent={<h6 className="my-4">{("no_records")}</h6>}
                    // noHeader
                
                />

            </CardBody>
   
        </Card>


    )
}
