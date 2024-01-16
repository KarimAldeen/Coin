import { Checkbox } from '@mui/material';
import { useGetAllCategories } from 'api/categories';
import { baseURL } from 'api/config';
import ImagePreview from 'components/ImagePreview';
import { SelectField, ValidatedField } from 'components/input';
import { useFormikContext } from 'formik';
import { mapTranslatedProperties } from 'helpers/language';
import { useImagePreview } from 'hooks';
import useConvertDataToSelect from 'hooks/useConvertDataToSelect';
import useCategoryOptions from 'hooks/useGetCategoryOptions';
import React from 'react'
import { Col, Row } from 'reactstrap';
import { useLanguageCode, useTranslation } from 'utility/language';

function ProductSecondForm() {

    const languageCode = useLanguageCode();

    const t = useTranslation();
    const formik = useFormikContext();
    const {data , isLoading} = useGetAllCategories()

    const category= useConvertDataToSelect({
        data:data?.category
    })
    const subcategory= useConvertDataToSelect({
        data:data?.subcategory})
    const subsubcategory= useConvertDataToSelect({
        data:data?.subsubcategory
    })



    const image  =formik?.values?.product_main_image
    const {preview , handleImageChange}= useImagePreview(
     image ? baseURL + image : null )

     
     
    const handelCheck = (e)=>{
      formik.setFieldValue('is_highlight' ,e?.target?.checked)
      
  }


        if(isLoading){
            return "LOADING"
        }
        



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
   
        <SelectField
      label={t("category")}
      options={
        category
      }
      name="category_id"
      onChange={(opt) => {
        formik.setFieldValue("category_id", opt.value);
        formik.setFieldValue("subcategory_id", "");
        formik.setFieldValue('is_sub_required' ,!(data?.subcategory.filter(sub => sub.parent_id === opt?.value).length  <= 0))
        formik.setFieldValue("subsubcategory_id", "");
        formik.setFieldValue("is_subsub_required", false);
      }}
      isRequired
    />
       <SelectField
      label={t("subcategory")}
      options={ChangeSelect(data?.subcategory.filter(sub => sub.parent_id === formik.getFieldProps('category_id').value) ,languageCode)}
      name="subcategory_id"
      isDisabled={data?.subcategory.filter(sub => sub.parent_id == formik.getFieldProps('category_id').value).length  <= 0}
      onChange={(opt) => {
        formik.setFieldValue("subcategory_id", opt.value);
        formik.setFieldValue("subsubcategory_id", "");
        formik.setFieldValue('is_subsub_required' , !(data?.subsubcategory.filter(sub => sub.parent_id == formik.getFieldProps('subcategory_id').value).length  <= 0))
      }}
      isRequired
    />
       <SelectField
      label={t("subsubcategory")}
      options={subsubcategory}
      name="subsubcategory_id"
      onChange={(opt) => {

        formik.setFieldValue("subsubcategory_id", opt.value);
      }}
      isDisabled={   
        !formik.getFieldProps('is_subsub_required').value
    }
      isRequired
    />
        <ValidatedField
        name="product_price"
        label={t("price")}
        placeholder={t("price")}
        type="number"
        required
      />
      <Col style={{display:"flex" , justifyContent:"space-around"}}>

          <div>
          <Checkbox
               
               defaultChecked={formik.getFieldProps('is_cheapest').value}
               onChange={(e)=> formik.setFieldValue('is_cheapest' ,e?.target?.checked)}
               inputProps={{ 'aria-label': 'controlled' }}
           />
               <p>{t('is_cheapest')}</p>
          </div>

          <div>
          <Checkbox
               
               defaultChecked={formik.getFieldProps('is_most_purchase').value}
               onChange={(e)=> formik.setFieldValue('is_most_purchase' ,e?.target?.checked)}
               inputProps={{ 'aria-label': 'controlled' }}
           />
               <p>{t('is_most_purchase')}</p>
          </div>
           
           <div>
           <Checkbox
               
               defaultChecked={formik.getFieldProps('is_latest').value}
               onChange={(e)=> formik.setFieldValue('is_latest' ,e?.target?.checked)}
               inputProps={{ 'aria-label': 'controlled' }}
           />
               <p>{t('is_latest')}</p>
           </div>
             
      </Col>
       
  
    </Col>
    <Col>
      <ValidatedField
        id="product_image"
        type="file"
        label={t("image")}
        name="product_main_image"
        accept="image/*"
        onChange={(e) => {
          handleImageChange(e);
          formik.setFieldValue("product_main_image", e.target.files[0]);
        }}
      />
      <ImagePreview preview={preview} />
      <div  style={{marginTop:"8px" , color:"white"}}>.</div>
      <ValidatedField
        name="product_quantity"
        label={t("product_quantity")}
        placeholder={t("product_quantity")}
        type="number"
        required
       
        
      />

      <Checkbox
               
               defaultChecked={formik.getFieldProps('is_highlight').value}
               onChange={(e)=>handelCheck(e)}
               inputProps={{ 'aria-label': 'controlled' }}
           />
               <p>{t('is_highlight')}</p>
    </Col>
  </Row>
  )
}

export default ProductSecondForm


export const ChangeSelect = (data =[] ,languageCode)=>{

  
    
      let options = [];
      if (data  && Array.isArray(data)) {
        options = data.map((category) => ({
          value: category.id,
          label: mapTranslatedProperties(
            category?.category_translations,
            "name",
            languageCode
          ),
        }));
      }

      return options
}