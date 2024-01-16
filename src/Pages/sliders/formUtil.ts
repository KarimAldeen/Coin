
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {

}

interface ObjectToEdit extends formUtilCommon {

    id?:number,
  slider_image:any


}

interface InitialValues extends ObjectToEdit {

  slider_image:any
}
interface ValidateSchema  extends formUtilCommon{
  slider_image:any

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 

  return {
    id:objectToEdit?.id?? 0 ,
    slider_image:objectToEdit?.slider_image

  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    slider_image:Yup.mixed().required("required")
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  if(typeof data['slider_image'] == 'string'){
    delete data['slider_image']
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

