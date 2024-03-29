import React from 'react'

import OrderStatus from './OrderStatus';
import { useTranslation } from 'react-i18next';
import { useAcceptOrder, useCancelOrder, useDeliverOrder, useDeliveredOrder } from '../../../api/order';
import { LoadingButton } from '../../../Components/Ui/LoadingButton';
export default function StatusOrderController({ order_status, order_id }) {
    const acceptMutation = useAcceptOrder();
    const cancelMutation = useCancelOrder();
    const deliverMutation = useDeliverOrder();
    const deliveredMutation = useDeliveredOrder();
    const [t] = useTranslation();
    const controll = {
        pending: {
            nextMutation: acceptMutation,
            nextLabel: "accept",
            nextColor: "primary",
            prevMutation: cancelMutation,
            prevLabel: "cancel",
            prevColor: "danger",
        },
        accepted: {
            nextMutation: deliverMutation,
            nextLabel: "deliver",
            nextColor: "primary",
            prevMutation: cancelMutation,
            prevLabel: 'cancel',
            prevColor: "danger",
        },
        delivering: {
            nextMutation: deliveredMutation,
            nextLabel: "delivered",
            nextColor: "primary",
            prevMutation: cancelMutation,
            prevLabel: 'cancel',
            prevColor: "danger",
        },
        delivered: {
            nextMutation: null,
            nextLabel: null,
            prevMutation: null,
            prevLabel: null
        },
        canceled: {
            nextMutation: null,
            nextLabel: null,
            prevMutation: null,
            prevLabel: null
        },

    }
    return (
        <div >
            <div className="d-flex   align-items-center  justify-content-start   m-1" style={{gap:"10px"}}>
                <p >{t("order_status")}{" : "}{<OrderStatus order_status={order_status} />}</p>
                {
                    controll[order_status].nextMutation && controll[order_status].nextLabel && <LoadingButton
                        style={{ margin: "10px" }}
                        color={controll[order_status].nextColor}
                        isLoading={controll[order_status].nextMutation.isLoading}
                        onClick={() => controll[order_status].nextMutation.mutate({ order_id: order_id })}
                    >
                        {t(controll[order_status].nextLabel)}
                    </LoadingButton>
                }

                {
                    controll[order_status].prevMutation && controll[order_status].prevLabel && <LoadingButton
                        color={controll[order_status].prevColor}
                        isLoading={controll[order_status].prevMutation.isLoading}
                        onClick={() => controll[order_status].prevMutation.mutate({ order_id: order_id })}
                    >
                        {t(controll[order_status].prevLabel)}
                    </LoadingButton>
                }
            </div>

        </div>
    )
}
