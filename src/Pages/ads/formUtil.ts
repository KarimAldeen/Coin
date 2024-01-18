
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";




export const getInitialValues = (objectToEdit: any | null = null) => {
   
  return {
    ads_id : objectToEdit?.id ?? "",
    image_en:objectToEdit?.translations?.at(0)?.image?? "" ,
    image_ar:objectToEdit?.translations?.at(1)?.image ?? "",
  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
    // validate input  
  return Yup.object().shape({
    
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
    

    if (typeof data.image_ar === 'string') {
      delete data.image_ar;
    }
    
    if (typeof data.image_en === 'string') {
      delete data.image_en;
    }
  
    console.log(data,"data");
    
  
  const formData = new FormData();
  buildFormData(formData, data);

  return formData;
  
};

