
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/admin/contactus",
    ADD: "/api/admin/contactus/create",
    UPDATE: "/api/admin/contactus/update",
    DELETE: "/api/admin/contactus/delete",
  };

  const KEY = "CONTACTUS";
  export const useGetContactus = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddContactus = () => useAddMutation(KEY, API.ADD);
  export const useUpdateContactus = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteContactus = () =>useDeleteMutation(KEY, API.DELETE);
