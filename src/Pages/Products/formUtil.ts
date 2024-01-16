
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";



export const getInitialValues = (objectToEdit: any | null = null) => {
 
  // console.log(objectToEdit);
  
  return {
    product_price:objectToEdit?.product_price??0,
    product_quantity:objectToEdit?.product_quantity??0,
    product_main_image:objectToEdit?.product_main_image??'',
    translated_fields: {
      1: {
        product_name: mapTranslatedProperties(objectToEdit?.product_translations ,'name', 1) ??'',
        product_description: mapTranslatedProperties(objectToEdit?.product_translations ,'description', 1) ?? '',

      },
      2: {
        product_name: mapTranslatedProperties(objectToEdit?.product_translations ,'name', 2) ?? '',
        product_description: mapTranslatedProperties(objectToEdit?.product_translations ,'description', 2) ?? '',
      },
    },
    category_id:objectToEdit?.category_id,
    is_highlight:objectToEdit?.is_highlight??false,
    is_most_purchase:objectToEdit?.is_most_purchase??false,
    is_cheapest:objectToEdit?.is_cheapest??false
  }
};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
    // validate input  
  return Yup.object().shape({
   
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  // console.log(data);

  if(typeof data['social_media_image'] == 'string') delete data['social_media_image']
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

