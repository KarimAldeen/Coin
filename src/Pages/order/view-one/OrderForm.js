import React from 'react'
import { Row, Col } from 'reactstrap'
import classes from './OrderForm.module.scss';
import { useTranslation } from 'react-i18next';
export default function OrderForm({ order }) {
    
    const [t] = useTranslation();
    return (
        <>
            <Row xs={1} sm={1} md={2} lg={3} xl={3}>
                <Col className={classes.test} >
                    <p >{t("customer_name")}{" : "}{order.customer?.name}</p>
                    <p >{t("customer_phone_number")}{" : "}{order.customer?.phone}</p>
                    <p >{t("order_created_at")}{" : "}{order.created_at}</p>
                    <p >{t("payment_method")}{" : "}{t('cash_on_delivary')}</p>
                </Col>
                <Col className={classes.test} >
                    <p >{t("customer_zone_number")}{" : "}{order?.customer?.address?.zone_number}</p>
                    <p >{t("customer_address_street")}{" : "}{order?.customer?.address?.street}</p>
                    <p >{t("customer_address_building_number")}{" : "}{order?.customer?.address?.building_number}</p>

                </Col>
   
                
               
            </Row>
            <Row className={classes.Wrapper}>
              
                    <div className={classes.totalsForm}>

                        <h1 >{t("totals")}</h1>
                        <p >{t("sub_total")}{" : "}{JSON.parse(order?.totals)?.sub_total}</p>
                        <p >{t("delivery_fee")}{" : "}{JSON.parse(order?.totals)?.delivery_fees}</p>
                        <p >{t("overall_total")}{" : "}{JSON.parse(order?.totals)?.overall_total}</p>
                    </div>
         
            </Row>
        </>
    )
}
