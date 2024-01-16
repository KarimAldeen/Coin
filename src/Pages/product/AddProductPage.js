import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { Formik, Form } from "formik";
import Tabs from "components/Tabs";
import { getInitialValues, getValidationSchema } from "./form/formUtils";
import { buildFormData } from "api/helpers";
import { LoadingButton } from "components/input/LoadingButton";
import { history } from "../../../history";
import AuthComponent from "components/AuthComponent";
import useFormTabs from "./useFormTabs";


import { useAddProduct } from "api/owner_products";
import { useEffect } from "react";


const AddProductPage = (props) => {
  const t = useTranslation();
  const {mutate , isSuccess} = useAddProduct()
  const tabs = useFormTabs();

  const handelsubmit = (values)=>{

   
    let data  = {
      ar_product_name : values['translated_fields']['2']['product_name'],
      en_product_name : values['translated_fields']['1']['product_name'],
      en_product_description : values['translated_fields']['1']['product_description'],
      ar_product_description : values['translated_fields']['2']['product_description'],
      ...values
    }
    
    if(data?.subsubcategory_id !=''){
      data['category_id'] =data?.subsubcategory_id
    }else if(data?.subcategory_id !=''){
      data['category_id'] = data?.subcategory_id
    }
 
    data['is_highlight'] = data['is_highlight'] == false || data['is_highlight'] =='false'? 0:1 
    data['is_most_purchase'] = data['is_most_purchase'] == false || data['is_most_purchase'] =='false'? 0:1 
    data['is_cheapest'] = data['is_cheapest'] == false || data['is_cheapest'] =='false'? 0:1 
    data['is_latest'] = data['is_latest'] == false || data['is_latest'] =='false'? 0:1 

   const formData = new FormData();
      buildFormData(formData, data);
      mutate(formData)
  }


  useEffect(()=>{
    if(isSuccess){
      history.push('/products')
    }
  },[isSuccess])
  

  return (
    <Card>
      <CardHeader>
        <CardTitle style={{display:"flex"  , flexDirection:"column" , justifyContent:"center"}}>
          {t("product_information")}
        </CardTitle>
       
        <Button
          color="primary"
          onClick={() => history.push('/products')}
        >
          {t("back")}
        </Button>
      </CardHeader>
      <CardBody>

           <Formik
          onSubmit={handelsubmit}
          initialValues={getInitialValues()}
          validationSchema={getValidationSchema()}
        >
          {(formik) => (
            <Form>
              <Tabs tabs={tabs} />
              <AuthComponent>
                {/* <ProgressBar
                  value={percentCompleted}
                  isLoading={Loading}
                  isError={isError}
                  isSuccess={isSuccess}
                /> */}
                <div className="d-flex justify-content-center align-items-center">
                  <LoadingButton
                    type="submit"
                    color="primary"
                    isLoading={false}
                  >
                    {t("save")}
                  </LoadingButton>
                </div>
              </AuthComponent>
            </Form>
          )}
        </Formik>

       
      </CardBody>
    </Card>
  );
};


export default AddProductPage;
