
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  email:string,
  location:string,
  phone:number,

}

interface ObjectToEdit extends formUtilCommon {


}

interface InitialValues extends ObjectToEdit {

}
interface ValidateSchema  extends formUtilCommon{

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 

  return {
    email:objectToEdit?.email?? "",
    location:objectToEdit?.location?? "",
    phone:objectToEdit?.phone?? 0,
    
  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    email:Yup.string().required("required"),
    location:Yup.string().required('required'),
    phone:Yup.number().required('required'),


  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

