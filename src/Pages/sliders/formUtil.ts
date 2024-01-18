
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {

}

interface ObjectToEdit extends formUtilCommon {

    id?:number,
  image_en:any,
  image_ar:any



}

interface InitialValues extends ObjectToEdit {

  image_en:any,
  image_ar:any

}
interface ValidateSchema  extends formUtilCommon{
  image_en:any
  image_ar:any

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 

  return {
    id:objectToEdit?.id?? 0 ,
    image_en:objectToEdit?.image_en,
    image_ar:objectToEdit?.image_ar

  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    image_en:Yup.mixed().required("required"),
    image_ar:Yup.mixed().required("required")

  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  if(typeof data['image_en'] == 'string'){
    delete data['image_en']
  }
    
  if(typeof data['image_ar'] == 'string'){
    delete data['image_ar']
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

