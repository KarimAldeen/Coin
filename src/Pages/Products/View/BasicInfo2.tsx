import React from 'react'
import { Col, Row } from 'reactstrap'
import KarimField from '../../../Components/Karimalden/KarimField'
import { useTranslation } from 'react-i18next';
import { useGetCategory } from '../../../api/category';
import useCategorySelectOption from '../../../utils/SelectOptions/useCategorySelectOption';

const BasicInfo2 = () => {
  const [t] = useTranslation();

  const categoryOption = useCategorySelectOption()



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <KarimField name="product_main_image" type="File" label='image' placeholder='image' />

        <KarimField
          type='Select'
          option={categoryOption}
          name="category_id"
          label={`${t("category")}`}
          placeholder={`${t("category")}`}
        />



        {/* <KarimField
          name="is_cheapest"
          label={t("is_cheapest")}
          placeholder={t("is_cheapest")}
          type="Checkbox"

        /> */}
        <KarimField
          name="is_most_purchase"
          label={t("is_most_purchase")}
          placeholder={t("is_most_purchase")}
          type="Checkbox"

        />

      </Col>
      <Col>
        <KarimField
          name="product_price"
          label={t("price")}
          placeholder={t("price")}
          type="number"

        />
        <KarimField
          name="product_quantity"
          label={t("product_quantity")}
          placeholder={t("product_quantity")}
          type="number"

        />
{/* 
        <KarimField
          name="is_latest"
          label={t("is_latest")}
          placeholder={t("is_latest")}
          type="Checkbox"

        />
 */}





        <KarimField
          name="is_highlight"
          label={t("is_highlight")}
          placeholder={t("is_highlight")}
          type="Checkbox"

        />
      </Col>


    </Row>
  )
}

export default BasicInfo2