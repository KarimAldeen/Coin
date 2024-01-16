import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import { useToggleStatus } from "./helper/useToggleStatus";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: `/api/admin/category/all`,
  GETAll: `/api/admin/category`,

  ADD: `/api/admin/category/create`,
  UPDATE: `/api/admin/category/update`,
  DELETE: `/api/admin/category/delete`,
  UPDATE_STATUS: `/api/admin/category/change_status`,
};

const KEY = "CATEGORIES";
export const useGetCategories = (params:any) => useGetQuery(KEY, API.GET, params);
export const useAddCategory = () => useAddMutation(KEY, API.ADD);
export const useUpdateCategory = () => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteCategory = () =>
  useDeleteMutation(KEY, API.DELETE, "category_id");
export const useUpdateCategoryStatus = () =>
  useToggleStatus(KEY, API.UPDATE_STATUS, "category_id");


export const useGetAllCategories = (params:any) => useGetQuery("GETALL" , API.GETAll , params)