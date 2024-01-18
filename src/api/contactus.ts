
import useGetQuery from "./helper/useGetQuery"

  const API = {
    GET: "/api/admin/contact/all",
 
  };

  const KEY = "CONTACTUS";
  export const useGetContactus = (params?:any) => useGetQuery(KEY, API.GET, params);

