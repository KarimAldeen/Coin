
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import { useToggleStatus } from "./helper/useToggleStatus";
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/admin/slider/getAll",
    ADD: "/api/admin/slider/add",
    UPDATE: "/api/admin/slider/update",
    DELETE: "/api/admin/slider/delete",
    UPDATE_STATUS: `/api/admin/slider/update_status`,

  };

  const KEY = "SLIDERS";
  export const useGetSliders = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddSliders = () => useAddMutation(KEY, API.ADD);
  export const useUpdateSliders = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteSliders = () =>useDeleteMutation(KEY, API.DELETE);
  export const useUpdateSliderStatus = () => useToggleStatus(KEY, API.UPDATE_STATUS, 'slider_id');
