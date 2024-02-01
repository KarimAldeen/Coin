
import useGetQuery from "./helper/useGetQuery"

  const API = {
    GET: "/api/customer_product/all",

  };

  const KEY = "PARTNER";
  export const useGetPartnerInfo = (params?:any) => useGetQuery(KEY, API.GET, params);