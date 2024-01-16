
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/admin/ads/getAll",
    ADD: "/api/admin/ads/add",
    UPDATE: "/api/admin/ads/update",
    DELETE: "/api/admin/ads/delete",
  };

  const KEY = "ADS";
  export const useGetAds = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddAds = () => useAddMutation(KEY, API.ADD);
  export const useUpdateAds = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteAds = () =>useDeleteMutation(KEY, API.DELETE);
