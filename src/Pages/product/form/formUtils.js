import * as Yup from "yup";
import { buildFormData } from "api/helpers";
import { baseURL } from "api/config";
import { mapTranslatedProperties } from "helpers/language";

export const getInitialValues = (objectToEdit) => {
  return {
    product_price:objectToEdit?.product_price??0,
    product_quantity:objectToEdit?.product_quantity??0,
    product_main_image:objectToEdit?.product_main_image??'',
    translated_fields: {
      1: {
        product_name: mapTranslatedProperties(objectToEdit?.product_translations ,'name', 'en') ??'',
        product_description: mapTranslatedProperties(objectToEdit?.product_translations ,'description', 'en') ?? '',

      },
      2: {
        product_name: mapTranslatedProperties(objectToEdit?.product_translations ,'name', 'ar') ?? '',
        product_description: mapTranslatedProperties(objectToEdit?.product_translations ,'description', 'ar') ?? '',
      },
    },
    category_id:objectToEdit?.category_id,
    subcategory_id:objectToEdit?.subcategory_id,
    subsubcategory_id:objectToEdit?.subsubcategory_id,
    is_subsub_required:objectToEdit?.subsubcategory_id? true :false,  
    is_sub_required:objectToEdit?.subcategory_id? true :false,  
    is_highlight:objectToEdit?.is_highlight??false,
    is_most_purchase:objectToEdit?.is_most_purchase??false,
    is_latest:objectToEdit?.is_latest??false,
    is_cheapest:objectToEdit?.is_cheapest??false
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    translated_fields: Yup.object({
      1: Yup.object({
        product_name: Yup.string().required("required"),
        product_description: Yup.string().required("required"),

      }),
      2: Yup.object({
        product_name: Yup.string().required("required"),
        product_description: Yup.string().required("required"),

      }),
    }),
     category_id: Yup.mixed().required('required'),
     product_price: Yup.mixed().required('required'),
     product_quantity: Yup.mixed().required('required'),

     subcategory_id:Yup.mixed().notRequired()
     .when(["category_id",'is_sub_required'],
     {is:(val ,is_sub_required)=> {
      return val !=  undefined  && is_sub_required !=false
     },
     then:Yup.mixed().required("required"),otherwise:Yup.mixed().notRequired()
    }),
     subsubcategory_id:Yup.mixed().notRequired()
     .when(["subcategory_id" ,'is_subsub_required'],
     {is:(val , is_subsub_required)=>{

      return val && is_subsub_required != false
     },
     then:Yup.mixed().required("required"),otherwise:Yup.mixed().notRequired()
    }),

  
  });
};

export const getDataToSend = (values) => {
  const data = { ...values };
  if (values.subcategory_image === "") {
    delete data["subcategory_image"];
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
export const selectFailGender = [
  {value : "female" , label:"female"},
  {value:"male" , label:"male"}
] 


