import useGetQueryPagination from "./helper/ueGetPagination";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const KEYS={
    ORDERS:"ORDERS",
    SINGLE_ORDER:"SINGLE_ORDER"
}
const API={
    GET_ORDERS:`/api/admin/order/all`,
    SINGLE_ORDER:`/api/admin/order`,

    GET_ALL_ORDERS:`/api/admin/export_orders`,
    ACCEPT:`/api/admin/order/accept`,
    CANCLE:`/api/admin/order/cancel`,
    DELIVERING:`/api/admin/order/delivering`,
    DELIVERED:`/api/admin/order/delivered`,
    DELETE:`/api/admin/order/delete`,
    GIVE_ORDER_TO_EMPLOYEE:`/api/admin/delivery_employee/give_order`,
    GIVE_ORDER_TO_RAFEEQ:`/api/admin/rafeeq_order/create`,
    CANCEL_ORDER_TO_RAFEEQ:`/api/admin/rafeeq_order/cancel`


}
export const useGetOrders=(params:any)=>useGetQuery(KEYS.ORDERS,API.GET_ORDERS,params);
export const useGetSingleOrder=(params:any)=>useGetQuery(KEYS.SINGLE_ORDER,API.SINGLE_ORDER,params);


export const useGetAllOrders=(params:any)=>useGetQueryPagination(KEYS.ORDERS,API.GET_ALL_ORDERS,params,{enabled:!!params.vendor_filter});
export const useAcceptOrder=()=>useUpdateMutation(KEYS.SINGLE_ORDER,API.ACCEPT);
export const useCancelOrder=()=>useUpdateMutation(KEYS.SINGLE_ORDER,API.CANCLE);
export const useDeliverOrder=()=>useUpdateMutation(KEYS.SINGLE_ORDER,API.DELIVERING);
export const useDeliveredOrder=()=>useUpdateMutation(KEYS.SINGLE_ORDER,API.DELIVERED);
export const useDeleteOrder=()=>useDeleteMutation(KEYS.SINGLE_ORDER,API.DELETE,"order_id");
export const useCancellOrder=()=>useDeleteMutation(KEYS.SINGLE_ORDER,API.DELETE,"order_id");

export const useGiveOrderToEmployee=()=>useUpdateMutation(KEYS.SINGLE_ORDER,API.GIVE_ORDER_TO_EMPLOYEE) 
export const useGiveOrderToRafeeq=()=>useUpdateMutation(KEYS.SINGLE_ORDER,API.GIVE_ORDER_TO_RAFEEQ) 
export const CancelOrderRafeeq=()=>useUpdateMutation(KEYS.SINGLE_ORDER,API.CANCEL_ORDER_TO_RAFEEQ) 