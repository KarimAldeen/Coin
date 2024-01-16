
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import { useToggleStatus } from "./helper/useToggleStatus";
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/admin/sliders",
    ADD: "/api/admin/sliders/create",
    UPDATE: "/api/admin/sliders/update",
    DELETE: "/api/admin/sliders/delete",
    UPDATE_STATUS: `/api/admin/slider/change_status`,

  };

  const KEY = "SLIDERS";
  export const useGetSliders = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddSliders = () => useAddMutation(KEY, API.ADD);
  export const useUpdateSliders = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteSliders = () =>useDeleteMutation(KEY, API.DELETE);
  export const useUpdateSliderStatus = () => useToggleStatus(KEY, API.UPDATE_STATUS, 'slider_id');
